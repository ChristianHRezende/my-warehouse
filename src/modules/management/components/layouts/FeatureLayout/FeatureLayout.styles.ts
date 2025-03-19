import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 5;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100vw; /* Ocupa 100% da largura da tela */
  height: 100vh;
`;

export const MenuColumn = styled.div`
  display: flex;
  flex: 1;
  background-color: antiquewhite;
  justify-content: space-between;
  flex-direction: column;
`;
export const containerHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 auto;
  margin-top: 20%;
`;

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
  flex: 4;
  color: black;
  flex-direction: column;
  background-color: white;
`;
