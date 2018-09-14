import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Game extends React.Component {
    
    render(){
        return (
            <View>
                <Team name="Caernarfon" />
                <Team name="Bangor" />
                <View>
                    <Button onPress={()=>console.log('end game')} title="End Game" />
                </View>
            </View>
        )
    }   
}

const styles = StyleSheet.create({

});

export default Game;
