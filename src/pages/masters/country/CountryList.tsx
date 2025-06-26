// src/pages/masters/country/CountryList.tsx
import { Box, Dialog, DialogTitle } from '@mui/material';
import { useEffect, useState } from 'react';
import { Button, Table, ToggleSwitch } from '../../../components/common';
// import { CountryForm } from './CountryForm';
import { ICountryMasterResponse } from '@/types/masters/mastersResponse';
import { MasterService } from '../../../services/master/MasterService';
import AddIcon from '@mui/icons-material/Add';
import { styled } from '@mui/material/styles';

const StyledAddButton = styled(Button)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  textTransform: 'none',
  fontWeight: 500,
  boxShadow: '0px 2px 8px rgba(0,0,0,0.08)'
}));

const CountryList = () => {
  const [countries, setCountries] = useState<ICountryMasterResponse[]>([]);
  const [open, setOpen] = useState(false);
  const [editData, setEditData] = useState<any | null>(null);
  const [sortBy, setSortBy] = useState<'name' | 'isoCode'>('name');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  const getCountries = async () => {
    const response = await MasterService.getCountries();
    setCountries(response);
  };

  useEffect(() => {
    getCountries();
  }, []);

  const handleAdd = () => {
    setEditData(null);
    setOpen(true);
  };

  const handleEdit = (country: any) => {
    setEditData(country);
    setOpen(true);
  };

  const handleSort = (columnId: string) => {
    if (sortBy === columnId) {
      setSortDirection((prev) => (prev === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortBy(columnId as 'name' | 'isoCode');
      setSortDirection('asc');
    }
  };

  // Sort countries array in-memory for demo (replace with backend sort if needed)
  const sortedCountries = [...countries].sort((a, b) => {
    const aValue = a[sortBy]?.toString().toLowerCase() || '';
    const bValue = b[sortBy]?.toString().toLowerCase() || '';
    if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
    if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
    return 0;
  });

  // Example: handle status change (API call or UI-only)
  const handleStatusChange = async (countryId: string, newStatus: boolean) => {
    // Uncomment and implement API call if needed
    // await MasterService.updateCountryStatus(countryId, newStatus);
    setCountries((prev) =>
      prev.map((c) => (c.id === countryId ? { ...c, activeStatus: newStatus } : c))
    );
  };

//   const handleDelete = async (country: any) => {
//     await deleteCountry(country._id);
//     getCountries();
//   };

//   const handleSubmit = async (values: { name: string; isoCode: string }) => {
//     if (editData) {
//       await updateCountry(editData._id, values);
//     } else {
//       await createCountry(values);
//     }
//     setOpen(false);
//     getCountries();
//   };

  return (
    <Box>
      <Box display="flex" alignItems="center" justifyContent="flex-start" mb={2} mt={2} mx={2}>
        <Box sx={{ flex: 1 }}>
          <h2>Country Management</h2>
        </Box>
        <StyledAddButton
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          onClick={handleAdd}
        >
          Add Country
        </StyledAddButton>
      </Box>

      <Box mx={2}>
        <Table
          columns={[
            { id: 'name', label: 'Name', sortable: true },
            { id: 'isoCode', label: 'ISO Code', sortable: true },
            {
              id: 'activeStatus',
              label: 'Active Status',
              render: (row) => (
                <ToggleSwitch
                  checked={row.activeStatus}
                  onChange={(checked) => handleStatusChange(row.id, checked)}
                  label={row.activeStatus ? 'Active' : 'Inactive'}
                />
              ),
            },
          ]}
          data={sortedCountries}
          page={0}
          rowsPerPage={100}
          totalCount={countries.length}
          onPageChange={() => {}}
          onRowsPerPageChange={() => {}}
          onEdit={handleEdit}
          // onDelete={handleDelete}
          showIndex
          sortBy={sortBy}
          sortDirection={sortDirection}
          onSort={handleSort}
        />
      </Box>

      {/* <Dialog open={open} onClose={() => setOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle>{editData ? 'Edit Country' : 'Add Country'}</DialogTitle>
        <Box p={3}>
          <CountryForm
            initialValues={editData}
            onSubmit={handleSubmit}
            onClose={() => setOpen(false)}
            isEdit={!!editData}
          />
        </Box>
      </Dialog> */}
    </Box>
  );
};

export default CountryList;
