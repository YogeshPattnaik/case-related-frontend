import React from 'react';
import { Box, CircularProgress } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { DropdownOption } from '../common/AutoCompleteDropdown';
import { TextInput, DropDown, AutoCompleteDropdown, Button } from '../common';

interface FieldDefinition {
  name: string;
  label: string;
  type: 'text' | 'select';
  options?: DropdownOption[];
  variant?: 'autocomplete' | 'dropdown';
  required?: boolean;
}

interface MasterFormProps {
  fields: FieldDefinition[];
  initialValues: Record<string, any>;
  onSubmit: (values: Record<string, any>) => void;
  isEditMode?: boolean;
  loading?: boolean;
}

function getHelperText(error: any, touched: boolean): string | undefined {
  if (!touched) return undefined;
  if (typeof error === 'string') return error;
  if (Array.isArray(error)) return error.filter(e => typeof e === 'string').join(', ');
  return undefined;
}

const MasterForm: React.FC<MasterFormProps> = ({
  fields,
  initialValues,
  onSubmit,
  isEditMode = false,
  loading = false,
}) => {
  const validationSchema = Yup.object(
    fields.reduce((acc, field) => {
      if (field.required) {
        acc[field.name] = Yup.string().required(`${field.label} is required`);
      }
      return acc;
    }, {} as Record<string, any>)
  );

  const formik = useFormik({
    initialValues,
    validationSchema,
    enableReinitialize: true,
    onSubmit,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Box display="flex" flexDirection="column" gap={2}>
        {fields.map((field) => {
          if (field.type === 'text') {
            return (
              <TextInput
                key={field.name}
                fullWidth
                label={field.label}
                name={field.name}
                value={formik.values[field.name] || ''}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched[field.name] && Boolean(formik.errors[field.name])}
                helperText={getHelperText(formik.errors[field.name], !!formik.touched[field.name])}
              />
            );
          }

          if (field.type === 'select' && field.variant === 'autocomplete') {
            const selected = field.options?.find(opt => opt.id === formik.values[field.name]) || null;

            return (
              <AutoCompleteDropdown
                key={field.name}
                label={field.label}
                options={field.options || []}
                value={selected}
                onChange={(_, newValue) => {
                  formik.setFieldValue(field.name, newValue ? newValue.id : '');
                }}
                onBlur={formik.handleBlur}
                error={!!(formik.touched[field.name]) && !!(formik.errors[field.name])}
                helperText={getHelperText(formik.errors[field.name], !!formik.touched[field.name])}
                getOptionLabel={(option) => option.name}
                isOptionEqualToValue={(option, value) => option.id === value.id}
              />
            );
          }

          if (field.type === 'select' && field.variant === 'dropdown') {
            const dropdownOptions = (field.options || []).map(opt => ({
              label: opt.name,
              value: opt.id,
            }));

            return (
              <DropDown
                key={field.name}
                label={field.label}
                value={formik.values[field.name]}
                options={dropdownOptions}
                onChange={(val) => formik.setFieldValue(field.name, val)}
                onBlur={formik.handleBlur}
                error={!!(formik.touched[field.name] && formik.errors[field.name])}
              />
            );
          }

          return null;
        })}

        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} /> : isEditMode ? 'Update' : 'Create'}
        </Button>
      </Box>
    </form>
  );
};

export default MasterForm;
