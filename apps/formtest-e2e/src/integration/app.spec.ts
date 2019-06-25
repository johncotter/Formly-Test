import { getGreeting } from '../support/app.po';

describe('formtest', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to formtest!');
  });
});
