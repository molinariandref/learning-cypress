/// <reference types="cypress" />

describe('Login e registro de usuarios alura pic', () => {
  beforeEach(() => {
    cy.visit('https://front.serverest.dev/admin/cadastrarprodutos');
  });

  it('Cadastra produto', () => {
    cy.login({
      email: 'molinari@gmail.com',
      password: '1',
    });
    cy.get('a[data-testid="cadastrar-produtos"').click();
    cy.get('input[id="nome"]').type('Coca Cola 2L');
    cy.get('input[id="price"]').type(10);
    cy.get('textarea[id="description"]').type('Coca Cola de dois litros');
    cy.get('input[id="quantity"]').type('400');
    cy.get('button[data-testid="cadastarProdutos"]').click();
  });
});
