import React from 'react';
import { View, Text } from 'react-native';

export const TeamName = props => 
    <View>
        <Text style={{ fontSize: 50 }}>{props.name}</Text>
    </View>
    
export default TeamName;
