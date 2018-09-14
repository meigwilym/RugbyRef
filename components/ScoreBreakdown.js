import React from 'react';
import { View, Text } from 'react-native';
import ScoreDetail from './ScoreDetail';

const ScoreBreakdown = ({tries, cons, pens}) => 
    <View style={{ flexDirection: 'row' }}>
        <ScoreDetail label="Tries" amount={tries} />
        <ScoreDetail label="Cons" amount={cons} />
        <ScoreDetail label="Pens" amount={pens} />
    </View>
    
export default ScoreBreakdown;

