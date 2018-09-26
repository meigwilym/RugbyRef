import React from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';

export default ConButtons = ({onHit, onMiss}) => 
    <View style={{flexDirection:'column'}}>
        <View  style={{flex: 1}}>
            <TouchableHighlight onPress={onHit} underlayColor="white">
                <View style={{backgroundColor: 'green'}}>
                    <Text style={{color:'white'}}>Hit</Text>
                </View>
            </TouchableHighlight>
        </View>
        <View  style={{flex: 1}}>
            <TouchableHighlight onPress={onMiss} underlayColor="white">
                <View style={{backgroundColor: 'red'}}>
                    <Text style={{color:'white'}}>Miss</Text>
                </View>
            </TouchableHighlight>
        </View>
    </View>