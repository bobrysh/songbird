import React from 'react';
import { Figure } from 'react-bootstrap';
import './Image.scss';

const Image = ({ image, alt }) => (
  <Figure className="bird-img">
    <Figure.Image width="200px" src={image} alt={alt} />
  </Figure>
);

Image.defaultProps = {
  alt: 'Bird image',
};

export default Image;
