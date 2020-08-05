import React, { Component } from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import Logo from '../Logo';
import Navigation from '../Navigation';
import Quiz from '../Quiz';
import Answers from '../Answers';
import Details from '../Details';
import Button from '../Button';
import Score from '../Score';
import './App.scss';

export default class App extends Component {

  state = {
    score: 0,
  };

  render() {
    return (
      <>
        <Container className="headerContainer">
          <Row>
            <Col className="logo">
              <Logo />
            </Col>
            <Col className="score">
              <Score score={this.state.score}/>
            </Col>
          </Row>
        </Container>
        <Container className="mainContainer">
          <Row>
            <Navigation />
          </Row>
          <Row>
            <Quiz />
          </Row>
          <Row>
            <Col>
              <Answers />
            </Col>
            <Col>
              <Details />
            </Col>
          </Row>
          <Row>
            <Button />
          </Row>
        </Container>
      </>
    );
  }
}
