import React from 'react';
import * as S from './FeatureLayout.styles';
import CenterGrid from '../../../../../@shared/components/Layout/DataGrid/CenterGrid.structure';
import { columns, rows } from '../../../DateForCentralGrid/DateCentralGrid';

type FeatureLayoutProps = React.PropsWithChildren;

const FeatureLayout = (props: FeatureLayoutProps) => {
  return (
    <S.Container>
      <S.MenuColumn>
        <p>itens</p>
        <p>Configs</p>
      </S.MenuColumn>
      <S.ContentColumn>
        {props.children}
        <CenterGrid rows={rows} columns={columns} height={300} width="90%" />
      </S.ContentColumn>
    </S.Container>
  );
};

export default FeatureLayout;
