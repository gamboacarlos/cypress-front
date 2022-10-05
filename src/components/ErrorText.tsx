import { Box, Center, Text } from '@chakra-ui/react';
import { FC } from 'react';

const ErrorText: FC<{ children: string }> = ({ children }) => {
  return (
    <Center>
      <Box
        borderWidth="2px"
        borderColor="error"
        borderRadius="md"
        w="100%"
        p="8px"
        textAlign="center"
      >
        <Text variant="errorMessage">{children}</Text>
      </Box>
    </Center>
  );
};

export default ErrorText;
