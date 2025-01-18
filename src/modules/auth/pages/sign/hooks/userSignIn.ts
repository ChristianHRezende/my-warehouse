import { useState } from 'react';
import { authenticate } from '../services';

interface UseSignInParams {
  onSuccess: () => void;
  onError: (error: string) => void;
}

export default function useSignIn(params: UseSignInParams) {
  const { onSuccess, onError } = params;
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  async function requestSignIn() {
    setLoading(true);
    try {
      const user = await authenticate(username, password);
      if (!user) {
        throw new Error('user not found');
      }
      onSuccess();
    } catch (error) {
      const errorResponse = error as {
        message: string;
      };
      onError(errorResponse.message);
    } finally {
      setLoading(false);
    }
  }

  return {
    loading,
    username,
    password,
    setUsername,
    setPassword,
    requestSignIn,
  };
}
