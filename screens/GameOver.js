import React from 'react'; 
import { Constants } from 'expo'; 
import { connect } from 'react-redux'; 
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native'; 
import FinalScore from '../components/FinalScore'; 
import { actionCreators } from '../actions/match';

class GameOver extends React.Component {

    constructor(props) {
        super(props)

        this.resetAndGoHome = this.resetAndGoHome.bind(this);
    }

    resetAndGoHome() {
        this.props.gameOver();
        this.props.navigation.navigate('Home');
    }

    render() {
        const { home, away } = this.props.teams;

        return (<ImageBackground source={require('../assets/bg.png')} style={{width: '100%', height: '100%'}}>
        <View style={{flex: 1, flexDirection: 'column', paddingTop: Constants.statusBarHeight}}>
                <View>
                    <View style={styles.row}>
                        <View style={styles.homeCell}><Text style={[styles.home, {fontSize:15}]}>{home.name} {home.scoring.calculated}</Text></View>
                        <View style={styles.labelCell}><Text style={[styles.label, {fontSize:15}]}> - </Text></View>
                        <View style={styles.awayCell}><Text style={[styles.away, {fontSize:15}]}>{away.scoring.calculated} {away.name}</Text></View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.homeCell}><Text style={styles.home}>{home.scoring.tries.length} {getActionMinutes(home.scoring.tries, this.props.timer.first.start)}</Text></View>
                        <View style={styles.labelCell}><Text style={styles.label}>Tries</Text></View>
                        <View style={styles.awayCell}><Text style={styles.away}>{away.scoring.tries.length} {getActionMinutes(away.scoring.tries, this.props.timer.first.start)}</Text></View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.homeCell}><Text style={styles.home}>{home.scoring.cons.length} {getActionMinutes(home.scoring.cons, this.props.timer.first.start)}</Text></View>
                        <View style={styles.labelCell}><Text style={styles.label}>Cons</Text></View>
                        <View style={styles.awayCell}><Text style={styles.away}>{away.scoring.cons.length} {getActionMinutes(away.scoring.cons, this.props.timer.first.start)}</Text></View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.homeCell}><Text style={styles.home}>{home.scoring.pens.length} {getActionMinutes(home.scoring.pens, this.props.timer.first.start)}</Text></View>
                        <View style={styles.labelCell}><Text style={styles.label}>Pens</Text></View>
                        <View style={styles.awayCell}><Text style={styles.away}>{away.scoring.pens.length} {getActionMinutes(away.scoring.pens, this.props.timer.first.start)}</Text></View>
                    </View>
                </View>
                <Button onPress={() => this.resetAndGoHome()} 
                    title="Finish" 
                    accessibilityLabel="Finish this game and back to the start" />
            </View>
        </ImageBackground>);
    }
}

const mapStateToProps = (state) => ({
    teams: state.teams,
    timer: state.timer
});

const mapDispatchToProps = (dispatch) => {
    return {
        gameOver: dispatch(actionCreators.matchEnd()),
    };
}

const getActionTime = (gameStart, actionTime) => (actionTime - gameStart)/1000;

const toNearestMinute = (seconds) => Math.round(seconds/60);

const getActionMinutes = (action, gameStart) => {
    const times = action.map(el => {
        return `${toNearestMinute(getActionTime(gameStart, el))}'`;
    }).join(', ');
    return (times != '') ? `(${times})` : '';
}

const styles = StyleSheet.create({
    row: {
        flexDirection:'row',
    },
    homeCell:{
        flex:3,
    },
    labelCell: {
        flex:1,
    },
    awayCell: {
        flex:3,
    },
    home: {
        textAlign:'right',
        color:'white'
    },
    label: {
        textAlign:'center',
        color:'white'
    },
    away: {
        color:'white'
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(GameOver);
