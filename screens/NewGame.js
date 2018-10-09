import React from 'react';
import { View, StyleSheet, Button} from 'react-native';
import { connect } from 'react-redux';
import t from 'tcomb-form-native';
import { actionCreators } from '../actions/match';
import appStyles from '../styles';

const Form = t.form.Form;

const Durations = t.enums({
    600: '10m (Under 9)',
    900: '15m',
    1200: '20m',
    1500: '25m (Under 13)',
    1800: '30m (Under 15)',
    2100: '35m (Under 19)',
    2400: '40m (Senior)',
    10: 'Testing (10s)',
});

const Match = t.struct({
    home: t.String,
    away: t.String,
    duration: Durations
});

const options = {
  fields: {
    home: {
        label: 'Home Team Name',
        error: 'Every match needs a host! Please provide the home team\'s name'
    },
    away: {
        label: 'Visitors Team Name',
        error: 'No match can go without an opposition. Please provide the visitor\'s team name'
    },
    duration: {
        label: 'Half Duration'
    }
  },
};

class NewGame extends React.Component {

    handleSubmit = () => {
        const values = this._form.getValue(); // use that ref to get the form value        
        this.props.matchSetup(values);
        this.props.navigation.navigate('Game');
    }

    render() {
        return (
            <View style={styles.container}>
                <Form ref={c => this._form = c} type={Match} options={options} value={{duration: 10}} />
                <Button
                    title="Start Match"
                    onPress={this.handleSubmit}
                    style={{padding:15, backgroundColor:'green'}}                    
                    />
            </View>);
    }
}

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      marginTop: 50,
      padding: 20,
      backgroundColor: '#ffffff',
    },
});
const mapDispatchToProps = (dispatch) => {
    return {
        matchSetup: (values) => dispatch(actionCreators.matchSetup(values))
    }
};

export default connect(undefined, mapDispatchToProps)(NewGame);