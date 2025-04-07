import { Typography } from '../../../../@shared/components/dataDisplay/Typography';
import * as T from '../../../../@shared/components/inputs/TextField';
import * as S from './RegisterOrdens.style';

const PagRegisterOrdens = () => {
  return (
    <S.Page>
      <S.Header>
        <Typography variant="main_home"> Customer Order Details</Typography>
      </S.Header>
      <S.Main>
        <S.ColumContainer>
          <S.RowContainer>
            <T.TextField
              variant="select"
              options={[
                { label: 'Opção 1', value: 'opcao1' },
                { label: 'Opção 2', value: 'opcao2' },
              ]}
            ></T.TextField>
            <T.TextField
              variant="select"
              width="278.75px"
              options={[
                { label: 'Opção 1', value: 'opcao1' },
                { label: 'Opção 2', value: 'opcao2' },
              ]}
            ></T.TextField>
            <T.TextField variant="form" width="278.75px"></T.TextField>
            <T.TextField variant="form" width="278.75px"></T.TextField>
          </S.RowContainer>
          <S.RowContainer>
            <T.TextField variant="form" width="219px"></T.TextField>
            <T.TextField variant="form" width="219px"></T.TextField>
            <T.TextField variant="form" width="219px"></T.TextField>
            <T.TextField
              variant="select"
              options={[
                { label: 'Opção 1', value: 'opcao1' },
                { label: 'Opção 2', value: 'opcao2' },
              ]}
            ></T.TextField>
            <T.TextField variant="form" width="219px"></T.TextField>
          </S.RowContainer>

          <S.RowContainer>
            <T.TextField variant="form" width="219px"></T.TextField>
            <T.TextField variant="form" width="219px"></T.TextField>
            <T.TextField variant="form" width="219px"></T.TextField>
            <T.TextField variant="form" width="219px"></T.TextField>
            <T.TextField variant="form" width="219px"></T.TextField>
            <T.TextField variant="form" width="219px"></T.TextField>
          </S.RowContainer>
        </S.ColumContainer>
      </S.Main>
    </S.Page>
  );
};

export default PagRegisterOrdens;

/*  // componente select - recebe um array e monta as opções. // utiliza o
        // default do textfield.
        // fazer o estado dos compos e o submit com o envio.
        // mover pagina de lista de ordens para dentro da features. */
