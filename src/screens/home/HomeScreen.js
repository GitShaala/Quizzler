import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import { COLORS } from '../../res/Colors';
import homeStyle from './home.styles'

function startGame(navigation) {
  navigation.navigate('quiz');
}
const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={homeStyle.container}>
      <StatusBar hidden={true} />
      <Text style={homeStyle.headerTextStyle}>Quizzler</Text>
      <View style={homeStyle.imageContainer}>
        <Image
          style={{width: 200, height: 200}}
          source={{
            uri: 'https://www.akacasemanagement.com/wp-content/uploads/2021/08/question-mark-5976736_1280-640x640.png',
          }}></Image>
      </View>
      <TouchableOpacity
        style={homeStyle.buttonStyle}
        onPress={() => startGame(navigation)}>
        <Text style={homeStyle.startButtonTextStyle}>START QUIZ</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default HomeScreen;
