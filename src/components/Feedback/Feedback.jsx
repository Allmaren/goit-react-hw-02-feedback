import { Component } from 'react';
import Vote from './Vote/Vote';
import Results from './Results/Results';
import VoteBlock from './Block/VoteBlock';
import Notification from './Notification/Notification';
import { Card } from './Block/Card.js';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveVote = name => {
    this.setState(prevState => {
      return {
        [name]: prevState[name] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage(propName) {
    const total = this.countTotalFeedback();
    if (!total) {
      return 0;
    }
    const value = this.state[propName];
    const result = ((value / total) * 100).toFixed(0);
    return Number(result);
  }

  render() {
    const { good, neutral, bad } = this.state;
    const countPositiveFeedbackPercentage =
      this.countPositiveFeedbackPercentage('good');
    const totalFeedback = this.countTotalFeedback();

    return (
      <Card>
        <VoteBlock title="Please leave feedback">
          <Vote
            leaveVote={this.leaveVote}
            options={Object.keys({ good, neutral, bad })}
          />
        </VoteBlock>
        <VoteBlock title="Statistics" />
        {totalFeedback ? (
          <Results
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        ) : (
          <Notification tittle={'There is no feedback'} />
        )}
      </Card>
    );
  }
}
