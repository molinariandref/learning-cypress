/// <reference types="cypress" />

describe('Login e registro de usuarios alura pic', () => {
  beforeEach(() => {
    cy.visit('https://front.serverest.dev/login');
  });

  it('Mensagem de erro: E-mail e/ou senha inválidos', () => {
    //cy.login('molinari.andref@gmail.com', '123'); AO INVES DE ENVIAR DESTA FORMA HARDCODE, E INSEGURO, ENVIAR COM VARIAVEL DE AMBIENTE DO CYPRESS:
    cy.login({
      email: Cypress.env('email'),
      password: Cypress.env('wrongPassword'),
    });
    cy.contains('span', 'Email e/ou senha inválidos').should('be.visible');
  });

  it('Mensagem de erro: Email e/ou Password são obrigatórios', () => {
    cy.get('button[data-testid="entrar"]').click();
    cy.contains('span', 'Email é obrigatório');
    cy.contains('span', 'Password é obrigatório');
  });

  it('Mensagem de erro: Email e/ou Password não podem ficar em branco', () => {
    cy.login({
      email: Cypress.env('email'),
      password: Cypress.env('wrongPassword'),
      clear: true,
    });
    cy.contains('span', 'Email não pode ficar em branco');
    cy.contains('span', 'Password não pode ficar em branco');
  });
});
