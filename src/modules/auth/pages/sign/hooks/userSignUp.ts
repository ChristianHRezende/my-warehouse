import { auth } from '../../../../../@shared/lib';
import { useState } from 'react';

export default function useSignUp() {
  const [loading, setLoading] = useState(false);

  async function requestSingUp(username: string, password: string) {
    setLoading(true);
    auth
      .createUserWithEmailAndPassword(auth.getAuth(), username, password)
      .then(useCredential => {
        const user = useCredential.user;
        console.log('Usuario cadastrado', user);
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('Erro ao se registrar', errorCode, errorMessage);
      });
    setLoading(false);
  }

  return {
    loading,
    requestSingUp,
  };
}
