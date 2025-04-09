import React from 'react';
import {
  InputWrapper,
  InputField,
  IconButtonStyle,
  SearchIconWrapper,
  InputContainer,
  InputSelectField,
  FormTextField,
  InputContainerDiv,
} from './TextField.styles';

import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { TextFieldProps } from './TextField.Types';
import { Typography } from '../../dataDisplay/Typography';

const TextField: React.FC<TextFieldProps> = ({
  variant,
  label = '',
  options = [],
  placeholder = '',

  ...restProps
}) => {
  switch (variant) {
    case 'search':
      return (
        <InputContainerDiv>
          {label.length > 0 && (
            <Typography variant="label"> {label} </Typography>
          )}
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
        </InputContainerDiv>
      );

    case `select`:
      return (
        <InputContainerDiv>
          {label.length > 0 && (
            <Typography variant="label"> {label} </Typography>
          )}
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
        </InputContainerDiv>
      );

    case `form`:
      return (
        <InputContainerDiv>
          {label.length > 0 && (
            <Typography variant="label"> {label} </Typography>
          )}
          <InputWrapper>
            <FormTextField {...restProps}></FormTextField>;
          </InputWrapper>
        </InputContainerDiv>
      );

    default:
      return (
        <InputContainerDiv>
          {label.length > 0 && (
            <Typography variant="label"> {label} </Typography>
          )}
          <InputWrapper>
            <InputField
              placeholder={placeholder || 'Enter text'}
              {...restProps}
            />
          </InputWrapper>
        </InputContainerDiv>
      );
  }
};

export default TextField;
