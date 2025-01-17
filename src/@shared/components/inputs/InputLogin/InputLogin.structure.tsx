import React from 'react';
import { InputLoginProps } from './InputLogin.types';
import * as S from './InputLogin.styles';

const InputLogin: React.FC<InputLoginProps> = ({ variant, ...restProps }) => {
  console.log('Rendering InputLogin:', variant);

  return (
    <S.InputLogin_Style
      {...restProps}
      type={
        variant === 'password'
          ? 'password'
          : variant === 'username'
            ? 'email'
            : 'text'
      }
    />
  );
};

export default InputLogin;
