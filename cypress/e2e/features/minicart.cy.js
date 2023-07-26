describe('minicart tests', () => {
    const productUrl = 'jillian-top.html';
    beforeEach(() => {
        cy.visit(`${Cypress.env('host')}${productUrl}`);
    });

    it('Minicart should be empty', () => {
        cy.get('[data-cy="CartTrigger-trigger"]').click();
        cy.get('[data-cy="MiniCart-root"]').contains(
            'There are no items in your cart.'
        );
    });

    it('Product can be added to cart and appears in minicart', () => {
        // Select frist swatch - colour
        cy.get('[data-cy="ProductOptions-Option-root"]')
            .first()
            .get('[data-cy="Swatch-root"]')
            .first()
            .click();
        // Select 2nd swatch - size
        cy.get('[data-cy="ProductOptions-Option-root"]')
            .eq(1)
            .get('[data-cy="Tile-button"]')
            .first()
            .click();
        cy.get('[data-cy="ProductFullDetail-addToCartButton"]').click();
        cy.get('[data-cy="CartTrigger-trigger"]').click();
        cy.get('[data-cy="MiniCart-root"]').contains(
            '[data-cy="item-name"]',
            'Jillian Top'
        );
    });

    it('Multiple quantity can be added to cart', () => {
        cy.get('[data-cy="ProductOptions-Option-root"]')
            .first()
            .get('[data-cy="Swatch-root"]')
            .first()
            .click();
        cy.get('[data-cy="ProductOptions-Option-root"]')
            .eq(1)
            .get('[data-cy="Tile-button"]')
            .first()
            .click();
        cy.get('[data-cy="QuantityStepper-input"]')
            .clear()
            .type('2');
        cy.get('[data-cy="ProductFullDetail-addToCartButton"]').click();
        cy.get('[data-cy="CartTrigger-trigger"]').click();
        cy.get('[data-cy="MiniCart-root"]').contains(
            '[data-cy="item-name"]',
            'Jillian Top'
        );
        cy.get('[data-cy="MiniCart-root"]').contains('2 Items');
    });
});
