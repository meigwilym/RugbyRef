import React from 'react';
import { View, Text} from 'react-native';
import { Constants } from 'expo';

export default class About extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (<View style={{flex: 1, flexDirection: 'column', paddingTop: Constants.statusBarHeight}}>
                <Text>About Screen</Text>
            </View>);
    }
}