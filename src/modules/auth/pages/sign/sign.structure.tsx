import { Typography } from '../../../../@shared/components/dataDisplay/Typography';
import { Button } from '../../../../@shared/components';
import { FaArrowRight } from 'react-icons/fa';
import * as S from './sign.styles';
import { InputLogin } from '../../../../@shared/components/inputs/InputLogin';
import useSignIn from './hooks/userSignIn';
import { useState } from 'react';
import { useNavigate } from 'react-router';

const SignIn = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();
  const { username, password, setUsername, setPassword, requestSignIn } =
    useSignIn();

  function handleSubmit() {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(username)) {
      setPassword('');
      alert('E-Mail Invalido');
      return;
    }
    if (password.length < 6) {
      setPassword('');
      alert('Password Invalido');
      return;
    }

    requestSignIn()
      .then(() => {
        navigate('/home');
      })
      .catch(error => {
        alert('Erro ao realizar login: ' + error);
      });
  }

  function handleSignUp() {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(username)) {
      setPassword('');
      alert('E-Mail Invalido');

      return;
    }
    if (password.length < 6) {
      setPassword('');
      alert('Password Invalido');
      return;
    }
    alert('Cadastro Realizado !'); //Remove allert beffore to do
    setIsSignUp(!isSignUp);
    setPassword('');
    setUsername(''); // Não está alterando o estado (verificar).
  }

  function handleToggleForm() {
    setIsSignUp(!isSignUp);
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
          <FaArrowRight style={{ marginLeft: '0px' }} />
        </Button>
      </S.LeftContainer>
      <S.RightContainer>
        <div className="InputLogin_Style">
          <Typography variant="title_div_login">
            {isSignUp ? 'WELCOME!' : 'HELLO!'}
          </Typography>
          <Typography variant="subtitle_div_login">
            {isSignUp ? 'Register to Get Started!' : 'Sign in to Get Started!'}
          </Typography>
          {isSignUp ? (
            <>
              <InputLogin
                //SIGN UP
                variant="username"
                name="username"
                type="email"
                placeholder="E-mail"
                onChange={e => setUsername(e.target.value)}
              />
              <InputLogin
                variant="password"
                name="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />

              <Button variant="secondary" onClick={handleSignUp}>
                <Typography variant="text_button"> Register </Typography>
              </Button>
              <Typography variant="register_button" onClick={handleToggleForm}>
                {isSignUp
                  ? 'Already have an account? Sign-in'
                  : "Don't have an account? Sign-up"}
              </Typography>
            </>
          ) : (
            <>
              <InputLogin
                //sign in
                variant="username"
                name="username"
                type="email"
                placeholder="E-mail"
                onChange={e => setUsername(e.target.value)}
              ></InputLogin>
              <InputLogin
                variant="password"
                name="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />

              <Button variant="secondary" onClick={handleSubmit}>
                <Typography variant="text_button">Login</Typography>
              </Button>
              <Typography variant="register_button" onClick={handleToggleForm}>
                {isSignUp
                  ? 'Already have an account? Sign-in'
                  : "Don't have an account? Sign-up"}
              </Typography>
            </>
          )}
        </div>
      </S.RightContainer>
    </S.Container>
  );
};

export default SignIn;
