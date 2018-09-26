import React from 'react';
import { View, Text} from 'react-native';
import { Constants } from 'expo';

export default class GameOver extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (<View style={{flex: 1, flexDirection: 'column', paddingTop: Constants.statusBarHeight}}>
                <Text>Game Over Screen</Text>
            </View>);
    }
}