// successful login
describe('User Authentication', () => {
  beforeEach(() => {
    cy.visit('/#/login'); // Uses baseUrl from cypress.config.js
  });

  it('should successfully log in with valid credentials', () => {
    // Load the fixture data
    cy.fixture('auth.json').then((auth) => {
      const { email, password } = auth.validLogin;

      // Assuming your login form has input fields with ids 'email' and 'password'
      cy.get('input[name=email]').type(email);
      cy.get('input[name=password]').type(password);

      // Assuming your login button has id 'loginBtn'
      cy.get('#loginBtn').click();

      // 1. authSection has a child with id avatarImg
      cy.get('#authSection').find('#avatarImg').should('be.visible');

      // 2. Check is local storage has a key 'token'
      cy.window()
        .its('localStorage')
        .invoke('getItem', 'token')
        .should('exist');
    });
  });
});

// unsuccessful login
describe('User Authentication', () => {
  beforeEach(() => {
    // Runs before each test in the block
    cy.visit('/#/login'); // Uses baseUrl from cypress.config.js
  });

  it('should display an alert with message about invalid credentials', () => {
    // Load the fixture data
    cy.fixture('auth.json').then((auth) => {
      const { email, password } = auth.invalidLogin;

      // Assuming your login form has input fields with ids 'email' and 'password'
      cy.get('input[name=email]').type(email);
      cy.get('input[name=password]').type(password);

      // Assuming your login button has id 'loginBtn'
      cy.get('#loginBtn').click();

      cy.on('window:alert', (str) => {
        expect(str).to.equal('Login failed: Invalid email or password');
      });
    });
  });
});
