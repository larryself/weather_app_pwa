import React from 'react';

const Icon = ({className, width, height, name}) => {
    return (
        <svg width={width} height={height} className={className}>
            <use href={`#${name}`}></use>
        </svg>
    );
};

export default Icon;