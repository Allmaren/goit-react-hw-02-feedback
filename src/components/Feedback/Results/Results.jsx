import PropTypes from 'prop-types';
import { List, Item, Result } from './Result.styled';

const Results = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <List>
      <Item item="good">Good: {good} </Item>
      <Item item="neutral">Neutral: {neutral} </Item>
      <Item item="bad">Bad: {bad} </Item>
      <Item>Total: {total}</Item>
      <Result>Positive feedback: {positivePercentage}%</Result>
    </List>
  );
};

export default Results;

Results.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
