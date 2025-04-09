// type DefaultTextFieldProps = React.JSX.IntrinsicElements['text'];

interface OptionSelect {
  label: string;
  value: string;
}
export interface TextFieldProps {
  variant: 'search' | 'default' | 'select' | `form`;
  options?: OptionSelect[];
  width?: string;
  placeholder?: string;
  label?: string;
}
