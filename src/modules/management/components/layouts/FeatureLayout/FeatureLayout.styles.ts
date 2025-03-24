import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 2;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
`;

export const MenuColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: fixed; /* Fixando o menu */
  top: 0; /* Definindo o topo fixo */
  left: 0;
  width: 19%;
  height: 100%;
  background: rgba(255, 255, 255, 0.93);
  border-radius: 5px;
`;

export const containerHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 15%;
`;

/* Frame 1137 */

export const ContainerDown = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px 0px 16px;

  margin: 0 auto;
`;

export const ContentColumn = styled.div`
  display: flex;
  flex: 2;

  color: black;
  flex-direction: column;
  background-color: white;
  margin-left: 18.78%; /* Adiciona um espaço à esquerda para não sobrepor o Menu */

  width: calc(100% - 18%);
  background: rgba(255, 255, 255, 0.97);
`;
