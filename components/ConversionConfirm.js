import React from 'react';
import { View, Text, Button, StyleSheet, Modal } from 'react-native';

class ConversionConfirm extends React.Component {

    state = { modalVisible : this.props.visible };
    
    setModalVisible(visible) {
        this.setState({ modalVisible : visible });
    }
    
    render() {
        return (
        <View>
            <Modal animationType="slide" transparent={true} visible={this.state.modalVisible} onRequestClose={() => console.log('Modal has been closed.')}>
                <Text style={styles.heading}>Converted?</Text>
                <View style={{flexDirection:'row'}}>
                    <Button onPress={this.props.yesConversion} title="Yes" style={[styles.btn, styles.yes]} />
                    <Button onPress={this.props.noConversion} title="No" style={[styles.btn, styles.no]} />
                </View>
            </Modal>
        </View>)
    }
    
}

const styles = StyleSheet.create({
    overlay : {
        position:'absolute',
        left: 0,
        top: 0,
        opacity: 0.5,
        backgroundColor: 'black',
        width:'100%',
        height:'100%'
    },
    heading : {
        color:'white',
        textAlign:'center',
        fontSize:30
    },
    btn : {
    
    },
    yes : {
    
    }, 
    no : {
    
    }
});

export default ConversionConfirm;
