import React from 'react';
import { View } from 'react-native';
import Team from '../components/Team';
import Timer from '../components/Timer';

export default class Game extends React.Component {

    constructor(props) {
        super(props);

        const { store } = this.context;
    }

    render() {
        return (
            <View style={{flex: 1, flexDirection: 'column', paddingTop: Constants.statusBarHeight}}>
                <Timer currentHalf={store.getState().timer.currentHalf} />
                <Team whichTeam="home" />
                <Team whichTeam="away" />
            </View>
        );
    }
}