import { useState } from 'react';
//
import { Statistics } from 'components/feedback/statistics';
import { FeedbackOptions } from './feedbackOptions';
import { Section } from './section';
import { Notification } from './notification';
export const Feedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleIncrement = evt => {
    const name = evt.target.name;
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
  };

  const countTotalFeedback = good + neutral + bad;

  const countPositiveFeedbackPercentage = (good / countTotalFeedback) * 100;

  return (
    <Section title="Please leave feedback">
      <FeedbackOptions onLeaveFeedback={handleIncrement} />
      <>
        {!countTotalFeedback ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        )}
      </>
    </Section>
  );
};
