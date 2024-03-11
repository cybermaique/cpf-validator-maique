import _ from "lodash";
import { validateCPF } from "./validateCPF";

export const formatCPF = (cpf: string): string => {
  if (!validateCPF(cpf)) throw new Error("Invalid CPF");

  // Remove caracteres não numéricos
  cpf = _.replace(cpf, /\D/g, "");

  // Valida novamente o comprimento após a limpeza
  if (cpf.length !== 11) throw new Error("Invalid CPF");

  // Utiliza o método chunk do lodash para dividir a string em partes
  const parts = _.chunk(cpf.split(""), 3);

  // Formata e junta as partes do CPF
  return parts
    .map((part, index) => {
      // Junta os dígitos de cada parte
      const segment = part.join("");
      // Formata corretamente com pontos e traço
      if (index === 2) return `${segment}-${parts[3]?.join("") || ""}`;
      return segment;
    })
    .join(".");
};
