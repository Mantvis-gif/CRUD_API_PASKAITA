//const ( response ) = require("express");


describe('CRUD_API', () => {

context('/products', () => { 

it ('kreipiames i /products', () => {

    cy.request("GET", "localhost:3000/products").then((response) => {
        //patikrinti statuso koda
        expect(response.status).to.be.eq(200);

        //response time
        expect(response.duration).to.be.lessThan(1000);
        expect(response.duration).to.be.below(1000);
        //expect(response.duration).to.be.greaterThan(1000); //Doesnt work for me for some reason

        //patikrinti response.body
        //expect(response.body).length.to.be.above(1);

        //statustas 200 ir gaunam produktus
        //(0,1,2...)
        //400 error
        //{
        //error: "kazkas negerai"
        //}


        console.log('test');
        cy.log('test');
        console.log('pakeitimas')
        
        //response.body turi elemnta products
        //error elemento tikrinimas

        console.log(response.body);
        cy.log(response.body);
        //visi produktai response.body

        // expect()
    });

});

it('/products endpoint bendras testas', () => {
    cy.log('pasiruosiau testui');
});

it('/products vieno produkto bendras testas', () => {
    cy.log('pasiruosiau testui');
});

it('/products update bendras testas', () => {
    cy.log('pasiruosiau testui');
});

it('/products delete bendras testas', () => {
    cy.log('pasiruosiau testui');
});

});

//users
//endpoint n+1

});