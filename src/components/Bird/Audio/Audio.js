/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';

const Audio = ({ src }) => (
  <div className="audioplayer">
    <audio src={src} controls preload="auto" />
  </div>
);

export default Audio;
