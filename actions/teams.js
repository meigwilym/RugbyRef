import {SCORE_TRY, SCORE_CON, MISS_CON, SCORE_PEN } from '../types/scoring';

function scoreTry(whichTeam){
    const opposition = (whichTeam == 'home') ? 'away' : 'home';
    
    return { 
        type: SCORE_TRY, 
        team: whichTeam,
        opposition: opposition,
        timestamp: Date.now()
    };
}

function scoreCon(whichTeam){
    const opposition = (whichTeam == 'home') ? 'away' : 'home';
    return { 
        type: SCORE_CON, 
        team: whichTeam,
        opposition: opposition,
        timestamp: Date.now()
    };
}

function missCon(whichTeam){
    const opposition = (whichTeam == 'home') ? 'away' : 'home';
    return { 
        type: MISS_CON,
        team: whichTeam,
        opposition: opposition
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
    missCon,
    scorePen
};

export { actionCreators };
