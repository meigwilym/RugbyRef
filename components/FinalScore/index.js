import React from 'react';
import { View, Text, StyleSheet } from 'react-native'; 
import { connect } from 'react-redux';

class FinalScore extends React.Component {

    render() {
        const {name, scoring} = this.props.teams[this.props.whichTeam];

        return (<View style={styles.container}>
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <Text style={{ fontSize: 50 }} numberOfLines={1}>{name}</Text>
                <Text style={{ fontSize: 50, textAlign:'right' }}>{scoring.calculated}</Text>
            </View>
            <View style={{flexDirection:'column'}}>
                <View><Text>Tries: {scoring.tries.length} {getActionMinutes(scoring.tries, this.props.timer.first.start)}</Text></View>
                <View><Text>Conversions: {scoring.cons.length} {getActionMinutes(scoring.cons, this.props.timer.first.start)}</Text></View>
                <View><Text>Penalties: {scoring.pens.length} {getActionMinutes(scoring.pens, this.props.timer.first.start)}</Text></View>
            </View>

        </View>);
    }
}

const getActionTime = (gameStart, actionTime) => (actionTime - gameStart)/1000;

const toNearestMinute = (seconds) => Math.round(seconds/60);

const getActionMinutes = (action, gameStart) => {
    const times = action.map(el => {
        return `${toNearestMinute(getActionTime(gameStart, el))}'`;
    }).join(', ');
    return (times != '') ? `(${times})` : '';
}

const mapStateToProps = (state) => ({
    teams: state.teams,
    timer: state.timer
});


const styles = StyleSheet.create({
    container: {
        flex: 1, 
        flexDirection: 'column'
    },
});

export default connect(mapStateToProps, undefined)(FinalScore);