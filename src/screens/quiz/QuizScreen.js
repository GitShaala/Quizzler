import {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  useWindowDimensions,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import optionsStyles from './quiz.styles';
import OptionsView from './OptionsView';
import {COLORS} from '../../res/Colors';

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
    COLORS.optionsBackgroundColor,
    COLORS.optionsBackgroundColor,
    COLORS.optionsBackgroundColor,
    COLORS.optionsBackgroundColor,
  ]);

  const getQuiz = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setQuestions(data.results);
    setOptions(generateAndShuffle(data.results[questionNumber]));
    setQuestionNumber(questionNumber);
  };

  useEffect(() => {
    if (questions == undefined || questions.length == 0) {
      getQuiz();
    }
  }, []);

  const handleNext = () => {
    const quest = questionNumber + 1;
    setQuestionNumber(quest);
    resetOptionsBackground();
    console.log(quest, 'questionNumber');
    setOptions(generateAndShuffle(questions[quest]));
  };

  const decode = input => {
    return decodeURIComponent(input);
  };

  const isCorrectAnswer = inputAnswer => {
    const correctAnswer = decode(questions[questionNumber].correct_answer);
    return inputAnswer === correctAnswer;
  };

  const resetOptionsBackground = () => {
    const updatedOptionColorStateArray = optionColorStateArray.map(color => {
      color = COLORS.optionsBackgroundColor;
      return color;
    });
    setOptionColorStateArray(updatedOptionColorStateArray);
  };

  const updateOptionBackgroundColor = (answer, clickedIndex) => {
    const updatedOptionColorStateArray = optionColorStateArray.map(
      (color, index) => {
        if (clickedIndex === index) {
          if (isCorrectAnswer(answer)) {
            color = COLORS.rightAnswerColor;
            setCorrectAnswersCount(correctAnswersCount + 1)
          } else {
            color = COLORS.wrongAnswerColor;
          }
          return color;
        } else {
          color = COLORS.optionsBackgroundColor;
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
    const resultData = {correctAnswer : correctAnswersCount,totalQuestions : questions.length}
    navigation.navigate('result',resultData);
  };

  return (
    <SafeAreaView style={[optionsStyles.quizContainer, {width: width}]}>
      <StatusBar hidden={true}></StatusBar>
      {questions && (
        <View style={optionsStyles.quizCardStyle}>
          <Text style={optionsStyles.headerTextStyle}>Quizzler</Text>
          <Text style={optionsStyles.questionCountStyle}>
            Question {questionNumber + 1}/{questions.length}
          </Text>
          <Text style={optionsStyles.questionTextStyle}>
            {decode(questions[questionNumber].question)}
          </Text>

          <View style={optionsStyles.answerContainerStyle}>
            <OptionsView
              props={{
                text: decode(options[0]),
                color: optionColorStateArray[0],
                handleClick: () =>
                  updateOptionBackgroundColor(decode(options[0]), 0),
              }}
            />

            <OptionsView
              props={{
                text: decode(options[1]),
                color: optionColorStateArray[1],
                handleClick: () =>
                  updateOptionBackgroundColor(decode(options[1]), 1),
              }}
            />

            <OptionsView
              props={{
                text: decode(options[2]),
                color: optionColorStateArray[2],
                handleClick: () =>
                  updateOptionBackgroundColor(decode(options[2]), 2),
              }}
            />

            <OptionsView
              props={{
                text: decode(options[3]),
                color: optionColorStateArray[3],
                handleClick: () =>
                  updateOptionBackgroundColor(decode(options[3]), 3),
              }}
            />
          </View>

          <View style={optionsStyles.navigationButtonContainer}>
            {questionNumber !== 9 && (
              <TouchableOpacity
                style={optionsStyles.navigationButtonStyle}
                onPress={handleNext}>
                <Text style={optionsStyles.navigationTextStyle}>NEXT</Text>
              </TouchableOpacity>
            )}

            {questionNumber === 9 && (
              <TouchableOpacity style={optionsStyles.navigationButtonStyle}>
                <Text
                  style={optionsStyles.navigationTextStyle}
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

export default QuizScreen;
