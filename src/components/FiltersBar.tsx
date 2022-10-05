import { ChangeEvent, FC, useEffect, useState } from 'react';
import useClubsStore from '../hooks/useClubsStore';
import useDeboundSearch from '../hooks/useDeboundSearch';
import { IoSearch } from 'react-icons/io5';
import {
  Center,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Switch,
  Text,
} from '@chakra-ui/react';

const FiltersBar: FC = () => {
  // Hooks ==============================================================================
  const {
    dispatchSetFavoritesFilter,
    dispatchSetCurrentPage,
    dispatchSearchSpecificClub,
  } = useClubsStore();

  // Debound search =====================================================================
  const [query, setQuery] = useState<string>(''); // Store the search values before process it
  const deboundSearch = useDeboundSearch(query, 500); // useDeboundSearch custom hook for debounce the search
  useEffect(() => {
    if (query.length > 0) {
      dispatchSearchSpecificClub(deboundSearch); // Dispatch the query with 500ms after stop typing
    }
  }, [deboundSearch]);

  // Handle the search input values =====================================================
  const handleSearch = (evt: ChangeEvent<HTMLInputElement>) => {
    setQuery(evt.target.value);
  };

  // Handle favorites filter switch =====================================================
  const handleSwitchChange = (evt: ChangeEvent<HTMLInputElement>) => {
    dispatchSetFavoritesFilter(evt.target.checked);
    dispatchSetCurrentPage(0);
  };

  return (
    <Center w="100%">
      <Flex
        w="100%"
        p={3}
        gap={[2, 5]}
        borderRadius="lg"
        borderWidth="2px"
        borderColor="darkBlue3"
        direction={['column', 'row']}
      >
        {/* Search input */}
        <InputGroup flex={[0, 3]}>
          <InputLeftElement
            pointerEvents="none"
            children={<IoSearch color="#2C3139" fontSize="20px" />}
          />
          <Input
            data-testid="search-input"
            variant="outline"
            color="gray1"
            onChange={handleSearch}
            placeholder="Search"
            borderColor="darkBlue3"
            borderWidth="2px"
            focusBorderColor="lightBlue"
            h="38"
            _hover={{ borderColor: 'gray1' }}
            _placeholder={{ opacity: 1, color: 'gray1', fontSize: '15px' }}
          />
        </InputGroup>

        {/* Favorite filter */}
        <Flex
          py={1.5}
          px={3}
          borderWidth="2px"
          borderColor="darkBlue3"
          flex={[0, 1]}
          borderRadius="md"
          align="center"
          h="38"
        >
          <Switch
            opacity={0.8}
            size="sm"
            colorScheme="magenta"
            onChange={handleSwitchChange}
          />
          <Text px={3} color="gray1" mb="2px" fontSize="15px">
            Favorites
          </Text>
        </Flex>
      </Flex>
    </Center>
  );
};

export default FiltersBar;
