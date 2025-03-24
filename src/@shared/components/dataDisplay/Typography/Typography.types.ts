//Este arquivo define os tipos e as propriedades para o componente Typography
import React from 'react';
type DefaultTypographyProps = React.JSX.IntrinsicElements['h1'];

export interface TypographyProps extends DefaultTypographyProps {
  variant:
    | 'title_login_bar'
    | 'subtitle_login_bar'
    | 'title_login_sign'
    | 'subtitle_login_sign'
    | 'text_button'
    | 'title_div_login'
    | 'subtitle_div_login'
    | 'register_button'
    | 'tentativa_buto'
    | 'main_home';
}
