import React from 'react';

const Icon = ({ className, width, height, name }) => (
  <svg width={width} height={height} className={className}>
    <use href={`#${name}`} />
  </svg>
);

export default Icon;