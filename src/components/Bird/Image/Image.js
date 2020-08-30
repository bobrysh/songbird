import React from 'react';
import { Figure } from 'react-bootstrap';
import './Image.scss';

const Image = ({ image, alt }) => (
  <Figure className="bird-img">
    <Figure.Image width="200px" src={image} alt={alt}>
    </Figure.Image>
  </Figure>
);

export default Image;
