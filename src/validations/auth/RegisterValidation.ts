import * as yup from 'yup';
import { RegisterViewModel } from '../../viewmodels/auth/RegisterViewModel';

export const registerValidationSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, 'Name must be at least 2 characters')
    .required('Name is required'),
  email: yup
    .string()
    .email('Please enter a valid email address')
    .required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required('Please confirm your password'),
  phone: yup
    .string()
    .matches(/^[0-9+\-\s()]*$/, 'Please enter a valid phone number')
    .required('Phone number is required'),
  isNRI: yup.boolean().default(false),
});

export type RegisterFormValues = yup.InferType<typeof registerValidationSchema>;

export const initialRegisterValues: RegisterFormValues = new RegisterViewModel(); 