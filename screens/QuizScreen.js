import {View, Text, TouchableOpacity, StyleSheet, StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
const color = "#154c79"
const QuizScreen = () => {
  return (
    <SafeAreaView styles = {styles}>
    <StatusBar hidden = {true}/>
      <Text styles = {styles.questionStyle}>Q1. ‘Washington Declaration’ is a bilateral agreement that was signed between the US and which country?</Text>
      <View>
        <TouchableOpacity styles = {styles.answerStyle}>
            <Text styles = {styles.answerTextStyle}>Canada</Text>
        </TouchableOpacity>
        <TouchableOpacity styles = {styles.answerStyle}>
            <Text styles = {styles.answerTextStyle}>UK</Text>
        </TouchableOpacity>
        <TouchableOpacity styles = {styles.answerStyle}>
            <Text styles = {styles.answerTextStyle}>South Korea</Text>
        </TouchableOpacity>
        <TouchableOpacity styles = {styles.answerStyle}>
            <Text styles = {styles.answerTextStyle}>Australia</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity styles = {styles.answerTextStyle}>
            <Text styles = {{fontSize:20 , color : 'white' , fontWeight : 'bold'}}>PREV</Text>
            <Text styles = {{fontSize:20 , color : 'white' , fontWeight : 'bold'}}>NEXT</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container : {
        height : '100%',
        width : '100%',
        flex : 1,
        flexDirection : 'column',
        backgroundColor: color
    },
    questionStyle : {
        width : '100%',
        height : 70,
        justifyContent : 'flex-start',
        fontSize : 25,
        color : 'white'
    },
    answerStyle :{
        width : '100%',
        height : 50,
        padding: 10,
        borderRadius : 25,
        borderColor : 'white',
    },
    answerTextStyle : {
      width : '100%',
      height : '100%',
      fontSize : 24,
      color : 'black'
    },
    navigationButtonContainer : {
        width:'100%',
        flex:1,
        flexDirection : 'row',
        height : 55,
        justifyContent:'space-between',
        padding : 5
    }

})
export default QuizScreen;
