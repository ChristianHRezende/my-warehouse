import React from 'react';
import * as S from './FeatureLayout.styles';
import * as T from '../../../../../@shared/components/dataDisplay/Typography/Typography.styles';
import CenterGrid from '../../../../../@shared/components/Layout/DataGrid/CenterGrid.structure';
import { columns, rows } from '../../DateForCentralGrid/DateCentralGrid';
import { FiSettings } from 'react-icons/fi';
import { BasicSpeedDial } from '../../Navigation';
import TextField from '../../../../../@shared/components/inputs/TextField/TextField.structure';
import { Button } from '../../../../../@shared/components';

type FeatureLayoutProps = React.PropsWithChildren;

const FeatureLayout = (props: FeatureLayoutProps) => {
  return (
    <>
      <BasicSpeedDial />
      <S.Container>
        <S.MenuColumn>
          <S.containerHeader>
            <T.Main_home>MAIN</T.Main_home>
            <Button variant="appBarRightButton">
              {' '}
              <FiSettings size={14} style={{ marginRight: '8px' }} />
              Purchase
            </Button>
            <Button variant="appBarRightButton">
              <FiSettings size={14} style={{ marginRight: '8px' }} />
              Customer Order
            </Button>
          </S.containerHeader>
          <S.ContainerDown>
            <Button variant="appBarRightButton">
              {' '}
              <FiSettings size={14} style={{ marginRight: '8px' }} />
              New
            </Button>
            <Button variant="appBarRightButton">
              {' '}
              <FiSettings size={14} style={{ marginRight: '8px' }} />
              User
            </Button>
            <Button variant="appBarRightButton">
              {' '}
              <FiSettings size={14} style={{ marginRight: '8px' }} />
              Settings
            </Button>
          </S.ContainerDown>
        </S.MenuColumn>
        <S.ContentColumn>
          <TextField variant="search"></TextField>
          {props.children}
          <CenterGrid rows={rows} columns={columns} height={300} width="90%" />
        </S.ContentColumn>
      </S.Container>
    </>
  );
};

export default FeatureLayout;
