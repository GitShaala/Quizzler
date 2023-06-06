import {StyleSheet} from 'react-native';
import { COLORS } from '../../res/Colors';

const homeStyle = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      flexDirection: 'column',
      backgroundColor: COLORS.appBackgroundColor,
    },
    headerTextStyle: {
      width: '100%',
      flex: 0.2,
      padding: 16,
      color: COLORS.headerColor,
      marginTop: 40,
      fontSize: 55,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    imageContainer: {
      width: '100%',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonStyle: {
      width: '60%',
      height: 50,
      borderRadius: 25,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
      backgroundColor: COLORS.navigationButtonColor,
      marginBottom: 50,
    },
    startButtonTextStyle: {
      color: 'black',
      fontSize: 20,
      letterSpacing: 2
    },
  });

  export default homeStyle