import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import SignInForm from '../components/SignInForm';
import { StoreWrapper, store } from '../utils/testUtils';

// Test ============================================================================
test("Submit button it's disable while inputs are empty", () => {
  const { getByRole, getByPlaceholderText } = render(<SignInForm />, {
    wrapper: StoreWrapper, // Connection to store
  });
  const email = getByPlaceholderText('Email');
  const password = getByPlaceholderText('Password');
  const button = getByRole('button');

  expect(button).toBeDisabled();

  userEvent.type(email, 'user@mail.com');
  userEvent.type(password, 'Pass234');

  expect(button).toBeEnabled();
});

// Test ============================================================================
test('The form send the user data to the store properly', () => {
  const { getByRole, getByPlaceholderText } = render(<SignInForm />, {
    wrapper: StoreWrapper,
  });
  const email = getByPlaceholderText('Email');
  const password = getByPlaceholderText('Password');
  const button = getByRole('button');

  userEvent.type(email, 'user@mail.com');
  userEvent.type(password, 'Pass234');
  userEvent.click(button);

  expect(store.getState().auth.userData?.email).toBe('user@mail.com');
  expect(store.getState().auth.userData?.password).toBe('Pass234');
});
