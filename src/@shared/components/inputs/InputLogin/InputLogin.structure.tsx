import React from "react";
import { inputLoginProps } from "./InputLogin.types";
import * as S from "./InputLogin.styles";

const InputLogin: React.FC<inputLoginProps> = ({ variant, ...restProps }) => {
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
      type={variant === "password" ? "username" : "text"} 
    />
  );
};

export default InputLogin;
