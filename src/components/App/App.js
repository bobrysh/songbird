import React, { Component } from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import Logo from '../Logo';
import Navigation from '../Navigation';
import './App.scss';

export default class App extends Component {
  render() {
    return (
      <>
        <Container className="headerContainer">
          <Row>
            <Col className="logo">
              <Logo />
            </Col>
            <Col className="score">
              15
            </Col>
          </Row>
        </Container>
        <Container className="mainContainer">
          <Row>
            <Navigation />
          </Row>
        </Container>
      </>
    );
  }
}
