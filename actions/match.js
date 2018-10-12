import { MATCH_SETUP, MATCH_END } from '../types/match';

function matchSetup({ home, away, duration }) {
    return {
        type: MATCH_SETUP,
        home: home, 
        away: away,
        duration: duration
    };
}

function matchEnd() {
    return {
        type: MATCH_END
    }
}

const actionCreators = {
    matchSetup,
    matchEnd
};

export { actionCreators };