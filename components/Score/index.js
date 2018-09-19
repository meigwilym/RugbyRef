import React from 'react';
import { View, Text } from 'react-native';

const Score = props => 
    <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 80, textAlign:'right' }}>{ props.score }</Text>
    </View>
    
export default Score;
