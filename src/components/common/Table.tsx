import React from 'react';
import {
  Table as MuiTable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Paper,
  Box,
  Typography,
  type TableProps as MuiTableProps,
  IconButton
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export interface TableColumn {
  id: string;
  label: string;
  minWidth?: number;
  align?: 'left' | 'right' | 'center';
  isAction?: boolean;
  sortable?: boolean;
  render?: (row: Record<string, any>, rowIndex: number) => React.ReactNode;
}

export interface TableProps extends MuiTableProps {
  columns: TableColumn[];
  data: Record<string, any>[];
  page: number;
  rowsPerPage: number;
  totalCount: number;
  onPageChange: (newPage: number) => void;
  onRowsPerPageChange: (newRowsPerPage: number) => void;
  onEdit?: (row: Record<string, any>) => void;
  onDelete?: (row: Record<string, any>) => void;
  showIndex?: boolean;
  onSort?: (columnId: string) => void;
  sortBy?: string;
  sortDirection?: 'asc' | 'desc';
}

const Table: React.FC<TableProps> = ({
  columns,
  data,
  page,
  rowsPerPage,
  totalCount,
  onPageChange,
  onRowsPerPageChange,
  onEdit,
  onDelete,
  showIndex = true,
  onSort,
  sortBy,
  sortDirection,
  ...props
}) => {
  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    onPageChange(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    onRowsPerPageChange(parseInt(event.target.value, 10));
  };

  const handleSort = (column: TableColumn) => {
    if (onSort && column.sortable) {
      onSort(column.id);
    }
  };

  return (
    <TableContainer component={Paper}>
      <MuiTable {...props}>
        <TableHead>
          <TableRow>
            {showIndex && <TableCell>#</TableCell>}
            {columns.map((column) => (
              <TableCell
                key={column.id}
                align={column.align}
                onClick={() => handleSort(column)}
                sx={{ minWidth: column.minWidth, ...(column.sortable ? { cursor: 'pointer', userSelect: 'none' } : {}) }}
              >
                {column.label}
                {column.sortable && sortBy === column.id && (
                  sortDirection === 'asc' ? <ArrowDropUpIcon fontSize="small" /> : <ArrowDropDownIcon fontSize="small" />
                )}
              </TableCell>
            ))}
            {(onEdit || onDelete) && <TableCell align="center">Actions</TableCell>}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.length > 0 ? (
            data.map((row, index) => (
              <TableRow key={index}>
                {showIndex && (
                  <TableCell>{page * rowsPerPage + index + 1}</TableCell>
                )}
                {columns.map((column) => (
                  <TableCell key={column.id} align={column.align}>
                    {column.render ? column.render(row, index) : row[column.id]}
                  </TableCell>
                ))}
                {(onEdit || onDelete) && (
                  <TableCell align="center">
                    {onEdit && (
                      <IconButton onClick={() => onEdit(row)} color="primary">
                        <EditIcon />
                      </IconButton>
                    )}
                    {onDelete && (
                      <IconButton onClick={() => onDelete(row)} color="error">
                        <DeleteIcon />
                      </IconButton>
                    )}
                  </TableCell>
                )}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length + 2}>
                <Box p={2} textAlign="center">
                  <Typography variant="body2" color="textSecondary">
                    No records found
                  </Typography>
                </Box>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </MuiTable>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={totalCount}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
};

export default Table;