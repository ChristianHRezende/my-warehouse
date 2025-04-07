import React from 'react';
import {
  InputWrapper,
  InputField,
  IconButtonStyle,
  SearchIconWrapper,
  InputContainer,
  InputSelectField,
  FormTextField,
} from './TextField.styles';

import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { TextFieldProps } from './TextField.Types';

const TextField: React.FC<TextFieldProps> = ({
  variant,
  options = [],
  placeholder = '',
  ...restProps
}) => {
  switch (variant) {
    case 'search':
      return (
        <InputWrapper>
          <InputContainer>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <InputField placeholder="Search" {...restProps} />
            <IconButtonStyle aria-label="menu">
              <MenuIcon />
            </IconButtonStyle>
          </InputContainer>
        </InputWrapper>
      );

    case `select`:
      return (
        <InputWrapper>
          <InputSelectField {...restProps}>
            <option value="">Selecione</option>
            {options.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </InputSelectField>
        </InputWrapper>
      );

    case `form`:
      return (
        <InputWrapper>
          <FormTextField {...restProps}></FormTextField>;
        </InputWrapper>
      );

    default:
      return (
        <InputWrapper>
          <InputField
            placeholder={placeholder || 'Enter text'}
            {...restProps}
          />
        </InputWrapper>
      );
  }
};

export default TextField;
