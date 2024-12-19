import { ButtonProps } from "./Button.types";
import * as S from "./Button.styles";

const Button = (props: ButtonProps) => {
  const { variant, ...restProps } = props;
  switch (variant) {
    case "secondary":
      return <S.SecondaryButton {...restProps} />;
    default:
      return <S.PrimaryButton {...restProps} />;
  }
};

export default Button;
