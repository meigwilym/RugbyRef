import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';

const Button = ({ onPress, color, title }) =>
        <TouchableHighlight onPress={onPress} underlayColor="white">
            <View style={[styles.button, {backgroundColor: color}]}>
                <Text style={styles.buttonText}>{title.toUpperCase()}</Text>
            </View>
        </TouchableHighlight>

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

export default Button;

