import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ScoreDetail = props => 
    <View style={ styles.scoreDetail }>
        <Text style={styles.label}>{props.label}</Text>
        <Text style={styles.amount}>{props.amount}</Text>
    </View>
    
const styles = StyleSheet.create({
    scoreDetail : {
        flex: 1, 
        flexDirection: 'row', 
    },
    label : {
        fontSize: 20, 
        paddingRight:5
    },
    amount : {
        fontSize: 20, 
    }
});
    
export default ScoreDetail;
