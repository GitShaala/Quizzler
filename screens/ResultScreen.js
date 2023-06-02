import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  StatusBar,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AnimatedCircularProgress} from 'react-native-circular-progress';

const quizBackGroundColor = '#000000';
const questionStyleBackground = '#333333';
const headerColor = '#ffbb01';
const fill = 66;

const ResultScreen = () => {
  const {height, width} = useWindowDimensions();
  return (
    <SafeAreaView style={[styles.quizContainer, {width: width}]}>
      <StatusBar hidden={true}></StatusBar>
      <View style={styles.quizCardStyle}>
        <AnimatedCircularProgress
          size={300}
          width={30}
          fill={fill}
          tintColor="#00e0ff"
          backgroundColor="#3d5875">
          {fill => <Text style = {styles.progressTextStyle}>{fill}%</Text>}
        </AnimatedCircularProgress>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  quizContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: quizBackGroundColor,
    alignItems: 'center',
  },
  quizCardStyle: {
    flex: 1,
    flexDirection: 'column',
    width: '90%',
    marginTop: 30,
    alignItems : 'center',
    justifyContent : 'center',
    backgroundColor: questionStyleBackground,
    borderRadius: 15,
  },
  headerTextStyle: {
    flex: 0.2,
    width: '100%',
    marginTop: 10,
    textAlignVertical: 'center',
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    letterSpacing: 2,
    color: headerColor,
    alignContent: 'center',
    justifyContent: 'center',
    lineHeight: 10,
  },
  progressTextStyle : {
    color : headerColor,
    fontSize : 60,
    fontWeight : 'bold'
  }
});

export default ResultScreen;
