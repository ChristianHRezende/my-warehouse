import React from 'react';
import {
  InputWrapper,
  InputField,
  IconButtonStyle,
  SearchIconWrapper,
  InputContainer,
} from './TextField.styles'; // Importando os estilos

import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import * as T from '../../../../@shared/components/dataDisplay/Typography/Typography.styles';

interface CustomizedInputBaseProps {
  variant: 'search' | 'default';
}

const TextField: React.FC<CustomizedInputBaseProps> = ({ variant }) => {
  return (
    <InputWrapper>
      <T.Main_home>Customer Order</T.Main_home>
      {variant === 'search' ? (
        <InputContainer>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <InputField placeholder="Search" />
          <IconButtonStyle aria-label="menu">
            <MenuIcon />
          </IconButtonStyle>
        </InputContainer>
      ) : (
        <InputField placeholder="Enter text" />
      )}
    </InputWrapper>
  );
};

export default TextField;
