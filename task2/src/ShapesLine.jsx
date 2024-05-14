import React from 'react';
import Shape from './Shape';
import PropTypes from 'prop-types';
import './App.css';

const ShapesLine = ({ shapes, direction = 'horizontal' }) => {
  const lineStyle = {
    display: 'flex',
    flexDirection: direction === 'horizontal' ? 'row' : 'column',
    gap: '10px',
    justifyContent: 'center', 
    alignItems: 'center', 
  };

  return (
    <div className="shapes-line" style={lineStyle}>
      {shapes.map((shape, index) => (
        <Shape key={index} tfrColor={shape.tfrColor} tfrType={shape.tfrType} />
      ))}
    </div>
  );
};

ShapesLine.propTypes = {
  shapes: PropTypes.arrayOf(
    PropTypes.shape({
      tfrColor: PropTypes.string,
      tfrType: PropTypes.oneOf(['circle', 'square', 'star', 'triangle']),
    })
  ).isRequired,
  direction: PropTypes.oneOf(['horizontal', 'vertical']),
};

export default ShapesLine;
