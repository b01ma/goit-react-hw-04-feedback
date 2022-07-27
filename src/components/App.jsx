import React, { useState } from 'react';
import css from './App.module.css';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = {
    good,
    neutral,
    bad,
  };

  const handleClick = option => {
    switch (option) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        console.log('defualt from switch');
    }
  };

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    const positiveFeedback = good;

    return (positiveFeedback / total) * 100 || 0;
  };

  return (
    <div className={css.App}>
      <Section title="Please leave feadback" titleType="h1">
        <FeedbackOptions
          options={Object.keys(options)}
          onLeaveFeedback={handleClick}
        />
      </Section>

      {Boolean(countTotalFeedback()) ? (
        <Section title="Statistics" titleType="h2">
          <Statistics
            good={options.good}
            neutral={options.neutral}
            bad={options.bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage().toFixed()}
          />
        </Section>
      ) : (
        <Notification message="There is no feedback yet" />
      )}
    </div>
  );
};
