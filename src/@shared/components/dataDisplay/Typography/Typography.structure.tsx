import { TypographyProps } from './Typography.types';
import * as T from './Typography.styles';

const Typography = (props: TypographyProps) => {
  const { variant, ...restProps } = props;

  switch (variant) {
    case 'title_login_bar':
      return <T.Title_login_bar {...restProps} />;

    case 'subtitle_login_bar':
      return <T.Subtitle_login_bar {...restProps} />;

    case 'title_login_sign':
      return <T.Title_login_sign {...restProps} />;

    case 'subtitle_login_sign':
      return <T.Subtitle_login_sign {...restProps} />;

    case 'title_div_login':
      return <T.Title_div_login {...restProps} />;
    case 'subtitle_div_login':
      return <T.subtitle_div_login {...restProps} />;
    case 'text_button':
      return <T.Text_Button {...restProps} />;
    case 'register_button':
      return <T.Register_button {...restProps} />;

    case 'tentativa_buto':
      return <T.Tentativa_buton {...restProps} />;
    case 'main_home':
      return <T.Tentativa_buton {...restProps} />;

    case 'label':
      return <T.LabelText {...restProps} />;

    default:
      return <h1 />;
  }
};

export default Typography;
