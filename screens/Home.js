import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import appStyles from '../styles';

export default class Home extends React.Component {

    render() {
        return (<View style={appStyles.page}>
                <Text>Home Screen</Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('NewGame')}>
                <Text>Play Game</Text>
                </TouchableOpacity>
            </View>);
    }
}