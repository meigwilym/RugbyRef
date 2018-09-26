import {SCORE_TRY, SCORE_CON, SCORE_PEN } from './types';

function scoreTry(whichTeam){
    return { 
        type: SCORE_TRY, 
        team: whichTeam,
        timestamp: Date.now()
    };
}

function scoreCon(whichTeam){
    return { 
        type: SCORE_CON, 
        team: whichTeam,
        timestamp: Date.now()
    };
}

function scorePen(whichTeam){
    return { 
        type: SCORE_PEN, 
        team: whichTeam,
        timestamp: Date.now()
    };
}

const actionCreators = {
    scoreTry,
    scoreCon,
    scorePen
};

export { actionCreators };
