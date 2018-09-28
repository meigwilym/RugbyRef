import { MATCH_SETUP, MATCH_END } from '../types/match';

function matchSetup({ home, away, duration }) {
    return {
        type: MATCH_SETUP,
        home: home, 
        away: away,
        duration: duration
    };
}

function matchEnd(teams) {
    return {
        type: MATCH_END,
        teams
    }
}

const actionCreators = {
    matchSetup,
    matchEnd
};

export { actionCreators };