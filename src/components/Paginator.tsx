import { Flex, Text } from '@chakra-ui/react';
import useClubsStore from '../hooks/useClubsStore';
import { FC } from 'react';
import {
  IoChevronBackCircleOutline,
  IoChevronForwardCircleOutline,
} from 'react-icons/io5';

// Hooks =================================================================================
const Paginator: FC = () => {
  const { pages, currentPage, dispatchSetCurrentPage } = useClubsStore();

  return (
    <Flex
      w="100%"
      borderWidth="2px"
      borderColor="darkBlue3"
      borderRadius="lg"
      p={2}
      mt={4}
    >
      <Flex w="100px" margin="auto" justify="space-between">
        {/* Go back */}
        <button
          disabled={currentPage === 0}
          onClick={() => dispatchSetCurrentPage(currentPage - 1)}
        >
          <IoChevronBackCircleOutline
            color={currentPage === 0 ? '#1D232B' : '#05fac9'}
            size="1.5em"
          />
        </button>

        {/* Current page */}
        <Text fontWeight={500}>{currentPage + 1}</Text>

        {/* Go foward */}
        <button
          disabled={currentPage + 1 === pages || pages === 0}
          onClick={() => dispatchSetCurrentPage(currentPage + 1)}
        >
          <IoChevronForwardCircleOutline
            color={
              currentPage + 1 === pages || pages === 0 ? '#1D232B' : '#05fac9'
            }
            size="1.5em"
          />
        </button>
      </Flex>
    </Flex>
  );
};

export default Paginator;
