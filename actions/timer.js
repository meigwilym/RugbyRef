import { TIMER_KICK_OFF, TIMER_ADD_SECOND, TIMER_END } from '../types/timer';
import { FIRST_HALF, SECOND_HALF } from '../types/halves';

/**
 * Kick off a half
 */
function timerStartPeriod(currentHalf) {
    return {
        type: TIMER_KICK_OFF,
        timestamp: Date.now(),
        half: currentHalf
    }
}

function timerAddSecond() {
    return {
        type: TIMER_ADD_SECOND
    }
}

/**
 * When the timer finishes 
 */
function timerEndPeriod(currentHalf) {
    const nextHalf = (currentHalf == FIRST_HALF) ? SECOND_HALF : FIRST_HALF;
    return {
        type: TIMER_END,
        timestamp : Date.now(),
        half: nextHalf
    }
}

const actionCreators = {
    timerStartPeriod,
    timerAddSecond,
    timerEndPeriod
};

export { actionCreators };