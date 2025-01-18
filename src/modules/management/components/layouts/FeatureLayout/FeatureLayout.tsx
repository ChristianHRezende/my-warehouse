import React from 'react';
import * as S from './FeatureLayout.styles';

type FeatureLayoutProps = React.PropsWithChildren;

const FeatureLayout = (props: FeatureLayoutProps) => {
  return (
    <S.Container>
      <S.MenuColumn>
        <p>items</p>
        <p>Configs</p>
      </S.MenuColumn>
      <S.ContentColumn>{props.children}</S.ContentColumn>
    </S.Container>
  );
};

export default FeatureLayout;
