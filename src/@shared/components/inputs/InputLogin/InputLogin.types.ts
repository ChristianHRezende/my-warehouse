import React from 'react';

type DefaultInputLoginProps = React.JSX.IntrinsicElements["input"];

export interface inputLoginProps extends DefaultInputLoginProps{
  variant: "username" | "password";
}