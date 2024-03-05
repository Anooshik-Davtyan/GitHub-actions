describe('Verify add to cart functionality', () => {
    it('verifies add to cart functionality for products with a price of 1000', () => {
        cy.visit('/products?search=dress');

        cy.get('.features_items .col-sm-4').each(($el) => {
            cy.wrap($el).find('h2').then(($h2) => {
                const price = $h2.text().trim();
                if (price.includes('1000')) {
                    cy.wrap($el).find('[class="productinfo text-center"] [class="btn btn-default add-to-cart"]').click();
                }
            });
        });

        cy.get('.modal-content').should('be.visible');
        cy.contains('Added!').should('exist');
        cy.contains('Your product has been added to cart.').should('exist');
    });
});

/*describe('Verify add to cart functionality', () => {
    it('verifies add to cart functionality for products with a price of 1000', () => {
        cy.visit('/products?search=dress');
        cy.get('.features_items .col-sm-4').each(($el) => {
            cy.wrap($el).find('h2').then(($h2) => {
                const price = $h2.text().trim();
                if (price.includes('1000')) {
                    cy.wrap($el).find('[class="productinfo text-center"] [class="btn btn-default add-to-cart"]').click();
                }
            });
        });
        cy.get('.modal-content').should('be.visible').contains('Added!').contains('Your product has been added to cart.');
    });
});
 */
