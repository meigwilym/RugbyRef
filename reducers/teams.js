import { SCORE_TRY, SCORE_CON, SCORE_PEN } from '../types';

function applyScoreTry(state, action) {
    return {
        ...state,
        tryScored : true,
        [action.team] : {
            ...state[action.team],
            scoring : {
                ...state[action.team].scoring,
                tries: state[action.team].scoring.tries.concat(action.timestamp),
                calculated : state[action.team].scoring.calculated + 5
            }
        }
    }
}

function applyScoreCon(state, action) {
    return {
        ...state,
        tryScored : false,
        [action.team] : {
            ...state[action.team],
            scoring : {
                ...state[action.team].scoring,
                cons: state[action.team].scoring.cons.concat(action.timestamp),
                calculated: state[action.team].scoring.calculated + 2
            }
        }
    }
}

function applyMissCon(state, action) {
    return {
        ...state,
        tryScored : false
    }
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
    }
}

const teams = (state, action) => {
    switch(action.type) {
        case SCORE_TRY:
            return applyScoreTry(state, action);
        case SCORE_CON: 
            return applyScoreCon(state, action);
        case 'MISS_CON': 
            return applyMissCon(state, action);
        case SCORE_PEN: 
            return applyScorePen(state, action);
        default:
            return state;
    }
}

export default teams;