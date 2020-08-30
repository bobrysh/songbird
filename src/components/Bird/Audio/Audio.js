import React from 'react';

const Audio = ({ src }) => (
  <div className="audioplayer ml-2">
    {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
    <audio src={src} controls preload="auto" />
  </div>
);

export default Audio;
