import { GridRowsProp, GridColDef } from '@mui/x-data-grid';

export const columns: GridColDef[] = [
  { field: 'col1', headerName: 'ORDER NO', width: 150 },
  { field: 'col2', headerName: 'ITEM', width: 150 },
  { field: 'col3', headerName: 'CUSTOMER', width: 150 },
  { field: 'col4', headerName: 'STATUS', width: 150 },
  { field: 'col5', headerName: 'ORDERED ON', width: 150 },
  { field: 'col6', headerName: 'CREATED BY', width: 150 },
];

// Ajustando para um único array de objetos (linhas)
export const rows: GridRowsProp = [
  {
    id: 1,
    col1: 'FG-Silk101474',
    col2: 'Red Carpet',
    col3: 'Silky Wool',
    col4: 'Pending',
    col5: '2058-03-07',
    col6: 'ParasBuda',
  },
  {
    id: 2,
    col1: 'FG-Silk1014742',
    col2: 'Red Carpet2',
    col3: 'Silky Wool2',
    col4: 'Pending2',
    col5: '2058-03-072',
    col6: 'ParasBuda2',
  },
];
