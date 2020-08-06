import React, { Component } from 'react';
import './EndGame.scss';
import Button from '../Button';

export default class EndGame extends Component {
  render() {
    const { endGame, score, action } = this.props;
    let winner = '';
    if (score === 30) {
      winner = 'Отличная работа!';
    } else if (score < 30 && score > 6) {
      winner = `Победа, вы набрали ${score} очков из 30! 💪`;
    } else if (score < 7) {
      winner = `Ничего страшного, ваш результат : ${score} очков из 30 \n😕`;
    }
    const Btn = (
      <Button
        label="Начать новую игру"
        endGame={endGame}
        action={action}
      />
    );
    const btn = endGame ? Btn : null;
    const elem = endGame ? winner : null;

    return (
      <div className="end-game">
        {elem}
        {btn}
      </div>
    );
  }
}
