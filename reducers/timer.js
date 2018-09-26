import { TIMER_KICK_OFF, TIMER_END } from '../types/timer';

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

const timer = (state, action) => {
    switch(action.type) {
        case TIMER_KICK_OFF : 
            return timerStartPeriod(state, action);
        case TIMER_END:
            return timerEndPeriod(state, action);
        default:
            return state;
    }

}

export default timer;