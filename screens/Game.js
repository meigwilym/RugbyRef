import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import Team from '../components/Team';
import Timer from '../components/Timer';
import { Constants } from 'expo';

class Game extends React.Component {

    render() {
        return (
            <View style={{flex: 1, flexDirection: 'column', paddingTop: Constants.statusBarHeight}}>
                <Team whichTeam="home" />
                <Team whichTeam="away" />
                <Timer currentHalf={this.props.timer.currentHalf} />
            </View>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        timer: state.timer
    }
}

export default connect(mapStateToProps, undefined)(Game);