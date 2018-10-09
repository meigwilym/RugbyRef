import React, { Component } from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';

/**
 * Generic button
 */
const Button = ({ onPress, color, title, disabled }) =>
    <View  style={{flex: 1}}>
        <TouchableHighlight onPress={onPress} underlayColor="white">
            <View style={[styles.button, {backgroundColor: color}]}>
                <Text style={styles.buttonText}>{title.toUpperCase()}</Text>
            </View>
        </TouchableHighlight>
        </View>
     
/**   
 * Try Button
 */
const TryButton = props => 
    <Button title="Try" onPress={props.onPress} disabled={props.disabled} color="blue"/>
        
/**
 * Penalty Button
 */
const PenButton = props => 
    <Button title="Pen" onPress={props.onPress} disabled={props.disabled} color="green" />

/** 
 * Conversion confirm buttons
 */
const ConButtons = ({onHit, onMiss}) => 
    <View style={{flex: 2, flexDirection: 'row'}}>
        <Button title="Con" onPress={onHit} color="green" />
        <Button title="Miss" onPress={onMiss} color="red" />
    </View>


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

export { TryButton, PenButton, ConButtons };
