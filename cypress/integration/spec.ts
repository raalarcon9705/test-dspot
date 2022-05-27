describe('User Module', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Root path redirect to /users', () => {
    cy.location('pathname').should('eq', '/users');
  });

  it('Details button navigate to User Details view', () => {
    cy.get('a.button')
      .first()
      .then((btn) => {
        cy.wrap(btn)
          .click()
          .location('pathname')
          .should('eq', btn.attr('href'));

        cy.title().should('eq', 'Steph Walters')

      });
  });

  it('Back button works', () => {
    cy.visit('/users/1')
      .get('.btn-back')
      .click()
      .location('pathname')
      .should('eq', '/users')
  });

  it('Tabset works', () => {
    cy.visit('/users/1')
      .get('app-tabset')
      .should('exist')
      .contains('Bio:')
      .should('exist')
      .get('.tab-button:not(.selected)')
      .click()
      .get('.gallery')
      .should('exist')
  })

  it('Gallery works', () => {
    cy.visit('/users/1')
      .get('.tabs-labels')
      .contains('Photos')
      .click()
      .get('.photo')
      .first()
      .click()
      .get('.selected-image img')
      .should('exist')
      .get('.selected-image .btn-close')
      .click()
      .get('.selected-image')
      .should('not.exist')
  })
});
