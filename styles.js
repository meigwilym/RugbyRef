import { StyleSheet } from 'react-native';
import { Constants } from 'expo';

export default appStyles = StyleSheet.create({
    page: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: Constants.statusBarHeight,
      backgroundColor: 'transparent',
    },
    foreText: {
      color:'white',
      fontSize:15,
      fontWeight:'bold',
    }
  });
  