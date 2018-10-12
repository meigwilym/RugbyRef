import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import appStyles from '../styles';

export default class Home extends React.Component {

    render() {
        return (<ImageBackground source={require('../assets/bg.png')} style={{width: '100%', height: '100%'}}>
                <View style={appStyles.page}>                
                    <Text style={[appStyles.foreText, {fontSize:40}]}>Pocket Ref</Text>
                    <Text style={[appStyles.foreText]}>Helps you keep time and the score.</Text>
                    <TouchableOpacity style={{padding:10,backgroundColor: '#202646',marginTop:10}} onPress={() => this.props.navigation.navigate('NewGame')}>
                        <Text style={appStyles.foreText}>Start a Game</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>);
    }
}