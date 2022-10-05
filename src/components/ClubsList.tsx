import { Flex, Grid } from '@chakra-ui/react';
import { FC } from 'react';
import { ClubData } from '../types/clubsReducerTypes';
import { ClubsListProps } from '../types/commonTypes';
import ClubCard from './ClubCard';

const ClubsList: FC<ClubsListProps> = ({ clubs }) => {
  return (
    <Flex
      w="100%"
      minH="790px"
      borderWidth="2px"
      borderColor="darkBlue3"
      borderRadius="lg"
      p={8}
      mt={4}
      justify="flex-start"
    >
      <Grid
        templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)']}
        gap={6}
      >
        {clubs &&
          clubs.map((club: ClubData) => {
            return <ClubCard key={club.id} {...club} />;
          })}
      </Grid>
    </Flex>
  );
};

export default ClubsList;
