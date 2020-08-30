import React, { Component } from 'react';
import './Navbar.scss';
import { Container, Row, Col } from 'react-bootstrap';


export default class NavBar extends Component {
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
          <Col className="section active">Разминка</Col>
          <Col className="section">Воробьи</Col>
          <Col className="section">Лесные птицы</Col>
          <Col className="section">Певчие птицы</Col>
          <Col className="section">Хищные птицы</Col>
          <Col className="section">Морские птицы</Col>
        </Row>
      </Container>
    );
  }
}