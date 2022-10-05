import { FC, FormEvent, useEffect } from 'react';
import useField from '../hooks/useField';
import useUIStore from '../hooks/useUIStore';
import useAuthStore from '../hooks/useAuthStore';
import { useNavigate } from 'react-router-dom';
import ErrorText from './ErrorText';
import {
  Box,
  Button,
  Center,
  FormControl,
  Heading,
  Input,
  Stack,
} from '@chakra-ui/react';

const SignInForm: FC = () => {
  // Hooks =================================================================================
  const { dispatchSetUserData, signInSuccess } = useAuthStore();
  const { errorMessage, dispatchSetErrorMessage } = useUIStore();
  const navigate = useNavigate();

  // add useField hook to manage the inputs values
  const userEmail = useField({ type: 'email' });
  const userPassword = useField({ type: 'password' });

  // Check for succeed login and redirect to clubs view
  useEffect(() => {
    if (signInSuccess) {
      return navigate('/clubs');
    }
  }, [signInSuccess]);

  // Handle submit function ================================================================
  const handleSubmit = (evt: FormEvent<HTMLDivElement>) => {
    evt.preventDefault();
    dispatchSetUserData({
      email: userEmail.value,
      password: userPassword.value,
    });
    userPassword.reset();
    userEmail.reset();
  };

  return (
    <Center mt="50px">
      <Box maxW={'450px'} w={'100%'} h={'450px'}>
        <Heading size="md" fontWeight="600">
          SIGN IN
        </Heading>
        <Stack spacing={10} mt="30px" as="form" onSubmit={handleSubmit}>
          <FormControl id="email">
            <Input
              isInvalid={!!errorMessage}
              value={userEmail.value}
              type={userEmail.type}
              onChange={userEmail.onChange}
              placeholder="Email"
              errorBorderColor="error"
              focusBorderColor="lightBlue"
              variant="flushed"
              onFocus={() => dispatchSetErrorMessage('')}
            />
          </FormControl>
          <FormControl id="password">
            <Input
              isInvalid={!!errorMessage}
              value={userPassword.value}
              type={userPassword.type}
              onChange={userPassword.onChange}
              placeholder="Password"
              errorBorderColor="error"
              focusBorderColor="lightBlue"
              variant="flushed"
              onFocus={() => dispatchSetErrorMessage('')}
            />
          </FormControl>
          <Button
            type="submit"
            variant="signInButton"
            disabled={!(userPassword.value && userEmail.value)}
          >
            SIGN IN
          </Button>
          {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
        </Stack>
      </Box>
    </Center>
  );
};

export default SignInForm;
