import {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  useWindowDimensions,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
const navigationButtonColor = '#f3cd7b';
const quizBackGroundColor = '#000000';
const questionStyleBackground = '#333333';
const headerColor = '#ffbb01';
const questionCountColor = '#ff2165';

const shuffleArray = array => {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
};

const QuizScreen = ({navigation}) => {
  const url =
    'https://opentdb.com/api.php?amount=10&type=multiple&encode=url3986';
  const {height, width} = useWindowDimensions();
  const [questions, setQuestions] = useState();
  const [questionNumber, setQuestionNumber] = useState(0);
  const [options, setOptions] = useState([]);

  const getQuiz = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setQuestions(data.results);
    setOptions(generateAndShuffle(data.results[questionNumber]));
  };

  useEffect(() => {
    getQuiz();
  }, []);

  const handleNext = () => {
    setQuestionNumber(questionNumber + 1);
    setOptions(generateAndShuffle(questions[questionNumber]));
  };

  const generateAndShuffle = _options => {
    const options = [..._options.incorrect_answers];
    options.push(_options.correct_answer);
    shuffleArray(options);
    return options;
  };

  const showResults = (navigation) => {
    navigation.navigate('result')
  }

  return (
    <SafeAreaView style={[styles.quizContainer, {width: width}]}>
      <StatusBar hidden={true}></StatusBar>
      {questions && (
        <View style={styles.quizCardStyle}>
          <Text style={styles.headerTextStyle}>Quizzler</Text>
          <Text style={styles.questionCountStyle}>
            Question {questionNumber + 1}/{questions.length}
          </Text>
          <Text style={styles.questionTextStyle}>
            {decodeURIComponent(questions[questionNumber].question)}
          </Text>

          <View style={styles.answerContainerStyle}>
            <View style={styles.answerStyle}>
              <TouchableOpacity style={styles.optionStyle}>
                <Text style={styles.answerTextStyle}>
                  {decodeURIComponent(options[0])}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.optionStyle}>
                <Text style={styles.answerTextStyle}>
                  {decodeURIComponent(options[1])}
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.answerStyle}>
              <TouchableOpacity style={styles.optionStyle}>
                <Text style={styles.answerTextStyle}>
                  {decodeURIComponent(options[2])}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.optionStyle}>
                <Text style={styles.answerTextStyle}>
                  {decodeURIComponent(options[3])}
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.navigationButtonContainer}>
            {questionNumber !== 9 && (
              <TouchableOpacity style={styles.navigationButtonStyle}>
                <Text style={styles.navigationTextStyle} onPress={handleNext}>
                  NEXT
                </Text>
              </TouchableOpacity>
            )}

            {questionNumber === 9 && (
              <TouchableOpacity style={styles.navigationButtonStyle}>
                <Text style={styles.navigationTextStyle} onPress={showResults(navigation)}>
                  SHOW RESULTS
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      )}
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
    alignContent: 'center',
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
  questionCountStyle: {
    flex: 0.1,
    width: '100%',
    marginTop: 10,
    textAlignVertical: 'center',
    textAlign: 'center',
    fontSize: 20,
    letterSpacing: 2,
    color: questionCountColor,
    alignContent: 'center',
    justifyContent: 'center',
  },
  questionTextStyle: {
    maxHeight: 200,
    fontSize: 22,
    textAlign: 'center',
    color: 'white',
    marginTop: 10,
    padding: 10,
    lineHeight: 30,
  },
  answerContainerStyle: {
    width: '100%',
    flex: 0.5,
    flexDirection: 'column',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-around',
    padding: 8,
  },
  answerStyle: {
    width: '98%',
    flex: 0.4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  optionStyle: {
    alignContent: 'center',
    flex: 0.48,
    aspectRatio: 2.5,
    borderRadius: 50,
    margin: 5,
    borderWidth: 1,
    borderColor: 'gray',
  },
  answerTextStyle: {
    width: '100%',
    height: '100%',
    fontSize: 15,
    color: 'white',
    textAlignVertical: 'center',
    textAlign: 'center',
    padding: 5,
  },
  navigationButtonContainer: {
    width: '90%',
    flex: 0.06,
    alignSelf: 'center',
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },
  navigationButtonStyle: {
    width: '60%',
    height: 45,
    borderRadius: 25,
    backgroundColor: navigationButtonColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navigationTextStyle: {
    color: 'black',
    letterSpacing: 2,
    textAlign: 'center',
  },
});
export default QuizScreen;
