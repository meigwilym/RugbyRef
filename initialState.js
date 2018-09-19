export const initialState = {    
    teams: {
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
    time: {
        halfLength: 40,
        start: null,
    },
    ui: {}
}

