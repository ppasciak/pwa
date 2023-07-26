describe('homepage tests', () => {
    beforeEach(() => {
        cy.visit(Cypress.env('host'));
    });

    it('Display search bar after trigger', () => {
        cy.get('[data-cy="SearchTrigger-button"]').click();
    });

    it('Display search result', () => {
        const sampleProductName = 'Jillian Top';
        cy.get('[data-cy="SearchTrigger-button"]').click();
        cy.get('[data-cy="SearchField-textInput"]').type(sampleProductName);
        cy.get('[data-cy="Autocomplete-root"]').contains(sampleProductName);
    });

    it('Search item directs to product page', () => {
        const sampleProductName = 'Jillian Top';
        cy.get('[data-cy="SearchTrigger-button"]').click();
        cy.get('[data-cy="SearchField-textInput"]').type(sampleProductName);
        cy.contains('[class^="suggestedProduct-name"]', sampleProductName)
            .closest('a')
            .click();
    });
});
