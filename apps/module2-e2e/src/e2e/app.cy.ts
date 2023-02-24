import { getGreeting } from '../support/app.po';

describe('module2', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to module2 👋');
  });
});
