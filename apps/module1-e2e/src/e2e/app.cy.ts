import { getGreeting } from '../support/app.po';

describe('module1', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    // Function helper example, see `../support/app.po.ts` file
    getGreeting().contains('Welcome to module1 👋');
  });
});
