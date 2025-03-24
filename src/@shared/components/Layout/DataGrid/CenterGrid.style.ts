import styled from '@emotion/styled';

export const GridContainer = styled.div<{
  height: number;
  width: string | number;
}>`
  height: ${({ height }) => height}-1px;
  width: ${({ width }) => (typeof width === 'number' ? `${width}px` : width)};
  margin: 0 auto; /* Centraliza horizontalmente */
`;
