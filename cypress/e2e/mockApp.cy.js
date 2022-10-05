/// <reference types="cypress" />
describe('test app', () => {
    beforeEach(() => {
        cy.viewport(1280, 768)
    })

    it('should authenticate & display clubs first page', () => {
        cy.visit('http://localhost:3000')
        cy.get('#email').type('fake.user@fake.com')
        cy.get('#password').type('123')
        
        // Mock auth ====================================================================
        cy.fixture('mockAuth').then(function(mockAuth){
            cy.intercept('POST', 'http://localhost:4000/login', {
                status: 200,
                body: mockAuth
            }).as('mock login')
            cy.get('button').click()
        })

        // Mock clubs ====================================================================
        cy.fixture('mockClubs').then(function(mockClubs){
            cy.intercept('GET', 'http://localhost:4000/api/clubs?offset=0&limit=6', {
                status: 200,
                body: mockClubs
            }).as('mock clubs')
        })
    })
})