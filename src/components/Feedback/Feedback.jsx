import PropTypes from 'prop-types';
import { Component } from 'react';
import styles from './Feedback.module.css';
import { Button } from 'components/button/Button.styled';
import { Title } from 'components/Card/Title.style';
import { Card } from 'components/Card/Card.styled';
import { Section } from 'components/button/SectionButton.styled';
import { CgSmileMouthOpen, CgSmileNeutral, CgSmileSad } from 'react-icons/cg';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
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

  leaveVote(name) {
    this.setState(prevState => {
      return {
        [name]: prevState[name] + 1,
      };
    });
  }

  render() {
    const { good, neutral, bad } = this.state;
    const countPositiveFeedbackPercentage =
      this.countPositiveFeedbackPercentage('good');
    const totalFeedback = this.countTotalFeedback();

    return (
      /*Голосування */
      <Card>
        <Title>Please leave feedback</Title>
        <Section>
          <Button onClick={() => this.leaveVote('good')}>
            Good <CgSmileMouthOpen />
          </Button>
          <Button onClick={() => this.leaveVote('neutral')}>
            Neutral <CgSmileNeutral />
          </Button>
          <Button onClick={() => this.leaveVote('bad')}>
            Bad <CgSmileSad />
          </Button>
        </Section>
        {/* Результат */}
        <div>
          <h3>Statistics</h3>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {totalFeedback}</p>
          <p>Positive feedback: {countPositiveFeedbackPercentage}%</p>
        </div>
      </Card>
    );
  }
}
