import React from 'react';
import { View, Button, Text } from 'react-native';
import { Constants } from 'expo';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import initialState from './initialState';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import Home from './screens/Home';
import About from './screens/About';
import NewGame from './screens/NewGame';
import Game from './screens/Game';
import GameOver from './screens/GameOver';

const store = createStore(rootReducer, initialState);

const RootStack = createBottomTabNavigator({
  Home: {
    screen: Home,
  },
  About : {
    screen: About 
  }
});

const GameStack = createStackNavigator({
  NewGame : {
    screen: NewGame
  },
  Game : {
    screen: Game
  },
  GameOver : {
    screen : GameOver
  }
});

export default class App extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <RootStack />
      </Provider>
    );
  }
}

/**
@todo

react navigation
  screens: welcome, new game, game, game over. 

clock timer
cards: red/yellow, player name/number
yellow card countdown

new game screen
  teams
    name
    colours
  period length
  start game button

start game screen 
  timer drop down: 10mins, 15mins, 20mins, 35mins, 30mins, 35mins, 40mins. Have labels for each level, U9...U12...U19...senior

colours:
  https://casesandberg.github.io/react-color/
  white, black, red, blue, green, yellow, 
*/
