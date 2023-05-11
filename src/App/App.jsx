import { useState } from 'react'
import { Container } from 'components/container/Container';
import { Section } from 'components/section/Section';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';
import { iconReactHook } from 'utils/svgIcons';


export default function App(){
const [good, setGood] = useState(0)
const [neutral, setNeutral] = useState(0)
const [bad, setBad] = useState(0)

 const  onLeaveFeedback = value => {
  if(value === 'good' ) {
    setGood(prev => prev + 1);
  }
 else if(value === 'neutral') {
    setNeutral(prev => prev + 1);
  }
  else if (value === 'bad') {
    setBad(prev => prev + 1);
  }
  };

  const countTotalFeedback =() =>{
    return good + neutral + bad;
  }

  const countPositiveFeedbackPercentage =()=> {
    return Math.round((good / countTotalFeedback()) * 100);
  }


    return (
    <Container >
      <Section title = "Please leave feedback">
      <FeedbackOptions
             options={Object.keys({ good, neutral, bad })}
            onLeaveFeedback={onLeaveFeedback}
          />
      </Section>

      <Section title = "Statistics">
      {countTotalFeedback() > 0 

      ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={
                good === 0
                ? 0
                : countPositiveFeedbackPercentage()
              }
            /> ) 
      :  <Notification message="There is no feedback" />
      }

      </Section>     
    </Container>
    ) 

}
