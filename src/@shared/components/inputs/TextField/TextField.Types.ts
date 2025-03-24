import React from 'react';

type DefaultTextFieldProps = React.JSX.IntrinsicElements['text'];

export interface TextFieldProps extends DefaultTextFieldProps {
  variant: 'search' | 'default';
}
