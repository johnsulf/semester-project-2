describe('Place a Bid as unauthenticated user', () => {
  beforeEach(() => {
    cy.visit('/#'); // Uses baseUrl from cypress.config.js
  });

  it('should not be able to open the place bid form', () => {
    cy.get('#latestListingsCarousel').find('#placeBidButton').first().click();

    cy.on('window:alert', (str) => {
      expect(str).to.equal('You must be logged in to place a bid.');
    });

    cy.url().should('include', '/#/login');
  });
});

describe('Place a Bid on own listing', () => {
  beforeEach(() => {
    cy.visit('/#/login'); // Uses baseUrl from cypress.config.js
  });

  it('should not be able to open the place bid form', () => {
    cy.fixture('auth.json').then((auth) => {
      const { email, password } = auth.validLogin;

      // Assuming your login form has input fields with ids 'email' and 'password'
      cy.get('input[name=email]').type(email);
      cy.get('input[name=password]').type(password);

      // Assuming your login button has id 'loginBtn'
      cy.get('#loginBtn').click();
      cy.wait(1000);

      cy.visit('/#/profile');

      cy.get('#createdListingsCarousel')
        .find('#placeBidButton')
        .first()
        .click();

      cy.on('window:alert', (str) => {
        expect(str).to.equal('You cannot bid on your own listing.');
      });
    });
  });
});
