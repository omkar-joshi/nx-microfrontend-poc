import { getGreeting } from '../support/app.po';

describe('module3', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to module3 👋');
  });
});
