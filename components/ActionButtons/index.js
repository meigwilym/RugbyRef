import React, { Component } from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';

/**
 * Generic button
 */
const Button = ({ onPress, color, title }) =>
        <TouchableHighlight onPress={onPress} underlayColor="white">
            <View style={[styles.button, {backgroundColor: color}]}>
                <Text style={styles.buttonText}>{title.toUpperCase()}</Text>
            </View>
        </TouchableHighlight>
     
/**   
 * Try Button
 */
const TryButton = props => 
    <Button title="Try" onPress={props.onPress}  color="blue"/>
        
/**
 * Penalty Button
 */
const PenButton = props => 
    <Button title="Pen" onPress={props.onPress} color="green" />


const styles = StyleSheet.create({
    button : {
        alignItems: 'center',
        padding: 20
    },
    buttonText: {
        color: 'white',
        fontWeight:'bold'
    }
});

export { TryButton, PenButton };
