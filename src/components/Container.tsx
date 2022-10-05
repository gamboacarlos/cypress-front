import { Box, Center } from '@chakra-ui/react';
import React, { FC, ReactNode } from 'react';

const Container: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Center>
      <Box
        maxW={'1020px'}
        minH={'100vh'}
        w={'full'}
        px={6}
        py={16}
        overflow={'hidden'}
      >
        {children}
      </Box>
    </Center>
  );
};

export default Container;
