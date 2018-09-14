import React from 'react';
import { AppRegistry, View } from 'react-native';
import TeamName from './TeamName';
import Score from './Score';
import TryButton from './TryButton';
import PenButton from './PenButton';
import ScoreBreakdown from './ScoreBreakdown';

export default class Team extends React.Component {
    constructor(props) {
        super(props);
        this.handleTryClick = this.handleTryClick.bind(this);
        this.handlePenClick = this.handlePenClick.bind(this);
    }
    
    state = {
            name: this.props.name,
            tries: 0,
            cons: 0,
            pens: 0
        }
    
    
    getScore() {
        return (this.state.tries * 5) + (this.state.cons * 2) + (this.state.pens * 3);
    }
    
    handleTryClick() {
        this.setState({ tries : this.state.tries + 1 });
    }
    
    handlePenClick() {
        this.setState({ pens : this.state.pens + 1 });
    }
    
    yesConversion() {
        this.setState({ cons : this.state.cons + 1 });
    }
    
    noConversion() {
        this.setState();
    }
    
    render(){
        return <View style={{flex: 1, flexDirection: 'column'}}>
                    <TeamName name={this.state.name} />
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <View style={{flex: 2, flexDirection: 'column'}}>
                            <Score score={this.getScore()} />
                            <ScoreBreakdown tries={this.state.tries} cons={this.state.cons} pens={this.state.pens} />
                        </View>
                        <View style={{flex: 1, flexDirection: 'column'}}>
                            <TryButton onPress={this.handleTryClick} />
                            <PenButton onPress={this.handlePenClick} />
                        </View>
                    </View>
                </View>
    }
}
