import React from 'react';
import PropTypes from 'prop-types';
import Shape from './Shape';
import './App.css';

const ShapesLine = ({ shapes, direction, onShapeClick }) => {
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
        <Shape 
          key={index} 
          tfrColor={shape.tfrColor} 
          tfrType={shape.tfrType} 
          onShapeClick={() => onShapeClick(`${shape.tfrColor} ${shape.tfrType}`)} 
        />
      ))}
    </div>
  );
};

ShapesLine.propTypes = {
  shapes: PropTypes.arrayOf(
    PropTypes.shape({
      tfrColor: PropTypes.string,
      tfrType: PropTypes.oneOf(['circle', 'square', 'star']),
    })
  ).isRequired,
  direction: PropTypes.oneOf(['horizontal', 'vertical']).isRequired,
  onShapeClick: PropTypes.func.isRequired,
};

export default ShapesLine;
