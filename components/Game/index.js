import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'react-redux';
import { actionCreators as actions } from '../../actions';

import Team from '../Team';

class Game extends React.Component {    
    
    function mapStateToProps(state) {
        const { home, away } from state.teams;
        
        return { home, away };
    }
    
    function mapDispatchToProps(dispatch) {
        return {
            
        };
    }
    
    render(){
    
        const { home, away } = this.props;
        
        return (
            <View>
                <Team team={home} status="home" />
                <Team team={away} status="away" />
                <View>
                    <Button onPress={()=>console.log('end game')} title="End Game" />
                </View>
            </View>
        )
    }   
}

const styles = StyleSheet.create({

});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
