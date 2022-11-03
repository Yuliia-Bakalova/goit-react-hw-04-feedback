import PropTypes from 'prop-types';
import { FeedbackBtn, List } from './FeedbackOptions.styled.jsx';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <List>
    {options.map(option => (
      <FeedbackBtn type="button" key={option} onClick={() => onLeaveFeedback(option)}>
        {option}
      </FeedbackBtn>
    ))}
  </List>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

