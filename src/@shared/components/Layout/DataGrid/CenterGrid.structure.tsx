import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { GridContainer } from './CenterGrid.style';
import { CenterGridProps } from './CenterGrid.types';

const CenterGrid: React.FC<CenterGridProps> = ({
  rows,
  columns,
  height = 400,
  width = '100%',
}) => {
  return (
    <GridContainer height={height} width={width}>
      <DataGrid rows={rows} columns={columns} />
    </GridContainer>
  );
};

export default CenterGrid;
