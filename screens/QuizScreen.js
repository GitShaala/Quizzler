import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  useWindowDimensions
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
const color = "#5C469C";

const QuizScreen = ({navigation}) => {
  const{height,width} = useWindowDimensions()
  return (
    <SafeAreaView style={[styles.quizContainer,{width:width}]}>
    <StatusBar hidden={true}></StatusBar>
      <Text style={styles.questionStyle}>
        Q1. ‘Washington Declaration’ is a bilateral agreement that was signed
        between the US and which country?
      </Text> 
     <View style = {styles.answerContainerStyle}>
        <TouchableOpacity style={styles.answerStyle}>
          <Text style={styles.answerTextStyle}>Canada</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.answerStyle}>
          <Text style={styles.answerTextStyle}>UK</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.answerStyle}>
          <Text style={styles.answerTextStyle}>South Korea</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.answerStyle}>
          <Text style={styles.answerTextStyle}>Australia</Text>
        </TouchableOpacity>
      </View>

      <View style = {styles.navigationButtonContainer}>
        <TouchableOpacity style = {styles.navigationButtonStyle}>
          <Text style={styles.navigationTextStyle}>
            PREV
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navigationButtonStyle}>
          <Text style={styles.navigationTextStyle}>
            NEXT
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  quizContainer: {
    flex:1,
    flexDirection:'column',
    backgroundColor : color,
  },
  questionStyle: {     
    flex:0.25,
    fontSize: 25,
    textAlign : 'center',
    textAlignVertical:'center',
    color: 'white',
    marginTop : 10,
    marginEnd : 20,
    marginStart : 20,
    padding : 5
  },
  answerContainerStyle : {
    width: '100%',
    flex:0.6,
    alignItems : 'center',
    justifyContent : 'space-evenly',
    borderRadius: 25,
    marginTop : 20,
    borderColor: 'white',
  },
  answerStyle: {
    width: '80%',
    height : 60,
    paddingStart: 25,
    borderRadius: 30,
    borderColor: 'white',
    borderWidth : 1,
    margin:10,
  },
  answerTextStyle: {
    width: '100%',
    height : '100%',
    fontSize: 18,
    color: 'white',
    textAlignVertical : 'center',
    padding : 5,
    fontWeight:'bold'
  },
  navigationButtonContainer: {
    width: '90%',
    flex: 0.1,
    alignSelf : 'center',
    flexDirection: 'row',
    alignItems : 'center',
    marginTop : 30,
    justifyContent: 'space-between',
    padding: 15,
  },
  navigationButtonStyle : {
    flex:0.3,
    width:'100%',
    height : 45,
    borderRadius : 25,
    backgroundColor : '#D4ADFC',
    alignItems : 'center',
    justifyContent : 'center'
  },
  navigationTextStyle : {
    color : 'black',
    textAlign : 'center'
  }
});
export default QuizScreen;
