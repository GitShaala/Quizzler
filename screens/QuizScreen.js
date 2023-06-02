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
const quizCardStyleBackground = '#333333';
const headerColor = '#ffbb01';
const questionCountColor = '#ff2165';
const optionColors = {
  right: '#32CD30',
  wrong: '#FF0000',
};

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
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [optionColorStateArray, setOptionColorStateArray] = useState([
    quizCardStyleBackground,
    quizCardStyleBackground,
    quizCardStyleBackground,
    quizCardStyleBackground,
  ]);
  // const resultType = {
  //   correct: 'Correct',
  //   incorrect: 'Incorrect',
  // };

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

  const decode = input => {
    return decodeURIComponent(input);
  };

  const isCorrectAnswer = inputAnswer => {
    return inputAnswer === decode(questions[questionNumber].correct_answer);
  };

  const updateOptionBackgroundColor = (answer, clickedIndex) => {
    const updatedOptionColorStateArray = optionColorStateArray.map(
      (color, index) => {
        if (clickedIndex == index) {
          if (isCorrectAnswer(answer)) {
            color = optionColors.right;
          } else {
            color = optionColors.wrong;
          }
          return color;
        } else {
          color = quizCardStyleBackground;
          console.log(color, 'color');
          return color;
        }
      },
    );
    setOptionColorStateArray(updatedOptionColorStateArray);
  };

  const generateAndShuffle = _options => {
    const options = [..._options.incorrect_answers];
    options.push(_options.correct_answer);
    shuffleArray(options);
    return options;
  };

  const showResults = navigation => {
    navigation.navigate('result');
  };

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
            {decode(questions[questionNumber].question)}
          </Text>

          <View style={styles.answerContainerStyle}>
              <TouchableOpacity
                style={[
                  styles.optionStyle,
                  {backgroundColor: optionColorStateArray[0]},
                ]}
                onPress={() =>
                  updateOptionBackgroundColor(decode(options[0]), 0)
                }>
                <Text style={styles.answerTextStyle}>{decode(options[0])}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.optionStyle,
                  {backgroundColor: optionColorStateArray[1]},
                ]}
                onPress={() =>
                  updateOptionBackgroundColor(decode(options[1]), 1)
                }>
                <Text style={styles.answerTextStyle}>{decode(options[1])}</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.optionStyle,
                  {backgroundColor: optionColorStateArray[2]},
                ]}
                onPress={() =>
                  updateOptionBackgroundColor(decode(options[2]), 2)
                }>
                <Text style={styles.answerTextStyle}>{decode(options[2])}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.optionStyle,
                  {backgroundColor: optionColorStateArray[3]},
                ]}
                onPress={() =>
                  updateOptionBackgroundColor(decode(options[3]), 3)
                }>
                <Text style={styles.answerTextStyle}>{decode(options[3])}</Text>
              </TouchableOpacity>
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
                <Text
                  style={styles.navigationTextStyle}
                  onPress={showResults(navigation)}>
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
    backgroundColor: quizCardStyleBackground,
    borderRadius: 15,
  },
  headerTextStyle: {
    flex: 0.1,
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
    justifyContent: 'center'
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
    maxHeight: 150,
    fontSize: 22,
    textAlign: 'center',
    color: 'white',
    marginTop: 10,
    padding: 10,
    lineHeight: 30,
  },
  answerContainerStyle: {
    width: '100%',
    flex: 0.7,
    flexDirection: 'column',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-around',
    padding: 8,
  },
  optionStyle: {
    width : '80%',
    alignItems : 'center',
    justifyContent : 'center',
    flex: 0.2,
    borderRadius: 50,
    margin: 5,
    borderWidth: 1,
    borderColor: 'gray',
  },
  answerTextStyle: {
    width: '90%',
    height: '90%',
    fontSize: 15,
    color: 'white',
    textAlignVertical: 'center',
    textAlign: 'center',
    padding: 10
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
