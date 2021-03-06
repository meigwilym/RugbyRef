import { SCORE_TRY, SCORE_CON, MISS_CON, SCORE_PEN } from '../types/scoring';
import { MATCH_SETUP, MATCH_END } from '../types/match';
import { TIMER_KICK_OFF, TIMER_END } from '../types/timer';
import initialState from '../initialState';

function applyScoreTry(state, action) {
    return {
        ...state,
        [action.team] : {
            ...state[action.team],
            scoring : {
                ...state[action.team].scoring,
                tries: state[action.team].scoring.tries.concat(action.timestamp),
                calculated : state[action.team].scoring.calculated + 5
            },
            canScore : false,
            canScoreCon: true,
        },
        [action.opposition] : {
            ...state[action.opposition],
            canScore : false,
            canScoreCon: false,
        }
    }
}

function applyScoreCon(state, action) {
    return {
        ...state,
        [action.team] : {
            ...state[action.team],
            scoring : {
                ...state[action.team].scoring,
                cons: state[action.team].scoring.cons.concat(action.timestamp),
                calculated: state[action.team].scoring.calculated + 2
            },
            canScore : true,
            canScoreCon: false,
        },
        [action.opposition] : {
            ...state[action.opposition],
            canScore : true,
            canScoreCon: false,
        }
    };
}

function applyMissCon(state, action) {
    return {
        ...state,
        [action.team] : {
            ...state[action.team],
            canScore : true,
            canScoreCon: false,
        },
        [action.opposition] : {
            ...state[action.opposition],
            canScore : true,
            canScoreCon: false,
        }
    };
}

function applyScorePen(state, action) {
    return {
        ...state,
        [action.team] : {
            ...state[action.team],
            scoring : {
                ...state[action.team].scoring,
                pens: state[action.team].scoring.pens.concat(action.timestamp),
                calculated: state[action.team].scoring.calculated + 3
            }
        }
    };
}

function matchSetup(state, action){
    return {
        ...state,
        home: {
            ...state.home,
            name: action.home
        },
        away: {
            ...state.away,
            name: action.away
        }
    };
}

function timerKickOff(state, action) {
    return {
        ...state,
        home: {
            ...state.home,
            canScore: true
        },
        away : {
            ...state.away,
            canScore: true
        }
    }
}

function timerEnd(state, action) {
    return {
        ...state,
        home: {
            ...state.home,
            canScore: false
        },
        away : {
            ...state.away,
            canScore: false
        }
    }
}

function gameOver(state) {
    return {
        ...state,
        teams: initialState.teams
    };
}

const teams = (state, action) => {
    switch(action.type) {
        case MATCH_SETUP:
            return matchSetup(state, action)
        case SCORE_TRY:
            return applyScoreTry(state, action);
        case SCORE_CON: 
            return applyScoreCon(state, action);
        case MISS_CON: 
            return applyMissCon(state, action);
        case SCORE_PEN: 
            return applyScorePen(state, action);
        case TIMER_KICK_OFF:
            return timerKickOff(state, action);
        case TIMER_END:
            return timerEnd(state, action);
        case MATCH_END:
            return gameOver(state);
        default:
            return state;
    }
}

export default teams;
