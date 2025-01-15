import { TypographyProps } from "./Typography.types";
import * as T from "./Typography.styles";

const Typography = (props: TypographyProps) => {
  const { variant, ...restProps } = props;

  switch (variant) {
    case "title_login_bar":
      return <T.Title_login_bar {...restProps} />;

<<<<<<< HEAD
        case "subtitle_login_bar":
            return <T.Subtitle_login_bar {...restProps}/>; 
  
        case "title_login_sign":
            return <T.Title_login_sign {...restProps} />;
            
        case "subtitle_login_sign":
        return <T.Subtitle_login_sign {...restProps} />;
        
        case "title_div_login":
            return <T.Title_div_login{...restProps}/>;
            case "text_button":
            return <T.Text_Button{...restProps}/>;
=======
    case "subtitle_login_bar":
      return <T.Subtitle_login_bar {...restProps} />;
>>>>>>> 1732fe4372e95311ed12eaf7a2fae37d3bb2ddab

    case "title_login_sign":
      return <T.Title_login_sign {...restProps} />;

    case "subtitle_login_sign":
      return <T.Subtitle_login_sign {...restProps} />;

    case "title_div_login":
      return <T.Title_div_login {...restProps} />;

    case "subtitle_div_login":
      return <T.subtitle_div_login {...restProps} />;

    case "text_button":
      return <T.Text_Button {...restProps} />;

    default:
      return <h1 />;
  }
};

export default Typography;
