import styled from 'styled-components';

// Wrapper para alinhar os itens horizontalmente
export const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-content: end;
`;

// Estilo do campo de input com o ícone dentro
export const InputField = styled.input`
  box-sizing: border-box;
  padding: 9px 20px 9px 40px; /* Adiciona padding à esquerda para o ícone */
  width: 331px;
  height: 48px;
  color: black;
  background: rgb(255, 255, 255);
  border: 1px solid rgba(238, 238, 238, 0.69);
  border-radius: 10px;
  font-size: 14px;
`;

// Estilo dos ícones de Menu, Search e Directions
export const IconButtonStyle = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  background: #be202f;
  box-shadow: 0px 4px 24px rgba(190, 32, 47, 0.09);
  border-radius: 12px;
  cursor: pointer;
`;

// Estilo do ícone de pesquisa dentro do input
export const SearchIconWrapper = styled.div`
  position: absolute;
  left: 3%;
  color: gray;
`;

// Estilo do container do input para alinhar o ícone
export const InputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;
