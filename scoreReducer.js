import initialState from './initialState';
import { SCORE_TRY, SCORE_CON, SCORE_PEN } from './types';

function applyScoreTry(state, action) {
    return {
        ...state,
        teams : {
            ...state.teams,
            [action.team] : {
                ...state.teams[action.team],
                scoring : {
                    ...state.teams[action.team].scoring,
                    tries: state.teams[action.team].scoring.tries.concat(action.timestamp),
                    calculated : state.teams[action.team].scoring.calculated + 5
                }
            }
        }
    }
}

function applyScoreCon(state, action) {
    return {
        ...state,
        teams : {
            ...state.teams,
            [action.team] : {
                ...state.teams[action.team],
                scoring : {
                    ...state.teams[action.team].scoring,
                    cons: state.teams[action.team].scoring.cons.concat(action.timestamp),
                    calculated: state.teams[action.team].scoring.calculated + 2
                }
            }
        }
    }
}

function applyScorePen(state, action) {
    return {
        ...state,
        teams : {
            ...state.teams,
            [action.team] : {
                ...state.teams[action.team],
                scoring : {
                    ...state.teams[action.team].scoring,
                    pens: state.teams[action.team].scoring.pens.concat(action.timestamp),
                    calculated: state.teams[action.team].scoring.calculated + 3
                }
            }
        }
    }
}

const scoreReducer = (state = initialState, action) => {
    switch(action.type) {
        case SCORE_TRY:
            return applyScoreTry(state, action);
        case SCORE_CON: 
            return applyScoreCon(state, action);
        case SCORE_PEN: 
            return applyScorePen(state, action);
        default:
            return state;
    }
}

export default scoreReducer;
