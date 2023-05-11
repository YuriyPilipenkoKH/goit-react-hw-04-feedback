import PropTypes from 'prop-types';
import { StatItem, StatList } from './Statistics.styled';
 
export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <StatList>
      <StatItem ><span>Good:</span> {good}</StatItem>
      <StatItem ><span>Neutral:</span> {neutral}</StatItem>
      <StatItem ><span>Bad:</span> {bad}</StatItem>
      <StatItem ><span>Total:</span> {total}</StatItem>
      <StatItem ><span>Positive feedback:</span> {positivePercentage}%</StatItem>
    </StatList>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};