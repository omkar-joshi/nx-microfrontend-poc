import { getGreeting } from '../support/app.po';

describe('container', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to container app 👋');
  });
});
