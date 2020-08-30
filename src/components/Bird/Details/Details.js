import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Title from '../Title';
import Subtitle from '../Subtitle';
import Image from '../Image';
import Description from '../Description';
import Audio from '../Audio';
import './Details.scss';
import '../../../index.scss';
import birdsData from '../../../data/birds-data';

const Details = ({ selected, id, section }) => {
  const styleTip = {
    display: selected ? 'none' : 'block',
  };

  const tip = (
    <p
      className="instruction"
      style={styleTip}
    >
      <span>Listen songs.</span>
      <br />
      <span>Choose birds.</span>
    </p>
  );

  const elem = (
    <Container>
      <Row>
        <Col lg={4} md={4}>
          <Image
            image={birdsData[section][id].image}
            alt={birdsData[section][id].name}
          />
        </Col>
        <Col lg={8} md={8}>
          <Title title={birdsData[section][id].name} />
          <Subtitle subtitle={birdsData[section][id].species} />
          <Audio src={birdsData[section][id].audio} />
        </Col>
        <Col lg={12}>
          <Description text={birdsData[section][id].description} />
        </Col>
      </Row>
    </Container>
  );

  return (
    selected ? elem : tip
  );
};

export default Details;
