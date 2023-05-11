import PropTypes from 'prop-types';
import { Btn , BtnWrapper} from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <BtnWrapper className='btn__wrapper'>
        {options.map(option => {
          return (
            <Btn
              type="button"
              onClick={() => onLeaveFeedback(option)}
              key={option}
              className='btn'  
            >
              {option}
            </Btn>
          );
        })}
      </BtnWrapper>
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

