import React from 'react';
import { Section } from 'components/Section/Section';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';
import Container from './App.styled';

 class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

   onFeedbackIncrement = target => {
      this.setState(prevState => {
      return { [target]: prevState[target] + 1 };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + bad + neutral;
  };

  countPositiveFeedbackPercentage = () => {
    let totalFeedback = this.countTotalFeedback();
    const { good } = this.state;
    return Math.round((good * 100) / totalFeedback);
   };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedbackCount = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage();

    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onFeedbackIncrement}
          />
        </Section>
        <Section title="Statistics">
          {totalFeedbackCount > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedbackCount}
              positivePercentage={positiveFeedback}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </Container>
    );
  };
}

export default App;
