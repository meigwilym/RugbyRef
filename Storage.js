import { AsyncStorage } from "react-native"


saveMatch = async match => {
    let matches = getAllMatches();
    match.id = matches.length + 1;
    matches.unshift(match);
    try {
        await AsyncStorage.setItem('@PocketRef:matches', JSON.stringify(matches));
    } catch (error) {
        console.error('Storage>saveMatch', error);
    }
}

getAllMatches = async () => {
    try {
        const value = await AsyncStorage.getItem('@PocketRef:matches');
        if (value !== null) {
            return JSON.parse(value);
        }
        return [];
    } catch (error) {
        console.error('Storage>getAllMatches', error);
    }
}

getMatch = async (id) => {
    return getAllMatches().filter((match) => {
        return match.id == id;
    }).reduce(m => m);
}