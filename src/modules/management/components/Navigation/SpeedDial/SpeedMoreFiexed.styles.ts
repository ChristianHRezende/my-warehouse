import styled from 'styled-components';

export const SpeedDialContainer = styled.div`
  position: fixed; /* Fixa na tela */
  bottom: 16px; /* Distância do fundo */
  right: 16px; /* Distância da direita */
  z-index: 1000;
`;

export const SpeedDialBasic = styled.div`
  position: absolute;
  bottom: 1px;
  right: 16px;
`;
/*
create if you need other button in home page = +
export const CustomButtonMore = styled.button`
  background-color: rgb(58, 13, 13);
  color: white;
  padding: 8px 12px;
  border: none;
  border-radius: 100%;
  cursor: pointer;
`;
*/
