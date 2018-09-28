import { combineReducers } from 'redux'
import initialState from '../initialState';
import teams from './teams';
import timer from './timer';

function rootReducer(state = initialState, action) {
    return {
        teams: teams(state.teams, action),
        timer: timer(state.timer, action),
    };
};

export default rootReducer;
