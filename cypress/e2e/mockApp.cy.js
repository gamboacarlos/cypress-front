/// <reference types="cypress" />
describe('test app', () => {
    beforeEach(() => {
        cy.viewport(1280, 768)
        cy.visit('http://localhost:3000')        
        // Mock auth ====================================================================
        cy.fixture('mockAuth').then(function(mockAuth){
            cy.intercept('POST', 'http://localhost:4000/login', {
                status: 200,
                body: mockAuth
            }).as('mock login')
        })
        // Mock clubs ====================================================================
        cy.fixture('mockClubs').then(function(mockClubs){
            cy.intercept('GET', 'http://localhost:4000/api/clubs?offset=0&limit=6', {
                status: 200,
                body: mockClubs
            }).as('mock clubs')
        })
    })

    it('should authenticate & display clubs first page', () => {
        cy.get('#email').type('fake.user@fake.com')
        cy.get('#password').type('123')
        cy.get('button').click()
        cy.getByTestId('club-card').should('have.length', 6)
    })
})