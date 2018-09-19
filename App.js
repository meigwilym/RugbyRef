import React from 'react';
import { View, Button, Text } from 'react-native';
import { Constants } from 'expo';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import scoreReducer from './scoreReducer';
import Team from './components/Team';
import Timer from './components/Timer';

const store = createStore(scoreReducer);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={ store }>
      <View style={{flex: 1, flexDirection: 'column', paddingTop: Constants.statusBarHeight}}>
        <Timer />
        <Team whichTeam="home"/>
        <Team whichTeam="away"/>
        <View>
            <Button onPress={()=>console.log('end game')} title="Game Over" />
        </View>
      </View>
  </Provider>
    );
  }
}

/**

@todo
        

clock timer
cards: red/yellow, player name/number
score timestamps
yellow card countdown

half time: start new timer
keep half time score
game over: go to new screen with game summary (score, breakdowns, injury time etc) button to take screen shot of this screen and save to camera roll or just exit to new game screen

*/
