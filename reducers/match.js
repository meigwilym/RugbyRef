import { MATCH_SETUP, MATCH_END } from '../types/match';

function matchSetup(state, action){
    console.log(state.match)
    return {
        ...state.match,
        teams: {
            ...state.teams,
            home: {
                ...state.teams.home,
                name: action.home
            },
            away: {
                ...state.teams.away,
                name: action.away
            }
        },
        timer: {
            ...state.timer,
            halfDuration: parseInt(action.duration)
        }
    };
}

function matchEnd(state, action){
    return state;
}

const match = (state, action) => {
    switch(action.type) {
        case MATCH_SETUP:
            return matchSetup(state, action);
        case MATCH_END:
            return matchEnd(state, action);
        default:
            return state;
    }
}

export default match;