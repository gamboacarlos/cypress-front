import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import ClubCard from '../components/ClubCard';
import { formatDate } from '../utils/commonUtils';
import { StoreWrapper, clubCardDataMock } from '../utils/testUtils';

// Test ============================================================================
test('CLub info is rendering properly', () => {
  const { getByTestId } = render(<ClubCard {...clubCardDataMock} />, {
    wrapper: StoreWrapper, // Connection to store
  });
  const dateFounded = formatDate(clubCardDataMock.foundationDate);
  const clubFoundationDate = getByTestId('club-foundation');
  const clubName = getByTestId('club-name');
  expect(clubFoundationDate.textContent).toEqual(`Founded: ${dateFounded}`);
  expect(clubName.textContent).toEqual(clubCardDataMock.name);
});

// Test ============================================================================
test('CLub avatar is rendering properly', () => {
  const { getByTestId } = render(<ClubCard {...clubCardDataMock} />, {
    wrapper: StoreWrapper,
  });
  const clubAvatar = getByTestId('club-avatar');
  expect(getComputedStyle(clubAvatar).width).toBe('100%');
});
