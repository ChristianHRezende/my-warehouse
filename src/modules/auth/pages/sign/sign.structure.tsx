import { Typography } from '../../../../@shared/components/dataDisplay/Typography';
import { Button } from '../../../../@shared/components';
import { FaArrowRight } from 'react-icons/fa';
import * as S from './sign.styles';
import { InputLogin } from '../../../../@shared/components/inputs/InputLogin';
import useSignIn from './hooks/userSignIn';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import useSignUp from './hooks/userSignUp';
import RuleEmailPassword from './rulesValidation/EmailAndPassword';
import Register from './services/register';

const SignIn = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();
  const {
    loading,
    username,
    password,
    setUsername,
    setPassword,
    requestSignIn,
  } = useSignIn({
    onSuccess: onSignInSuccess,
    onError: onSignInError,
  });

  const { loading: loadingSignUp } = useSignUp();

  function onSignInSuccess() {
    navigate('/home');
  }

  function onSignInError(error: string) {
    alert('Erro ao realizar login: ' + error);
  }

  function handleSubmit() {
    RuleEmailPassword(username, password);
    requestSignIn();
  }

  function handleSignUp() {
    RuleEmailPassword(username, password);
    Register(username, password);
  }

  function handleToggleForm() {
    setIsSignUp(!isSignUp);
  }

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
                value={username}
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
              {loadingSignUp ? (
                <div>
                  <h1>Loading</h1>
                </div>
              ) : (
                <Button variant="secondary" onClick={handleSignUp}>
                  <Typography variant="text_button"> Register </Typography>
                </Button>
              )}
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

              {loading ? (
                <div>
                  <h1>Loading</h1>
                </div>
              ) : (
                <Button variant="secondary" onClick={handleSubmit}>
                  <Typography variant="text_button">Login</Typography>
                </Button>
              )}
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
