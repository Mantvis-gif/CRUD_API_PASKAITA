
/// <reference types="cypress" />

it('Request, Intercept, visit', () => {
    

    //Api

    //pagal musu duomeis pateiktus, kreipiasi i url, ir grazina informacija is to url
    cy.request("GET", "https://jsonplaceholder.typicode.com/posts/1").then((response) => {
        //expect(response.status).to.be.eq(200); //ar status kodas 200
    });

    //Internetinė svetainė
    //pasakom narsyklei kad ji uzeitu i svetaine
    cy.visit('https://todolist.james.am/#/') // tiesiog uzeinu i svetaine

    //perimti
    //sis metodas naudojamas API

    //pagal musu pateiktus duomenis, kreipiames i url, mes ja perimam ir ja galime sumanipuliuoti
    cy.intercept("GET", "https://jsonplaceholder.typicode.com/posts/104"); //sita nuoroda grazina 404/ post kurio id=104
    //nes galime pasidaryti savo response
    //kokiai nors nuorodai(url) suteikiam savo/iškarto numatytą atsakymą - mock arba stub
    


})

it('Get a post/mock a post', () => {
    //Gauti originalu post kurio id = 1
    cy.request("GET", "https://jsonplaceholder.typicode.com/posts/1").then((response) => {
    cy.log(response.body)
    });

    //Sumanipuliuoti, perimti post kurio id = 1
    // {iserId: 104, title: 'perimtas pavadinimas', id:104}

    //Paysera integracija elektronineje parduotuveje
    //Elektronine parduotuve daro kreipimus i Paysera API
    // abi/payment; api/orderid ...
    //Kol imone su x nepasiraso sutarties, tol niekas neveikia
    //su intercept visas Paysera API url aprasau pats


    //Jeigu svetainės backend ir frontend yra atskirti
    //localhost:3000/login frontend - ivedimas i input laukelius, mygtuko paspaudimas ir kokie error grįžta
    //localhost:3000/login backend(API)
    //interceptinti localhost:3000/login stebėti ir laukti kol ji ivyks, kad mes galetume atlikti testavimą


     cy.intercept("GET", "https://jsonplaceholder.typicode.com/todos/1", {
     statusCode: 201, 
     body: {userId: 104, title: 'perimtas pavadinimas', id:104}}).as('getPostMock');

     cy.visit("https://jsonplaceholder.typicode.com");
     cy.get('#run-button').click();
     cy.wait('@getPostMock');

     //TAIP NEDARYTI
     cy.request('GET', 'https://jsonplaceholder.typicode.com/todos/1').then((response) => {
        const stubbedBody = {id: 15,}
        })
    // cy.intercept('https://jsonplaceholder.typicode.com/todos/1', (req) => {
            //req.continue() with a callback will send the request to
            //the destination server
    //     req.continue((res) => {
    //         'res' represents the real destination response
    //          you can manipulate 'res' before it's sent to the browser
    //         cy.log(res)
    //     });
    // });
    
    

    //cy.intercept NEREGUOJA I cy.request
    //cy.intercept reaguoja tik i cy.visit
});

// describe('4. API užklausų testas', () => {

//         beforeEach(() => {
//           cy.visit('http://127.0.0.1:5500/index.html')
//         });

//     it('Stubina API užklausą ir rodo stubintus duomenis', () => {
//       // Paruoštas stubintas atsakymas
//       const stubbedData = {
//         userId: 1,
//         id: 1,
//         title: 'Stubbed API Post Title',
//         body: 'Stubbed API Post Body'
//       };

//       // Interceptuojame GET užklausą į JSONPlaceholder API
//       cy.intercept('GET', 'https://jsonplaceholder.typicode.com/posts/1', {
//         statusCode: 200,
//         body: stubbedData
//       }).as('getPost')
//       // Paspaudžiame mygtuką, kuris iškviečia fetch užklausą
//       cy.get('#fetch-data').click();
//       // Laukiame, kol užklausa bus atlikta
//       cy.wait('@getPost');
//       // Patikriname, ar .data-container elemente rodomi stubinto atsakymo duomenys
//       cy.get('.data-container').within(() => {
//         cy.get('h3').should('contain', stubbedData.title);
//         cy.get('p').should('contain', stubbedData.body);
//       })
//     });
//   });