/// <reference types="cypress" />
describe('test app', () => {
    beforeEach(() => {
        cy.viewport(1280, 768)
    })

    it('should authenticate user', () => {
        cy.visit('http://localhost:3000')
        cy.get('#email').type('fake.user@fake.com')
        cy.get('#password').type('123')
        cy.get('button').click()
        cy.getByTestId('search-input').type('sou')
        cy.getByTestId('club-card').getByTestId('club-name').first().should('have.text', 'Southampton')
    })
})