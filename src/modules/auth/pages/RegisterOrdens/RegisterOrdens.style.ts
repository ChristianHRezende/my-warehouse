import styled from 'styled-components';

export const Header = styled.div`
  display: flex;

  align-items: center;
  width: 100%;
  height: 46px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
`;
export const Main = styled.div`
  display: flex;
  margin-top: 0.4%;
  width: 100%;
  flex: 1;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
`;

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #f0f2f5;
  box-shadow: 10px 14px 134px 10px rgba(221, 227, 248, 0.6);
  border-radius: 10px;
  min-height: 100vh;
`;

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
  align-items: flex-start;
  padding: 0px;
  gap: 10px;
`;

export const ColumContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
  padding: 0px 10px;
`;
