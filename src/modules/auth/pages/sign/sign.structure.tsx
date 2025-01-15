import { Typography } from "../../../../@shared/components/dataDisplay/Typography";
import { Button } from "../../../../@shared/components";
import { FaArrowRight } from "react-icons/fa";

import * as S from "./sign.styles";
import { InputLogin } from "../../../../@shared/components/inputs/InputLogin";
import useSignIn from "./hooks/userSignIn";

const SignIn = () => {
  const { loading, setUsername, setPassword, requestSignIn } = useSignIn();
  function handleSubmit() {
    requestSignIn();
  }

  /* View
    - adicionar mascara email
        - type="email"
    - adicionar ********
        - type="password"
    - handleSubmit
        - antes de chamar o requestSignIn
        - valida se email tem @
        - pass min 6 caracteres
        - caso nao atenda nenhuma das duas
            - mostra um alert
            - alert("o campo deve ter no minimo 6 carac")   
    - criar pagine home 
    - criar pagina signUp
        - email , senha
        - https://firebase.google.com/docs/auth/web/password-auth?hl=pt-br             
*/
  return (
    <S.Container>
      <S.LeftContainer>
        <Typography variant="title_login_bar">Cubix</Typography>
        <Typography variant="subtitle_login_bar">
          The most popular Warehouse System is here.
        </Typography>
        <Button variant="primary">
          <Typography variant="text_button">Know More</Typography>
          <FaArrowRight style={{ marginLeft: "0px" }} />
        </Button>
      </S.LeftContainer>
      <S.RightContainer>
        <div className="InputLogin_Style">
          <Typography variant="title_div_login">HELLO!</Typography>
          <Typography variant="subtitle_div_login">
            Sign in to Get Started
          </Typography>
          {loading ? (
            <p>...LOADING</p>
          ) : (
            <>
              <InputLogin
                variant="username"
                name="username"
                onChange={(e) => setUsername(e.target.value)}
              ></InputLogin>
              <InputLogin
                variant="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button variant="secondary" onClick={handleSubmit}>
                <Typography variant="text_button">Login</Typography>
              </Button>
            </>
          )}
        </div>
      </S.RightContainer>
    </S.Container>
  );
};

export default SignIn;
