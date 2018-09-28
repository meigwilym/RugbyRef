import React from 'react';
import { View, Text} from 'react-native';
import appStyles from '../styles';

export default class About extends React.Component {

    render() {
        return (<View style={appStyles.page}>
                <Text>About Screen</Text>
            </View>);
    }
}