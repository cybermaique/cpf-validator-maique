export const validateCPF = (cpf: string): boolean => {
  cpf = cpf.replace(/\D/g, "");
  if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false;

  let sum = 0;
  for (let i = 0; i < 9; i++) {
    sum += parseInt(cpf.charAt(i)) * (10 - i);
  }
  let check = 11 - (sum % 11);
  if (check === 10 || check === 11) check = 0;
  if (check !== parseInt(cpf.charAt(9))) return false;

  sum = 0;
  for (let i = 0; i < 10; i++) {
    sum += parseInt(cpf.charAt(i)) * (11 - i);
  }
  check = 11 - (sum % 11);
  if (check === 10 || check === 11) check = 0;
  if (check !== parseInt(cpf.charAt(10))) return false;

  return true;
};
