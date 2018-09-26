import { combineReducers } from 'redux'
import teams from './teams';
import timer from './timer';

function rootReducer(state = {}, action) {
    return {
        teams: teams(state.teams, action),
        timer: timer(state.timer, action),
    };
};

export default rootReducer;
