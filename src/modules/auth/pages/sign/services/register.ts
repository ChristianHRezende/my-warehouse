import { auth } from '../../../../../@shared/lib';

export default async function Register(username: string, password: string) {
  try {
    const response = await auth.createUserWithEmailAndPassword(
      auth.getAuth(),
      username,
      password
    );
    const user = response.user;
    return user;
  } catch (error) {
    const errorResponse = error as {
      code: number;
      message: string;
    };
    const errorCode = errorResponse.code;
    const errorMessage = errorResponse.message;
    console.error('Erro ao fazer login:', errorCode, errorMessage);
    throw errorResponse;
  }
}
