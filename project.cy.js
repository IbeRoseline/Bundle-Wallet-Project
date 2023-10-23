
import 'cypress-file-upload'; //this imports a file from the fixture

describe('invoice Generator', ()=> {
    it('parse csv file', ()=>{

        Cypress.on('uncaught:exception',(err, runnable) => {
        console.error(err);
        return false;
        });


        cy.visit('https://csvdemomockappp.bundlewallet.com/')

        cy.get('h1').should('be.visible')
        .and('contain', 'CSV Invoice Parser')

        cy.get('a').should('be.visible')

        cy.get('#statement-file').should ('be.visible')

        cy.get('.btn').should('be.visible')
        
        cy.get('#statement-file').attachFile('test.csv')
        cy.get('.btn').click()
        cy.get('.alert-success').should('contain', 'CSV File has been parsed successfully')
        cy.get(':nth-child(1) > :nth-child(2) > .ng-binding').click()
        cy.wait(2000)
        //this code helps you get what is somewhat hidden
        cy.contains('Back to Result').click()
        cy.get('tbody > :nth-child(2) > :nth-child(2) > .ng-binding').click()
        cy.wait(1000)
        cy.contains('Back to Result').click()




    });    

        
        
        
    


})