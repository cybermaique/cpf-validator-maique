# Validador de CPF

Uma biblioteca simples e eficaz para validar números de CPF (Cadastro de Pessoas Físicas) no Brasil.

## Instalação

Este pacote está disponível através do npm. Você pode instalá-lo em seu projeto com o seguinte comando:

```
npm install cpf-validator-maique
```

## Uso

Depois de instalado, você pode importar e usar a função de validação de CPF em seu projeto JavaScript ou TypeScript. Aqui está um exemplo básico:

### JavaScript

```
const { validateCPF } = require('cpf-validator-maique');
const cpf = '000.000.000-00';
console.log(validateCPF(cpf)); // Exibirá 'false' para este CPF inválido
```

### TypeScript

```
import { validateCPF } from 'cpf-validator-maique';
const cpf: string = '123.456.789-09';
console.log(validateCPF(cpf)); // Exibirá 'true' ou 'false', dependendo da validade do CPF
Use o código com cuidado.
```

## Funções

Este pacote inclui a seguinte função:

- `validateCPF(cpf: string): boolean`: Recebe uma string representando um CPF e retorna `true` se o CPF for válido, ou `false` se for inválido.

## Contribuindo

Contribuições são sempre bem-vindas! Se você tem uma sugestão de melhoria, ou encontrou um bug, por favor, abra uma issue ou envie um Pull Request.

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo LICENSE.md para detalhes.

## Autor

Maique Doglas Moraes da Silva - cybermaique

Feito com ❤️ pela comunidade de desenvolvedores.
