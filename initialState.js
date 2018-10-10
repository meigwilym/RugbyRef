import { FIRST_HALF } from './types/halves';

export default initialState = {    
    teams: {
        home: {
            name: "Home",
            scoring: {
                tries: [],
                cons: [],
                pens: [],
                calculated: 0
            },
            canScore: false,
            canScoreCon: false,
        },
        away: {
            name: "Away",
            scoring: {
                tries: [],
                cons: [],
                pens: [],
                calculated: 0
            },
            canScore: false,
            canScoreCon: false,
        }
    },
    timer: {
        currentHalf: FIRST_HALF,
        halfDuration: 10,
        first: {
            start: null,
            end: null
        },
        second: {
            start: null,
            end: null
        }
    }
}

