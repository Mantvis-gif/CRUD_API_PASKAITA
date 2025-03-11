//Svetaine prisijungimas ir registracija
// 1. testuoti pačia registracija. Ar galima užsiregistruoti?
// 2. pati prisijungima. Ar galima prisijungti?
// 3. intagracinis testas: Ar užsiregistravus galima prisijungti?
// 4. musu rasomas testas tures buti prisijunges prie svetaines, atsiminti kad jis yra prisijunges
// 4. kaip tas pats funkcionalumas yra atvaizduojamas prisijungusiam ir neprisijungusiam asmeniui

//Prisijungimo atsiminimas (sesijos išsaugojimas)
//Sesija - serverio atminties vieta, kur svetainė gali išsaugoti visokius duomenis
//Cookie - Vieta vartotojo kompiuteryje, kur svetainė gali išsaugoti informaciją

//Kokią informacija saugau sesijoje? - jautrūs duomenys: slaptažodis, prisijungimo vardas, prisijungimo tokenas, asmens informacija.
//Kokią informacija saugau cookie? - viską, išskyrūs jautrią informacija.

//Abiem galima nustatyti laiką, kiek jie egzistuoja

//Sukurti/gauti sausainiuką

//Ar sutinkate su slapukais popup testavimas?
it('Ar svetainė leidžia sukurti sausainiuką?', () =>{
    cy.visit('https://todolist.james.am/#/');
    cy.setCookie('test', 'test');
});


//Ar informacija išsisaugo po svetainės persikrovimo?
//1. Užeiti i svetaine
//2. Sukurti informacinį sausainiuką(Json masyvas tekstiniame formate, kazkoks skaicius, tekstas ir t.t.)
//3. Sukurti kelis sausainiukus
//3.1. Sausainiuku informacija yra surašoma į div arba į ul ir t.t.
//4. Perkrauti svetaine
//5. Patikrinti ar sausainiukai išliko po perkrovimo

it('Ar informacija isisaugo po svetainės persikrovimo', () => {
    cy.visit('https://todolist.james.am/#/');
    cy.setCookie('test', '1');
    cy.setCookie('test69', 'test69');
    cy.setCookie('test70', 'test70');
    
    cy.reload();
    //cy.visit('https://todolist.james.am/#/');
    //Po reload turim gauti cookie ir patikrinti ar jo vardas egzsituoja
    //set nustatyi, get - gauti
    cy.getCookie('test').should('exist')
    cy.getCookie('test69').should('exist')
    cy.getCookie('test70').should('exist')

    //patikriname cookie reiksmes
    cy.getCookie('test').should('have.property','value', '1');
    cy.getCookie('test69').should('have.property','value', 'test69');
    cy.getCookie('test70').should('have.property','value', 'test70');
    //galim ištinti rankiniu budu cookies ir patikrinti ar jie nebeegzistuoja

    cy.clearCookies();
    //cy.clearCookie('test') vieno cookie ištrynimas
    cy.getCookie('test').should('be.null')
    cy.getCookie('test69').should('be.null')
    cy.getCookie('test70').should('be.null')
});

//Ar visi testai po cookie sukurimo mato cookie?

it('uzeina i svetaine ToDoList', () => {
    cy.visit('https://todolist.james.am/#/');
    cy.getCookie('test').should('exist')
    cy.getCookie('test69').should('exist')
    cy.getCookie('test70').should('exist')
    //sausainiukas cypress aplinkoje egzistuoja tik tam testui!!!
});

//Sesija

it('Testas su sesija', () => {
    //sita vieta mes tiesiog esam išsisaugoje
    //pati pirma karta kai mes paleidom testa
    //sesija išsisaugojo
    //šito nebeatlieka
    cy.session('sesija', () => {
        cy.visit('https://todolist.james.am/#/');
        cy.get('input.new-todo').type('1 užduotis{enter}');
        cy.setCookie('Test', '1')
    })
    cy.visit('https://todolist.james.am/#/')
})

// it('Testas be sesijos', () => {
        // cy.visit('https://todolist.james.am/#/');
        // cy.get('input.new-todo').type('1 užduotis{enter}');
// }) 