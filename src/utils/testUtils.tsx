import { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../store/root.reducer';
import { BrowserRouter as Router } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../themes/theme';

export const store = createStore(rootReducer);

// Store & Router wrapper ===============================================================
export const StoreWrapper: FC<{ children: any }> = ({ children }) => (
  <ChakraProvider theme={theme}>
    <Router>
      <Provider store={store}>{children}</Provider>
    </Router>
  </ChakraProvider>
);

// Club data mock =======================================================================
export const clubCardDataMock = {
  id: 'da898936-252f-4aa0-8222-9648c94b2e62',
  name: 'Boca Juniors',
  foundationDate: '2009-03-16T01:14:08.587Z',
  avatar: 'https://placeimg.com/314/290',
  favorite: false,
};
export const clubsListDataMock = [
  {
    id: '8e59a404-d204-4d0c-9d07-7ce1ab2f8807',
    name: 'Sydney FC',
    foundationDate: '2011-05-25T15:23:01.973Z',
    avatar: 'https://placeimg.com/316/307',
    favorite: false,
  },
  {
    id: 'e3cc9b9d-2a6e-4e15-acae-ae34a65c01fc',
    name: 'Barnsley',
    foundationDate: '2002-02-19T14:39:21.468Z',
    avatar: 'https://placeimg.com/294/313',
    favorite: false,
  },
  {
    id: '0fe75267-ae9b-4196-aec5-a930a799cd41',
    name: 'Leeds United',
    foundationDate: '2018-01-29T02:15:57.840Z',
    avatar: 'https://placeimg.com/304/293',
    favorite: true,
  },
  {
    id: '610ce54a-1e55-4070-9b20-79ead75c64c1',
    name: 'Oldham Athletic',
    foundationDate: '1981-06-11T23:07:13.391Z',
    avatar: 'https://placeimg.com/305/311',
    favorite: false,
  },
  {
    id: '2fee5442-626b-482b-b53c-78dcf79a422c',
    name: 'Liverpool',
    foundationDate: '1958-01-18T05:48:34.653Z',
    avatar: 'https://placeimg.com/311/306',
    favorite: false,
  },
  {
    id: 'd0a336c5-391b-4c43-87ff-cd69a2ec6de6',
    name: 'Rayo Vallecano',
    foundationDate: '2018-01-02T07:12:30.195Z',
    avatar: 'https://placeimg.com/305/290',
    favorite: false,
  },
];
