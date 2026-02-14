  it('deve exibir mensagem de e-mail inválido quando o campo estiver vazio', () => {
    cy.visit('https://www.automationpratice.com.br/login');
    cy.get('#user').clear();
    cy.get('#password').type('senhaSegura123');
    cy.get('#btnLogin').click();
    cy.get('span.invalid_input').should('contain', 'E-mail inválido.');
  });

  it('deve exibir mensagem de e-mail inválido quando o e-mail for inválido', () => {
    cy.visit('https://www.automationpratice.com.br/login');
    cy.get('#user').type('emailinvalido');
    cy.get('#password').type('senhaSegura123');
    cy.get('#btnLogin').click();
    cy.get('span.invalid_input').should('contain', 'E-mail inválido.');
  });
  it('deve exibir mensagem de senha inválida quando o campo estiver vazio', () => {
    cy.visit('https://www.automationpratice.com.br/login');
    cy.get('#user').type('usuario@teste.com');
    cy.get('#password').clear();
    cy.get('#btnLogin').click();
    cy.get('span.invalid_input').should('contain', 'Senha inválida.');
  });

  it('deve exibir mensagem de senha inválida quando a senha tiver menos de 6 dígitos', () => {
    cy.visit('https://www.automationpratice.com.br/login');
    cy.get('#user').type('usuario@teste.com');
    cy.get('#password').type('123');
    cy.get('#btnLogin').click();
    cy.get('span.invalid_input').should('contain', 'Senha inválida.');
  });
// Exemplo de teste simples de login com Cypress

describe('Login', () => {
  it('deve exibir a página de login', () => {
    cy.visit('https://www.automationpratice.com.br/login');
    cy.contains('Login');
  });

  it('deve fazer login com sucesso', () => {
    cy.visit('https://www.automationpratice.com.br/login');
    cy.get('#user').type('usuario@teste.com');
    cy.get('#password').type('senhaSegura123');
    cy.get('#btnLogin').click();
    cy.get('h2#swal2-title').should('contain', 'Login realizado');
  });
});
