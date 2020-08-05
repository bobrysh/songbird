import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Details.scss';
import birdsData from '../../data/birds-data';

const Details = ({ selected, id, section }) => {
  const tip = (
    <p
      className="instruction"
    >
      <span>Послушайте плеер.</span>
      <span>Выберите птицу из списка</span>
    </p>
  );

  const elem = (
    <Container>
      <Row>
        <Col />
        <Col />
        <Col />
      </Row>
    </Container>
  );

  return (
    selected ? elem : tip
  );
};

export default Details;
