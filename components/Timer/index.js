// clock timer
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { actionCreators } from '../../actions/timer';
import { FIRST_HALF, SECOND_HALF } from '../../types/halves';

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

/**
 * Timer will run from 00:00 and continue until the ref stops the game
 * if it goes over the allocated time, the numbers will turn red
 */
class Timer extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            intervalId: null,
            elapsedTime: 0,
            hasKickedOff: false,
            isRunning: false,
            isOvertime: false,
            startTime: undefined,
            stoppage: {
                start: undefined,
                total: 0
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
        this.props.startPeriod(); // dispatcher
        this.setState(state => ({ hasKickedOff: true, startTime : this.dateNow() }));
        this.timerStart();
    }

    timeOff() {
        this.setState(state => ({ stoppage:  { start : this.dateNow(), total: state.stoppage.total }}));
        this.timerStop();
        console.log(this.state)
    }

    timeOn() {
        this.setState(state => ({ stoppage: {start : undefined, total: (state.stoppage.total + (this.dateNow() - state.stoppage.start)) } }));
        this.timerStart();
        console.log(this.state)
    }

    periodEnd() {
        this.props.endPeriod(); // dispatcher
        this.timerStop();
        this.setState(state => ({ hasKickedOff: false , elapsedTime : 0, isOvertime : false}));
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
        this.setState(state => {
            const newTime = this.dateNow() - (this.state.startTime + state.stoppage.total );
            return { 
                elapsedTime : newTime, 
                isOvertime : (newTime > this.props.halfDuration)
            }
        });
    }

    /**
     * Provide the number of seconds since the epoch 
     */
    dateNow() {
        return Math.floor(Date.now() / 1000);
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
                            (this.state.hasKickedOff == false) ? 
                            (<TouchableOpacity onPress={this.periodStart} style={styles.button}>
                                <Text style={styles.buttonText}>
                                {
                                    (this.props.currentHalf == FIRST_HALF) ? 'Kick Off' : 'Second Half'
                                }
                                </Text>
                            </TouchableOpacity>)
                            : null
                        }
                        {
                            (this.state.hasKickedOff && this.state.isRunning && this.state.isOvertime) ? 
                            (<TouchableOpacity onPress={this.periodEnd} style={[styles.button, {backgroundColor:'red'}]}>
                                <Text style={styles.buttonText}>
                                {
                                    (this.props.currentHalf == FIRST_HALF) ? 'Half Time' : 'Full Time'
                                }
                                </Text>
                            </TouchableOpacity>)
                            : null
                        }
                        {
                            (this.state.hasKickedOff && this.state.isRunning && !this.state.isOvertime) ? 
                            (<TouchableOpacity onPress={this.timeOff} style={styles.button}>
                                <Text style={styles.buttonText}>Time Off</Text>
                            </TouchableOpacity>)
                            : null
                        }
                        {
                            (this.state.hasKickedOff && this.state.isRunning == false) ? 
                            (<TouchableOpacity onPress={this.timeOn} style={styles.button}>
                                <Text style={styles.buttonText}>Time On</Text>
                            </TouchableOpacity>)
                            : null
                        }
                        
                    </View>
                </View>
    }
}

const mapStateToProps = function(state){
    return state.timer;
}
/** 
currentHalf: FIRST_HALF,
halfDuration: 10,
first: {
    start: null,
    end: null
},
second: {
    start: null,
    end: null
}
 */

const mapDispatchToProps = function(dispatch, ownProps) {
    return {
        startPeriod : () => dispatch(actionCreators.timerStartPeriod(ownProps.currentHalf)),
        endPeriod : () => dispatch(actionCreators.timerEndPeriod(ownProps.currentHalf))
    }
}


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

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
