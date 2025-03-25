import * as S from './SpeedMoreFiexed.styles';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import AddIcon from '@mui/icons-material/Add';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import { useNavigate } from 'react-router-dom';

const actions = [
  { icon: <AddIcon />, name: 'Register', path: '/RegisterOrdens' },
  { icon: <CloudDownloadIcon />, name: 'Download' },
];

export default function BasicSpeedDial() {
  const navigate = useNavigate();

  const handleActionClickRegister = (path?: string) => {
    if (path) {
      navigate(path);
    } else {
      console.error('Path não encontrado para essa ação');
    }
  };

  return (
    <S.SpeedDialContainer>
      <SpeedDial ariaLabel="SpeedDial basic example" icon={<SpeedDialIcon />}>
        {actions.map(action => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={() => handleActionClickRegister(action.path)}
            // EXPLICAR O ACTION.PATH
          />
        ))}
      </SpeedDial>
    </S.SpeedDialContainer>
  );
}
