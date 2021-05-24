describe('Use navigation', () => {

    it('Go to page then click all navbar items', () => {
        cy.visit('http://localhost:5501/examination_webdev')
        for (let i = 0; i < 100; i++) {
            cy.wait(500)
            cy.get('#Test1').click()
            cy.wait(500)
            cy.get('#Test2').click()
            cy.wait(500)
            cy.get('#Home').click()
        }
    })
})