import { Box, Flex, Image, SlideFade, Switch, Text } from '@chakra-ui/react';
import { ChangeEvent, FC, useState } from 'react';
import useClubsStore from '../hooks/useClubsStore';
import useUIStore from '../hooks/useUIStore';
import { ClubData } from '../types/clubsReducerTypes';
import { formatDate } from '../utils/commonUtils';

const ClubCard: FC<ClubData> = ({
  id,
  avatar,
  favorite,
  foundationDate,
  name,
}) => {
  // Hooks ================================================================================
  const [checked, setChecked] = useState<boolean>(favorite);
  const { dispatchSetClubFavorite } = useClubsStore();
  const { loading } = useUIStore();

  // Handle favorite function =============================================================
  const handleFavoriteSwitchChange = (id: string, favorite: boolean) => {
    dispatchSetClubFavorite({ id, favorite });
  };
  return (
    <SlideFade in={!loading} offsetY="20px">
      <Flex
        width="280px"
        height="350px"
        p={checked ? '13px' : '12px'}
        borderWidth={checked ? '1px' : '2px'}
        borderColor={checked ? 'lightBlue' : 'darkBlue3'}
        borderRadius="xl"
        direction="column"
        data-testid="club-card"
      >
        {/* Avatar */}
        <Box width="100%">
          <Image
            src={avatar}
            alt="avatar"
            objectFit="cover"
            width="100%"
            height="240px"
            borderRadius="lg"
            data-testid="club-avatar"
          />
        </Box>
        {/* Club info */}
        <Flex direction="column" align="flex-start" py="6px">
          <Text fontSize="15px" fontWeight={500} data-testid="club-name">
            {name}
          </Text>
          <Text
            fontSize="13px"
            fontWeight={300}
            data-testid="club-foundation"
          >{`Founded: ${formatDate(foundationDate)}`}</Text>
        </Flex>

        {/* Favorite toggle */}
        <Flex align="flex-start" py="6px" justify="space-between">
          <Box
            borderColor={checked ? 'lightBlue' : 'darkBlue3'}
            borderWidth="2px"
            px="12px"
            py="3px"
            borderRadius="sm"
          >
            <Text
              fontSize="10px"
              fontWeight={700}
              color={checked ? 'lightBlue' : 'darkBlue3'}
            >
              FAVORITE
            </Text>
          </Box>
          <Switch
            data-testid="favorite-switch"
            colorScheme="magenta"
            size="sm"
            isChecked={checked}
            onChange={(evt: ChangeEvent<HTMLInputElement>) => {
              handleFavoriteSwitchChange(id, evt.target.checked);
              setChecked(!checked);
            }}
          />
        </Flex>
      </Flex>
    </SlideFade>
  );
};

export default ClubCard;
