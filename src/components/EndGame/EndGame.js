import React, { Component } from 'react';
import './EndGame.scss';
import Button from '../generic/Button';

export default class EndGame extends Component {
  render() {
    const { endGame, score, action } = this.props;
    let winner = '';
    if (score === 30) {
      winner = 'Congratz !!!';
    } else if (score < 30 && score > 6) {
      winner = `Good job: ${score} points`;
    } else if (score < 7) {
      winner = `Try again: ${score} points \n😕`;
    }
    const Btn = (
      <Button
        label="Restart"
        endGame={endGame}
        action={action}
      />
    );
    const elem = endGame ? winner : null;
    const btn = endGame ? Btn : null;

    return (
      <div className="end-game">
        {elem}
        {btn}
      </div>
    );
  }
}
