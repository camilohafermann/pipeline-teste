# Projeto de Automação de Testes Web com Cypress

## Estrutura Simples

- Sem page objects
- Sem comandos customizados
- Estrutura mínima para iniciar

### Como rodar

1. Instale as dependências:
   ```bash
   npm install
   ```
2. Para abrir o Cypress:
   ```bash
   npx cypress open
   ```
3. Para rodar os testes em modo headless:
   ```bash
   npx cypress run
   ```

### Estrutura de Pastas

- `cypress/e2e/login.cy.js`: Exemplo de teste
- `cypress/support/e2e.js`: Arquivo de suporte padrão
- `cypress.config.js`: Configuração do Cypress
