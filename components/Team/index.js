// Team
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { actionCreators } from '../../actions';
import { TryButton, PenButton, ScoreDetail, ConButtons } from '../TeamComponents';


class Team extends React.Component {
    
    constructor(props) {
        super(props)

        this.tryScored = this.tryScored.bind(this);
        this.conversionHit = this.conversionHit.bind(this);
        this.conversionMiss = this.conversionMiss.bind(this);
        this.penScored = this.penScored.bind(this);
    }

    tryScored() {
        if(this.props.tryScored) return;
        this.props.scoreTry();
    }

    conversionHit() {
        this.props.scoreCon();
    }

    conversionMiss() {
        this.props.missCon();
    }

    penScored() {
        if(this.props.tryScored) return;
        this.props.scorePen();
    }

    render() { 
        const { name, scoring } = this.props;
        
        return 
            <View style={styles.container}>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <Text style={{ fontSize: 50 }}>{name}</Text>
                    <Text style={{ fontSize: 50, textAlign:'right' }}>{scoring.calculated}</Text>
                </View>                
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <View style={{ flexDirection: 'row', backgroundColor:'pink' }}>
                        <ScoreDetail label="Tries" amount={scoring.tries.length} />
                        <ScoreDetail label="Cons" amount={scoring.cons.length} />
                        <ScoreDetail label="Pens" amount={scoring.pens.length} />
                    </View>
                    {
                        (this.props.tryScored) ?
                            (<View style={styles.buttons}>
                                <ConButtons onHit={this.conversionHit} onMiss={this.conversionMiss}/>
                            </View>)
                        : 
                            (<View style={styles.buttons}>
                                <TryButton onPress={this.tryScored} />
                                <PenButton onPress={this.penScored} />
                            </View>)
                    }                     
                </View>
            </View>
    }
}

const mapStateToProps = function(state, ownProps){
    let myState = state.teams[ownProps.whichTeam];
    return myState;
}

const mapDispatchToProps = function(dispatch, ownProps) {
    return {
        scoreTry : () => dispatch(actionCreators.scoreTry(ownProps.whichTeam)),
        scoreCon : () => dispatch(actionCreators.scoreCon(ownProps.whichTeam)),
        missCon : () => dispatch(actionCreators.missCon()),
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