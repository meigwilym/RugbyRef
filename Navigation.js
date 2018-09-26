import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import Home from './screens/Home';
import About from './screens/About';
import NewGame from './screens/NewGame';
import Game from './screens/Game';
import GameOver from './screens/GameOver';

export const RootStack = createBottomTabNavigator({
  Home: {
    screen: Home,
  },
  About : {
    screen: About 
  }
},{
  order : ['Home', 'About'],
  animationEnabled: true
});

export const GameNavigation = createStackNavigator({
  NewGame : {
    screen: NewGame,
    navigationOptions: ({ navigation }) => ({
      title: 'New Game',
    }),
  },
  Game : {
    screen: Game,
    navigationOptions: ({ navigation }) => ({
      header: null,
    }),
  },
  GameOver : {
    screen : GameOver,
    navigationOptions: ({ navigation }) => ({
      title: 'Game Over',
    }),
  }
},
{
  initialRouteName: 'NewGame',
});