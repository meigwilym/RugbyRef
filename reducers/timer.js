import { TIMER_KICK_OFF, TIMER_END } from '../types/timer';
import { MATCH_SETUP, MATCH_END } from '../types/match';

/**
 * 
 * @param {*} state 
 * @param {*} action 
 */
function timerStartPeriod(state, action) {
    return {
        ...state,
        [action.half] : {
            ...state[action.half],
            start: action.timestamp
        }
    }
}

function timerEndPeriod(state, action) {
    return {
        ...state,
        currentHalf: action.half,
        [action.half] : {
            ...state[action.half],
            end: action.timestamp
        }
    }
}

function matchSetupTimer(state, action){
    return {
        ...state,
        halfDuration: parseInt(action.duration)
    }
}

function gameOver(state) {
    return {
        ...state,
        timer: initialState.timer
    };
}

const timer = (state, action) => {
    switch(action.type) {
        case MATCH_SETUP:
            return matchSetupTimer(state, action)
        case TIMER_KICK_OFF : 
            return timerStartPeriod(state, action);
        case TIMER_END:
            return timerEndPeriod(state, action);
        case MATCH_END:
            return gameOver(state);
        default:
            return state;
    }

}

export default timer;