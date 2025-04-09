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
              label="Customer"
              variant="select"
              options={[
                { label: 'Opção 1', value: 'opcao1' },
                { label: 'Opção 2', value: 'opcao2' },
              ]}
            ></T.TextField>
            <T.TextField
              label="Customer code"
              variant="select"
              width="250px"
              options={[
                { label: 'Opção 1', value: 'opcao1' },
                { label: 'Opção 2', value: 'opcao2' },
              ]}
            ></T.TextField>
            <T.TextField
              variant="form"
              width="250px"
              label="Destination"
            ></T.TextField>
            <T.TextField
              variant="form"
              width="250px"
              label="Shipping Mode"
            ></T.TextField>
          </S.RowContainer>
          <S.RowContainer>
            <T.TextField
              variant="form"
              width="250px"
              label="Carpet Name"
            ></T.TextField>
            <T.TextField
              variant="form"
              width="250px"
              label="Carpet Type"
            ></T.TextField>
            <T.TextField
              variant="form"
              width="250px"
              label="Quality"
            ></T.TextField>
            <T.TextField
              label="Wash / Non-washed"
              variant="select"
              options={[
                { label: 'Opção 1', value: 'opcao1' },
                { label: 'Opção 2', value: 'opcao2' },
              ]}
            ></T.TextField>
            <T.TextField
              variant="form"
              width="250px"
              label="Silk %"
            ></T.TextField>
          </S.RowContainer>

          <S.RowContainer>
            <T.TextField
              variant="form"
              width="250px"
              label="Color"
            ></T.TextField>
            <T.TextField
              variant="form"
              width="250px"
              label="Lenght"
            ></T.TextField>
            <T.TextField
              variant="form"
              width="250px"
              label="Breadth"
            ></T.TextField>
            <T.TextField
              variant="form"
              width="250px"
              label="Delivery Date"
            ></T.TextField>
            <T.TextField
              variant="form"
              width="250px"
              label="Rate per Sq. Meter"
            ></T.TextField>
            <T.TextField
              variant="form"
              width="250px"
              label="Quantity"
            ></T.TextField>
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
