export default function RuleEmailPassword(username: string, password: string) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(username)) {
    return alert('E-Mail Invalido');
  }
  if (password.length < 6) {
    return alert('Password Invalido');
  }
  return true;
}
