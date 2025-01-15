import React from "react";
import { InputLoginProps } from "./InputLogin.types";
import * as S from "./InputLogin.styles";

const InputLogin: React.FC<InputLoginProps> = ({ variant, ...restProps }) => {
  console.log("Rendering InputLogin:", variant);
  const placeholder =
    variant === "username"
      ? "Username"
      : variant === "password"
        ? "Password"
        : "";

  return (
    <S.InputLogin_Style
      {...restProps}
      placeholder={placeholder}
      type={
        variant === "password"
          ? "password"
          : variant === "username"
            ? "email"
            : "text"
      }
    />
  );
};

export default InputLogin;
