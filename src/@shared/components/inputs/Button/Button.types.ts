import React from 'react';

type DefaultButtonProps = React.JSX.IntrinsicElements['button'];

export interface ButtonProps extends DefaultButtonProps {
  variant: 'primary' | 'secondary' | 'appBarRightButton';
}
