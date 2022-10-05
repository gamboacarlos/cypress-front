import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { StoreWrapper, clubsListDataMock } from '../utils/testUtils';
import ClubsList from '../components/ClubsList';
import { formatDate } from '../utils/commonUtils';

// Test ============================================================================
test('CLubs list is rendering all passed elements', () => {
  render(<ClubsList clubs={clubsListDataMock} />, {
    wrapper: StoreWrapper, // Connection to store
  });
  const cards = screen.getAllByTestId('club-card');
  expect(cards.length).toEqual(6);
});

// Test ============================================================================
test('Clubs list is rendering cards with the passed names correctly', () => {
  const { getAllByTestId } = render(<ClubsList clubs={clubsListDataMock} />, {
    wrapper: StoreWrapper, // Connection to store
  });

  // Check clubs names
  const cardsNames = getAllByTestId('club-name').map(
    (club) => club.textContent
  );
  const dataNames = clubsListDataMock.map((club) => club.name);

  expect(dataNames).toEqual(cardsNames);
});

// Test ============================================================================
test('Clubs list is rendering cards with the passed foundation dates correctly', () => {
  const { getAllByTestId } = render(<ClubsList clubs={clubsListDataMock} />, {
    wrapper: StoreWrapper, // Connection to store
  });

  // Check clubs foundation dates
  const cardsDates = getAllByTestId('club-foundation').map(
    (card) => card.textContent && card.textContent.slice(9, 20) // Slicing text content to get date only --> "_Founded:_25/06/2020"
  );
  const dataDates = clubsListDataMock.map(
    (data) => formatDate(data.foundationDate) // Change the comming data date format to --> "25/06/2020"
  );
  expect(dataDates).toEqual(cardsDates);
});
