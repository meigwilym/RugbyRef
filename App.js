import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import RootNav from './Navigation';

const store = createStore(rootReducer);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <RootNav />
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
