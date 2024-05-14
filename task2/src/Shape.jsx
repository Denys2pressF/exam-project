import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

const Shape = ({ tfrColor = 'red', tfrType = 'circle' }) => {
    const shapeStyle = {
      backgroundColor: tfrColor,
    };
  
    return <div className={`shape ${tfrType}`} style={shapeStyle}></div>;
  };
  

Shape.propTypes = {
  tfrColor: PropTypes.string,
  tfrType: PropTypes.oneOf(['circle', 'star', 'square']),
};

export default Shape;
