import ClubCard from '../../src/components/ClubCard';
import { clubCardDataMock } from '../../src/utils/testUtils';

describe('<CubCard>', () => {
  beforeEach(() => {
    cy.mount(<ClubCard {...clubCardDataMock} />);
  });

  it('should display club name properly', () => {
    cy.getByTestId('club-name').should('have.text', clubCardDataMock.name);
  });

  it('should change border color', () => {
    cy.getByTestId('favorite-switch').click();
    cy.getByTestId('club-card').should(
      'have.css',
      'border-color',
      'rgb(5, 250, 229)'
    );
  });
});
