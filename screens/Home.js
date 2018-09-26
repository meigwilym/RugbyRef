import React from 'react';
import { View, Text} from 'react-native';
import { Constants } from 'expo';

import { NavigationActions } from 'react-navigation';

const navigateAction = NavigationActions.navigate({
  routeName: 'NewGame',
  params: {},
  action: NavigationActions.navigate({ routeName: 'SubProfileRoute' }),
});



export default class Home extends React.Component {

    constructor(props) {
        super(props);
    }

    goNewGame() {
        this.props.navigation.dispatch(navigateAction);
    }

    render() {
        return (<View style={styles.container}>
                <Text>Home Screen</Text>
                
            </View>);
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: Constants.statusBarHeight,
      backgroundColor: '#ecf0f1',
    },
  });