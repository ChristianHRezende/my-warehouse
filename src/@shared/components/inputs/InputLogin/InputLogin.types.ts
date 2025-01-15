import React from "react";

type DefaultInputLoginProps = React.JSX.IntrinsicElements["input"];

export interface InputLoginProps extends DefaultInputLoginProps {
  variant: "password" | "username";
}
