import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  Touchable,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
const color = '#5C469C';

function startGame(navigation) {
  navigation.navigate('result');
}
const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={style.container}>
      <StatusBar hidden={true} />
      <Text style={style.textStyle}>Quizzler</Text>
      <View style={style.imageContainer}>
        <Image
          style={{width: 200, height: 200}}
          source={{
            uri: 'https://www.akacasemanagement.com/wp-content/uploads/2021/08/question-mark-5976736_1280-640x640.png',
          }}></Image>
      </View>
      <TouchableOpacity
        style={style.buttonStyle}
        onPress={() => startGame(navigation)}>
        <Text style={style.startButtonTextStyle}>START QUIZ</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    backgroundColor: color,
  },
  textStyle: {
    width: '100%',
    flex: 0.2,
    padding: 16,
    color: 'white',
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
    width: 230,
    height: 70,
    borderRadius: 34,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#1B9C85',
    marginBottom: 50,
  },
  startButtonTextStyle: {
    fontSize: 24,
    letterSpacing: 1.2,
    color: 'white',
    fontWeight: 'bold',
  },
});
export default HomeScreen;
