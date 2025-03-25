import styled from 'styled-components';

export const PrimaryButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 154px;
  height: 37px;

  background: #be202f;
  border-radius: 30px;
`;

export const SecondaryButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px 30px;
  gap: 10px;
  width: 346px;
  height: 57px;
  background: #be202f;
  border-radius: 30px;
  /* Button */

  /* Button */
`;

export const AppBarRightButton = styled.button`
  /* 01 */

  /* Auto layout */
  display: flex;
  flex-direction: row;
  align-items: center;

  gap: 16px;
  isolation: isolate;
  color: black;
  width: 208px;
  height: 40px;

  border-radius: 12px;
  background: transparent;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  /* identical to box height, or 143% */

  color: #242220;

  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 1;
  z-index: 2;
`;
