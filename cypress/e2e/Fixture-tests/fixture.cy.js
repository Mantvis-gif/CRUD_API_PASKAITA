//uzkrauti duomenu faila ir cy.loge atvaizduoti duomenis

/// <reference types="cypress" />

it('Fixtures works', () => {
    cy.fixture('users1').as('usersJson').then((users1) => {
        cy.log(users1)
    }); // fixtures/users.json
    cy.fixture('example').as('exampleJson').then((example) => {
        cy.log(example)
    }) //fixtures/example.json
    cy.fixture('products').as('productsCsv').then((products) => {
        cy.log(products)
    }) //fixtures/products.csv
});

//1.TodoJames svetaine, mes galime pasidaryti faila todojames.json, sukurti 100 todos ir juos suvesti i uzduociu sarasa.



//Jeigu mes turime duomenu generavimo koda, jį paleidžiam viena kartą ir UŽKOMENTUOJAM !!!!!!!!!!!!!!!!!!!!!!!
it('Duomenu generavimas', () => {
    let tasks = [];
    for (let i = 1; i <= 100; i++) {
        tasks.push(i + " uzduotis");
    }
    console.log(tasks)
    //2 parametrai: kur irasau faila, ir ka irasau i faila
    cy.writeFile("cypress/fixtures/todos.json", { "todos": tasks });
})

it('100 todos suvedimas i ToDoJames svetaine', () => {
    //suvedame 100 uzduociu
    //ir suskaiciuojam ar tikrai 100 uzduociu susivede

    //1. uzeinam i todojames svetaine
    //2. gauname input
    //3. suvedame uzduoti
    //4. paspaudziame enter
    //5. griztam i 2 zingsni dar 99 kartus

    cy.visit('https://todolist.james.am/#/');
    //duomenu suvedimas su ciklu
    //for(let i = 1; i<=100; i++) {
    //cy.get('input.new-todo').type( i +'užduotis{enter}');
    //}


    cy.session('fixture_sesija', () => {

        cy.visit('https://todolist.james.am/#/');

        cy.fixture('todos.json').as('Todos').then((todosFile) => {
            //duomenu struktura
            //kiek mes turim duomenu

            //atvaizduoja visus todos
            cy.log(todosFile);
            //kaip atvaizduoti tik konkretu duomeni. Kaip cy.loge parodyti 55 uzduotis
            cy.log(todosFile.todos[54]);
            //jei mes galime pasirinkti konkretu duomeni, mes galime pasirinkti ir i duomeni

            //1 budas
            //for(let i=0; i < todosFile.todos.length - 1; i++) {
            // cy.get('input.new-todo').type( todosFile.todos[i] +'{enter}');
            // }

            //2 budas
            todosFile.todos.forEach((todo) => {
                cy.get('input.new-todo').type(todo + '{enter}')
            });
            //kokiu paprasciausiu budu dabar mes galima istestuoti, kad visi 100 elementu yra sarase?
            //patikrinti ar yra bent vienas elementas sarase tarp 1 ir masyvo ilgio
            //patikrinti ar yra 1 ir paskutinis elemntai
            //ul li elementu ilgis turi buti masyvo ilgis
            cy.get('ul.todo-list li').should('have.length', todosFile.todos.length);
        })
    })
    cy.visit('https://todolist.james.am/#/');

    //ul li elementu ilgis turi buti 100
    cy.get('ul.todo-list li').should('have.length', 100);
})

//2.Fixtures(duomenu faila) panaudoti intercepte. Mes viena html faila keiciame kitu. GoSign iframemes ji galime periimti ir iterpti savo html
//3. Saugumo testas. Mini brute force ataka. 1000 vartotoju. Kas 1sekunde bando prisijungti
//7 bandymu prisijungti svetaine nebeleidzia jungtis



// //cy.contains('ul.todo-list li', '1 užduotis').should('be.visible');