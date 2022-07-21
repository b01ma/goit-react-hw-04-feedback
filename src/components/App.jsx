import React, { useState } from 'react';
import css from './App.module.css';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

export const App = () => {
  const options = ['good', 'neutral', 'bad'];

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

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
      <Section title={'Please leave feadback'} titleType={'h1'}>
        <FeedbackOptions options={options} onLeaveFeedback={handleClick} />
      </Section>

      {Boolean(countTotalFeedback()) ? (
        <Section title={'Statistics'} titleType={'h2'}>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage().toFixed()}
          />
        </Section>
      ) : (
        <Notification message={'There is no feedback yet'} />
      )}
    </div>
  );
};

// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   handleClick = option => {
//     this.setState(prevState => ({
//       [option]: prevState[option] + 1,
//     }));
//   };

//   countTotalFeedback = () =>
//     this.state.good + this.state.neutral + this.state.bad;

//   countPositiveFeedbackPercentage = () => {
//     const total = this.countTotalFeedback();
//     const positiveFeedback = this.state.good;

//     return (positiveFeedback / total) * 100 || 0;
//   };

//   render() {
//     const options = Object.keys(this.state);

//     return (
//       <div className={css.App}>
//         <Section title={'Please leave feadback'} titleType={'h1'}>
//           <FeedbackOptions
//             options={options}
//             onLeaveFeedback={this.handleClick}
//           />
//         </Section>

//         {Boolean(this.countTotalFeedback()) ? (
//           <Section title={'Statistics'} titleType={'h2'}>
//             <Statistics
//               good={this.state.good}
//               neutral={this.state.neutral}
//               bad={this.state.bad}
//               total={this.countTotalFeedback()}
//               positivePercentage={this.countPositiveFeedbackPercentage().toFixed()}
//             />
//           </Section>
//         ) : (
//           <Notification message={'There is no messages yet'} />
//         )}
//       </div>
//     );
//   }
// }
