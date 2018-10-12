// Team
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { actionCreators } from '../../actions/teams';
import { TryButton, PenButton, ConButtons } from './ActionButtons';
import { Card, Badge } from 'react-native-elements';

class Team extends React.Component {
    
    constructor(props) {
        super(props)

        // props.whichTeam
        
        this.tryScored = this.tryScored.bind(this);
        this.conversionHit = this.conversionHit.bind(this);
        this.conversionMiss = this.conversionMiss.bind(this);
        this.penScored = this.penScored.bind(this);
    }

    tryScored() {
        if(this.props[this.props.whichTeam].canScore == false) return;
        this.props.scoreTry();
    }

    conversionHit() {
        if(this.props[this.props.whichTeam].canScoreCon == false) return; 
        this.props.scoreCon();
    }

    conversionMiss() {
        if(this.props[this.props.whichTeam].canScoreCon == false) return; 
        this.props.missCon();
    }

    penScored() {
        if(this.props[this.props.whichTeam].canScore == false) return;
        this.props.scorePen();
    }

    render() { 
        const { name, scoring, canScore, canScoreCon, colour } = this.props[this.props.whichTeam];

        return (<View style={styles.container}>
                    <Card containerStyle={{borderTopColor:colour, borderTopWidth:4}}>
                        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                            <Text style={{ fontSize: 30 }} numberOfLines={1}>{name}</Text>
                            <Text style={{ fontSize: 30, textAlign:'right', fontWeight:'bold' }}>{scoring.calculated}</Text>
                        </View>                
                        <View style={{flexDirection:'row', justifyContent:'flex-end',marginBottom:10 }}>
                            <Badge><Text><Text style={{color:'#DCDCDC'}}>T </Text><Text style={{color:'white'}}>{scoring.tries.length}</Text></Text></Badge>
                            <Badge containerStyle={{ marginLeft:5}}><Text><Text style={{color:'#DCDCDC'}}>C </Text><Text style={{color:'white'}}>{scoring.cons.length}</Text></Text></Badge>
                            <Badge containerStyle={{ marginLeft:5}}><Text><Text style={{color:'#DCDCDC'}}>P </Text><Text style={{color:'white'}}>{scoring.pens.length}</Text></Text></Badge>
                        </View>
                        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                            {
                                (canScoreCon) ?
                                    (<View style={styles.buttons}>
                                        <ConButtons onHit={this.conversionHit} onMiss={this.conversionMiss}/>
                                    </View>)
                                : 
                                    (<View style={styles.buttons}>
                                        <TryButton onPress={this.tryScored} disabled={canScore} />
                                        <PenButton onPress={this.penScored} disabled={canScore}/>
                                    </View>)
                            }
                        </View>
                    </Card>
                </View>);
    }
}

const mapStateToProps = function(state, ownProps){ 
    return state.teams;
}

const mapDispatchToProps = function(dispatch, ownProps) {
    return {
        scoreTry : () => dispatch(actionCreators.scoreTry(ownProps.whichTeam)),
        scoreCon : () => dispatch(actionCreators.scoreCon(ownProps.whichTeam)),
        missCon  : () => dispatch(actionCreators.missCon(ownProps.whichTeam)),
        scorePen : () => dispatch(actionCreators.scorePen(ownProps.whichTeam)),
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        flexDirection: 'column'
    },
    data: {
        flex: 1, 
        flexDirection: 'row'
    },
    scores: {
        flex: 1, 
    },
    buttons: {
        flex: 2, 
        flexDirection: 'row'
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Team);