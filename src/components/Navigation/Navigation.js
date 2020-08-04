import React, { Component } from 'react';
import './Navigation.scss';
import { Container, Row, Col } from 'react-bootstrap';

export default class Navigation extends Component {
  render() {
    return (
      <Container>
        <Row className="navbar">
          <Col className="active"> Разминка</Col>
          <Col>Воробьиные</Col>
          <Col>Лесные птицы</Col>
          <Col>Певчие птицы</Col>
          <Col>Хищьные птицы</Col>
          <Col>Морские птицы</Col>
        </Row>
      </Container>
    );
  }
}
