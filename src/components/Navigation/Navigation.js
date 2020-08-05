import React, { Component } from 'react';
import './Navigation.scss';
import { Container, Row, Col } from 'react-bootstrap';

export default class Navigation extends Component {
  componentDidUpdate() {
    const sections = document.querySelectorAll('.section');
    const { section } = this.props;
    sections.forEach((el, index) => {
      el.classList.remove('active');
      if (index === section) {
        el.classList.add('active');
      }
    });
  }

  render() {
    return (
      <Container>
        <Row className="navbar">
          <Col className="active section"> Разминка</Col>
          <Col className="section">Воробьиные</Col>
          <Col className="section">Лесные птицы</Col>
          <Col className="section">Певчие птицы</Col>
          <Col className="section">Хищьные птицы</Col>
          <Col className="section">Морские птицы</Col>
        </Row>
      </Container>
    );
  }
}
