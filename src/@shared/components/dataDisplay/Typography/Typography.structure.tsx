import { TypographyProps } from "./Typography.types";
import * as T from "./Typography.styles";

const Typography = (props: TypographyProps) => {
    const {variantTypography, ...restProps} = props;

    switch(variantTypography){
        case "title_login_bar":
            return <T.Title_login_bar  {...restProps}/>;

        case "subtitle_login_bar":
            return <T.Subtitle_login_bar {...restProps}/>; 
  
        case "title_login_sign":
            return <T.Title_login_sign {...restProps} />;
            
        case "subtitle_login_sign":
        return <T.Subtitle_login_sign {...restProps} />;

        case "text_buton":
            return <T.Text_Button{...restProps}/>;
        
        default: return <h1/>;
    }


} 

export default Typography;