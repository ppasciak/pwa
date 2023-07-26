describe('homepage tests', () => {
    beforeEach(() => {
        cy.visit(Cypress.env('host'));
    });

    it('Display main banner heading', () => {
        cy.get('[data-cy="PageBuilder-Banner-root"] h2').contains(
            'Shop the New'
        );
    });

    it('Display product carousel', () => {
        cy.get('.venia-home-products .slick-slide').should('have.length.gt', 3);
    });
});
