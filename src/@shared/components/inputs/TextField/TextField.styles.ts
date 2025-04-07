import styled from 'styled-components';

interface InputSelectFieldProps {
  width?: string;
}

// Wrapper para alinhar os itens horizontalmente
export const InputWrapper = styled.div`
  display: flex;
  margin-top: 1%;
  margin-right: 1%;
  margin-block-end: 1%;
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

export const FormTextField = styled.input`
  /* Frame 1082 */

  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  gap: 10px;

  width: ${prop => {
    return prop.width || '278.34px';
  }};
  height: 45px;

  background: #ffffff;
  border: 1px solid #d9d9d9;
  border-radius: 5px;

  /* Inside auto layout */
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`;

export const InputSelectField = styled.select<InputSelectFieldProps>`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;

  width: ${prop => {
    return prop.width || '278.34px';
  }};

  height: 45px;

  background: #ffffff;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  color: black;
  align-self: stretch;
`;

// Estilo dos ícones de Menu, Search e Directions
export const IconButtonStyle = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background: #be202f;
  box-shadow: 0px 4px 24px rgba(190, 32, 47, 0.09);
  border-radius: 12px;
  margin-left: 5%;
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
