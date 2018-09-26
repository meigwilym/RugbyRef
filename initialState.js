import { FIRST_HALF } from './types/halves';

export default initialState = {    
    teams: {
        canScore: true,
        home: {
            name: "Home",
            scoring: {
                tries: [],
                cons: [],
                pens: [],
                calculated: 0
            }
        },
        away: {
            name: "Away",
            scoring: {
                tries: [],
                cons: [],
                pens: [],
                calculated: 0
            }
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
    },
    ui: {
        WelcomeScreen : {},
        GameCreateScreen : {},
        PlayGameScreen : {},
        GameOverScreen : {},
        AboutScreen : {}
    }
}

