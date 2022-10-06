import { mount } from 'cypress/react18';
import { StoreWrapper } from '../../src/utils/testUtils';
import React from 'react';

Cypress.Commands.add('mount', (component, options = {}) => {
  const wrapped = (
    <StoreWrapper>
      <div style={{ padding: '10%' }}>{component}</div>
    </StoreWrapper>
  );
  return mount(wrapped, options);
});
Cypress.Commands.add('getByTestId', (selector, ...args) => {
  return cy.get(`[data-testid=${selector}]`, ...args);
});
