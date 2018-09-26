import React from 'react';
import { View, Text } from 'react-native';
import ScoreDetail from '../ScoreDetail';

const ScoreBreakdown = ({scoring}) => {
    return <View style={{ flexDirection: 'row', backgroundColor:'pink' }}>
            <ScoreDetail label="Tries" amount={scoring.tries.length} />
            <ScoreDetail label="Cons" amount={scoring.cons.length} />
            <ScoreDetail label="Pens" amount={scoring.pens.length} />
        </View>
}

export default ScoreBreakdown; 