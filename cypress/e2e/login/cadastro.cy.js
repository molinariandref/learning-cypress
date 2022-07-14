/// <reference types="cypress" />

describe('Login e registro de usuarios alura pic', () => {
  beforeEach(() => {
    cy.visit('https://front.serverest.dev/cadastrarusuarios');
  });

  it('Realiza cadastro de usuario comum', () => {
    cy.cadastro({
      nome: 'André',
      email: 'teste@teste.com',
      password: '123',
      admin: false,
    }); //Ajustar cypress.env depois
  });

  it('Realiza cadastro de usuario admin', () => {
    cy.cadastro({
      nome: 'André',
      email: 'teste@teste.com',
      password: '123',
      admin: true,
    }); //Ajustar cypress.env depois
  });

  it('Mensagens de Erro: 1) Nome é obrigatório | 2) Email deve ser um email válido | 3) Password é obrigatório', () => {
    cy.get('input[id="email"]').type(Cypress.env('invalidEmail'));
    cy.get('button[data-testid="cadastrar"]').click();
    cy.contains('span', 'Nome é obrigatório');
    cy.contains('span', 'Email deve ser um email válido');
    cy.contains('span', 'Password é obrigatório');
  }); //Ajustar cypress.env depois
});
