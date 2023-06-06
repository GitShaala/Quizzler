import optionsStyles from './quiz.styles';
import {View, TouchableOpacity, Text} from 'react-native';

const OptionsView = ({props}) => {
  return (
      <TouchableOpacity style={[optionsStyles.optionStyle, {backgroundColor: props.color}]} onPress={props.handleClick}>
        <Text numberOfLines = {2} style= {optionsStyles.answerTextStyle}>{props.text}</Text>
      </TouchableOpacity>
  );
};

export default OptionsView;
