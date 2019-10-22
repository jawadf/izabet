import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { 
  View,
  Text,
  Button
   } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import TicketScreen from './components/ticketScreen';
import ListScreen from './components/listScreen';
import InfoScreen from './components/infoScreen';
import ProfileScreen from './components/profileScreen';
import AddCarForm from './components/forms/AddCarForm';

import reducers from './reducers';

const store = createStore(reducers, applyMiddleware(thunk));

const MyDrawerNavigator = createDrawerNavigator(
  {
    Ticket: {
      screen: TicketScreen,
    },
    List: {
      screen: ListScreen,
    },
    Info: {
      screen: InfoScreen,
    },
    Profile: {
      screen: ProfileScreen,
    },
    AddCarForm: {
      screen: AddCarForm,
    },
  },
  {
    initialRouteName: 'Ticket',
  }
);

const AppContainer = createAppContainer(MyDrawerNavigator);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
      );
  }
}

