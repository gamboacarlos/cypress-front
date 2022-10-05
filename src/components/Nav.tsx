import { FC } from 'react';
import { Box, Button, Flex, Heading, Icon } from '@chakra-ui/react';
import { BiLogOutCircle } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import useAuthStore from '../hooks/useAuthStore';
import useUIStore from '../hooks/useUIStore';

const Nav: FC = () => {
  // Hooks ===========================================================================
  const navigate = useNavigate();
  const { dispatchSetErrorMessage } = useUIStore();
  const { dispatchSetSigInSuccess } = useAuthStore();

  // handle sign out function ========================================================
  const handleSignOut = () => {
    localStorage.clear();
    dispatchSetSigInSuccess(false);
    dispatchSetErrorMessage('');
    navigate('/');
  };
  return (
    <Box
      bg="darkBlue1"
      px={{ base: '20px', lg: '40px' }}
      borderBottom="1px"
      borderColor="darkBlue3"
      pos="fixed"
      w="100%"
      h="50px"
      top="0"
      left="0"
      zIndex={999}
    >
      <Flex h="100%" alignItems={'center'} justifyContent={'space-between'}>
        <Heading variant={'logoText'}>MY CLUBS</Heading>
        {localStorage.getItem('session') && (
          <Button
            variant="logOutButton"
            onClick={handleSignOut}
            title="signOut"
          >
            <Icon
              as={BiLogOutCircle}
              color="white"
              w={6}
              h={6}
              _hover={{ color: 'magenta.500' }}
            />
          </Button>
        )}
      </Flex>
    </Box>
  );
};

export default Nav;
