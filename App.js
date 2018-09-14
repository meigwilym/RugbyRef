import React from 'react';
import { StyleSheet, Text, View, StatusBar, Button } from 'react-native';
import Team from './components/Team';
import { Constants } from 'expo';

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column', paddingTop: Constants.statusBarHeight}}>
          <Team name="Home" />
          <Team name="Away" />
          <View>
              <Button onPress={()=>console.log('end game')} title="Game Over" />
          </View>
      </View>
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
