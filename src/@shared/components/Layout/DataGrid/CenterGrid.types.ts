import { GridRowsProp, GridColDef } from '@mui/x-data-grid';

export interface CenterGridProps {
  rows: GridRowsProp; // Dados das linhas
  columns: GridColDef[]; // Definição das colunas
  height?: number; // Altura opcional
  width?: string | number; // Largura opcional
}
