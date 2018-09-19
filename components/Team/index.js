// Team
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { actionCreators } from '../../actions';
import { TeamName, Score, TryButton, PenButton, ScoreBreakdown } from '../TeamComponents';

const Team = ({ name, scoring, scoreTry, scoreCon, scorePen }) => {
    return <View style={styles.container}>
                <TeamName name={name} />
                <View style={styles.data}>
                    <View style={styles.scores}>
                        <Score score={scoring.calculated} />
                        <ScoreBreakdown scoring={scoring} />
                    </View>
                    <View style={styles.buttons}>
                        <TryButton onPress={scoreTry} />
                        <PenButton onPress={scorePen} />
                    </View>
                </View>
            </View>
}

const mapStateToProps = function(state, ownProps){
    let myState = state.teams[ownProps.whichTeam];
    return myState;
}

const mapDispatchToProps = function(dispatch, ownProps) {
    return {
        scoreTry : () => dispatch(actionCreators.scoreTry(ownProps.whichTeam)),
        scoreCon : () => dispatch(actionCreators.scoreCon(ownProps.whichTeam)),
        scorePen : () => dispatch(actionCreators.scorePen(ownProps.whichTeam)),
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        flexDirection: 'column'
    },
    data: {
        flex: 1, 
        flexDirection: 'row'
    },
    scores: {
        flex: 2, 
        flexDirection: 'column'
    },
    buttons: {
        flex: 1, 
        flexDirection: 'column'
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Team);