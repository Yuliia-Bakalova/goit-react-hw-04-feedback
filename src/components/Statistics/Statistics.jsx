import PropTypes from 'prop-types';
import { List, Text, Item } from './Statistics.styled';
export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (

    <List>
      <Item>
        <Text type={'good'}> Good: {good}</Text>
      </Item>
      <Item>
        <Text type={'neutral'}>Neutral: {neutral}</Text>
      </Item>
      <Item>
        <Text type={'bad'}>Bad: {bad}</Text>
      </Item>
      <Item>
        <Text type={'total'}>Total: {total}</Text>
      </Item>
      <Item>
        <Text type={'positivePercentage'}>Positive feedback: {positivePercentage}%</Text>
      </Item>
    </List>

);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
