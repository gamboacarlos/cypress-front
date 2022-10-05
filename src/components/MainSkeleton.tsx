import { Flex, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { SkeletonProps } from '../types/commonTypes';

const MainSkeleton: FC<SkeletonProps> = ({ loading, message }) => {
  return (
    <Flex
      w="100%"
      h="790px"
      borderWidth="2px"
      borderColor="darkBlue3"
      borderRadius="lg"
      p={8}
      mt={4}
    >
      <Text
        margin="auto"
        color={loading ? 'lightBlue' : 'darkBlue4'}
        fontSize="24px"
        fontWeight="500"
      >
        {loading && 'Loading...'}
        {message && message}
      </Text>
    </Flex>
  );
};

export default MainSkeleton;
