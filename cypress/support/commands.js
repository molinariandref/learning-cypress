// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (user) => {
  const { email, password, clear } = user;
  cy.get('input[id="email"]').type(email);
  cy.get('input[id="password"]').type(password, { sensitive: true });
  if (clear) {
    cy.get('input[id="email"]').clear();
    cy.get('input[id="password"]').clear();
    cy.get('button[data-testid="entrar"]').click();
    return;
  }
  cy.get('button[data-testid="entrar"]').click();
});

Cypress.Commands.add('cadastro', (user) => {
  const { nome, email, password, admin } = user;
  cy.get('input[id="nome"]').type(nome);
  cy.get('input[id="email"]').type(email);
  cy.get('input[id="password"]').type(password, { sensitive: true });
  if (admin) {
    cy.get('[data-testid="checkbox"]').click();
  }
  cy.get('[data-testid="cadastrar"]').click();
});

Cypress.Commands.overwrite('type', (originalFn, element, text, options) => {
  if (options && options.sensitive) {
    // turn off original log
    options.log = false;
    // create our own log with masked message
    Cypress.log({
      $el: element,
      name: 'type',
      message: '*'.repeat(text.length),
    });
  }
  return originalFn(element, text, options);
});
