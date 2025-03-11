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
Cypress.Commands.add('addToDos',(sessionName) => {
    cy.session( sessionName, ()=> {
        cy.visit('https://todolist.james.am/#/');
        cy.get('input.new-todo').type('1 užduotis{enter}');
        cy.get('input.new-todo').type('trinama užduotis{enter}');
        cy.get('input.new-todo').type('1 užduotis{enter}');
        cy.get('input.new-todo').type('trinama užduotis{enter}');
        cy.get('input.new-todo').type('1 užduotis{enter}');
        cy.get('input.new-todo').type('trinama užduotis{enter}');
    });
    cy.log('addToDos komanda ivykdyta')
});
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