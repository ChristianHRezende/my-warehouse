import { useState } from "react";
import { auth } from "../../../../../@shared/lib/firebase";

export default function useSignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function requestSignIn() {
    setLoading(true);
    await auth
      .signInWithEmailAndPassword(auth.getAuth(), username, password)
      .then((userCredential) => {
        // O usuário fez login com sucesso
        const user = userCredential.user;
        console.log("Usuário logado:", user);
      })
      .catch((error) => {
        // Erro ao fazer login
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Erro ao fazer login:", errorCode, errorMessage);
      });
    setLoading(false);
  }

  return {
    loading,
    setUsername,
    setPassword,
    requestSignIn,
  };
}
