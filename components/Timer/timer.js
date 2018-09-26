// clock timer
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { actionCreators } from '../../actions/timer';

/**
 * Turn seconds into MM:SS
 * 
 * @param int time 
 */
function formatTime(time) {
    let minutes = Math.floor(time/60);
    time -= minutes * 60;
    let seconds = parseInt(time % 60, 10);
    return `${minutes < 10 ? `0${minutes}` : minutes }:${seconds < 10 ? `0${seconds}` : seconds}`;
}

const buttonLabels = {
    kickOff : 'Kick Off',
    timeOff : 'Time Off',
    timeOn : 'Time On',
    halfTime : 'Half Time',
    fullTime : 'Full Time'
}

const HALF_FIRST = 'first', 
      HALF_SECOND = 'second';

/**
 * Timer will run from 00:00 and continue until the ref stops the game
 * if it goes over the allocated time, the numbers will turn red
 */
class Timer extends React.Component {


    constructor(props) {
        super(props);
        
        this.state = {
            buttonLabel : 'mei',
            intervalId: null,
            half: HALF_FIRST,
            halfDuration: 2400,
            elapsedTime: 0,
            periodStart: false, 
            periodEnd: false,
            isRunning: false,
            isOverTime: false, 
            timestamps : {
                first: {
                    start: null,
                    end: null
                },
                second: {
                    start: null,
                    end: null
                }
            }
        };

        this.periodStart = this.periodStart.bind(this);
        this.timeOff = this.timeOff.bind(this);
        this.timeOn = this.timeOn.bind(this);
        this.periodEnd = this.periodEnd.bind(this);
        this.timerStop = this.timerStop.bind(this);
        this.timerStart = this.timerStart.bind(this);
        this.addSecond = this.addSecond.bind(this);
    }

    /**
     * AKA Kick Off
     */

    periodStart() {
        console.log('period start')
        this.setState(state => ({periodStart : true}));
        this.timerStart();
        
    }

    timeOff() {
        console.log('time off')
        this.timerStop();
    }

    timeOn() {
        console.log('time on')
        this.timerStart();
    }

    periodEnd() {
        console.log('period end')
        this.timerStop();
        this.setState(state => ({periodEnd : true}));
    }

    timerStop() {
        clearInterval(this.state.intervalId);
        this.setState(state => ({ isRunning : false }));
    }

    timerStart() {
        let intv = setInterval(() => this.addSecond(), 1000);
        this.setState(state => ({ isRunning : true, intervalId : intv }));
    }


    addSecond() {
        this.setState(state => ({ elapsedTime : state.elapsedTime + 1}) );
    }

    render(){
        return <View style={styles.container}>
                    <View style={{flex:4}}>
                        <Text style={[styles.time, (this.state.isOvertime ? styles.timeOver : null)]}>
                            {formatTime(this.state.elapsedTime)}
                        </Text> 
                    </View>
                    <View style={{flex:1}}>
                        {
                            (this.state.periodStart == false) ? 
                            (<TouchableOpacity onPress={this.periodStart} style={styles.button}>
                                <Text style={styles.buttonText}>Kick Off</Text>
                            </TouchableOpacity>)
                            : null
                        }
                        {
                            (this.state.periodStart && this.state.isRunning && this.state.isOvertime) ? 
                            (<TouchableOpacity onPress={this.endPeriod} style={styles.button}>
                                <Text style={styles.buttonText}>End Half</Text>
                            </TouchableOpacity>)
                            : null
                        }
                        {
                            (this.state.periodStart && this.state.isRunning) ? 
                            (<TouchableOpacity onPress={this.timeOff} style={styles.button}>
                                <Text style={styles.buttonText}>Time Off</Text>
                            </TouchableOpacity>)
                            : null
                        }
                        {
                            (this.state.periodStart && this.state.isRunning == false) ? 
                            (<TouchableOpacity onPress={this.timeOn} style={styles.button}>
                                <Text style={styles.buttonText}>Time On</Text>
                            </TouchableOpacity>)
                            : null
                        }
                        
                    </View>
                </View>
    }
}
/*
const mapStateToProps = function(state, ownProps){
    return state.timer;
}

const mapDispatchToProps = function(dispatch, ownProps) {
    return {
        startPeriod : (half = 'first') => dispatch(actionCreators.timerStartPeriod(half)),
        addSecond : () => dispatch(actionCreators.timerAddSecond()),
        timeOff : () => dispatch(actionCreators.timerTimeOff()),
        timeOn : () => dispatch(actionCreators.timerTimeOn()),
        endPeriod : (half) => dispatch(actionCreators.timerEndPeriod(half))
    }
}
*/

const styles = StyleSheet.create({
    container : {
        flexDirection: 'row',
        backgroundColor: '#000000'
    },
    time : {
        color: '#ffffff',
        fontSize: 30,
        fontWeight: '100'
    },
    timeOver: {
        color: 'red'
    },
    button: {
        backgroundColor:'green',
        padding:5,
    },
    buttonText: {
        fontSize: 20,
        color:'white'
    }
});

export default Timer;
