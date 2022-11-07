import { React, useEffect, useState } from 'react';
import { Section } from 'components/Section/Section';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';
import Container from './App.styled';



const App = () => {
 const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
 const [positive, setPositive] = useState(0);
  const feedback = ['good', 'neutral', 'bad'];

  const onFeedbackIncrement = name => {
    switch (name) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
}
  
  useEffect(() => {
    const countTotalFeedback = good + neutral + bad;
    setTotal(countTotalFeedback);
    setPositive(Math.ceil((good / countTotalFeedback) * 100));
  }, [bad, good, neutral]);


    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={feedback}
            onLeaveFeedback={onFeedbackIncrement}
          />
        </Section>
        <Section title="Statistics">
          {total === 0 ? ( 
          <Notification message="There is no feedback" />
               ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positive}
            /> 
          )}
        </Section>
      </Container>
    );
  }

export default App;
