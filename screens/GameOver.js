import React from 'react'; 
import { Constants } from 'expo';
import { View, Button } from 'react-native'; 
import FinalScore from '../components/FinalScore'; 

export default class GameOver extends React.Component {

    render() {
        return (<View style={{flex: 1, flexDirection: 'column', paddingTop: Constants.statusBarHeight}}>
                <FinalScore whichTeam="home"  />
                <FinalScore whichTeam="away" />
                <Button onPress={() => this.props.navigation.navigate('Home')} 
                    title="Finish" 
                    accessibilityLabel="Finish this game and back to the start" />
            </View>);
    }
}
