import React, { Component } from 'react';
import css from './App.module.css';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback = () =>
    this.state.good + this.state.neutral + this.state.bad;

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const positiveFeedback = this.state.good;

    return (positiveFeedback / total) * 100 || 0;
  };

  render() {
    const options = Object.keys(this.state);

    return (
      <div className={css.App}>
        <Section title={'Please leave feadback'} titleType={'h1'}>
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.handleClick}
          />
        </Section>

        {Boolean(this.countTotalFeedback()) ? (
          <Section title={'Statistics'} titleType={'h2'}>
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage().toFixed()}
            />
          </Section>
        ) : (
          <Notification message={'There is no messages yet'} />
        )}
      </div>
    );
  }
}
