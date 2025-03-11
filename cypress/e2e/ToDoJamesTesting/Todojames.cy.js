
//cy.visit() svetaine užeik
/// <reference types="cypress" />


//užduotis: kad kiekvienas testas naudotu sesija "keletas_uzduociu"


describe('todoJamestestai', () => {

    beforeEach(() =>{
        //ji ivyksta pries kiekviena testa
        //pries kiekviena testa man reikia sesijos duomenu
        //as kuriu sesija
        // komanda, kuri man kuria sesija
        cy.addToDos('kelios_uzduotys');
        cy.visit('https://todolist.james.am/#/');
        cy.log('beforeEach veikia');
    });

it('Delete new to do', () => {
    // Sudėtingesnis variantas
    cy.contains('ul.todo-list li', 'trinama užduotis').find('button').invoke('show');
    cy.contains('ul.todo-list li', 'trinama užduotis').find('button').click();

    //paprastesnis variantas
    //cy.contains('ul.todo-list li', 'trinama užduotis').find('button').click({force: true});
    //mouseover - uzvedus pelyte kazkas atsitinka
    //mousedown - paspaudus pelytes klavisa
    //mouseup - atleidus pelytes klavisa
    //...

    // ne tik paslepia varianta, bet ir ištrina

    cy.contains('ul.todo-list li', 'trinama užduotis').should('not.exist');

    //susikurti uzduoti x
    //sukurta uzduoti ištrinti
    //

});

it('To do item edit', () => {
    // 2 uzduoti redaguosim
    cy.contains('ul.todo-list li', '2 užduotis').dblclick();

    //uzduoties laukeli išvalysim ir tada pridesim teksta "redaguota užduotis"
    cy.contains('ul.todo-list li', '2 užduotis').find('input.edit').clear().type('redaguota užduotis{enter}')

    cy.contains('ul.todo-list li', 'redaguota užduotis').should('be.visible');
    //cy.get('.edit').clear();
});

it("Ar pridėjus kelias užduotis, užduočių sarašas nėra tuščias", () => {
    //paleidžiu savo sukurta komanda
});

});

describe('TodoJamesTestaiKuriemsNereikiaBeforeEach', () => {
    it('Create new to do', () => {
    //priversti robota suvesti uzduoties pavadinima
    //1.1 turim pasirinkti ir patikrinti ar input egzistuoja
    //1.2 turim ivesti konkretu teksta i input


    //document.querySelector("p");
    //document.querySelector("#id");
    //document.querySelector(".class");

    //document.querySelector("p.header")
    //document.querySelector("h1#header")

    //document.getElementById('id');
    //document.querySelector('class');
    cy.get('input.new-todo').type('1 užduotis{enter}');

    // 1 uzduotis arba bus null
    cy.contains('li', '1 užduotis').should('be.visible');
    //cy.get('ul.todo-list li');
    //ar 1 uzduotis li elementas yra matomas
    //cypress bando ieskoti elemento li, kurio turinys yra 1 užduotis
    

    // Patikrinti ar pirma uzduotis atsidure uzduociu sarase
    });
});