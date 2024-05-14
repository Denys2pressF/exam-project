import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './App.css';

const Shape = ({ tfrColor = 'red', tfrType = 'circle' }) => {
  const [clicks, setClicks] = useState(0);

  const shapeStyle = {
    backgroundColor: tfrColor,
  };

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <div className={`shape ${tfrType}`} style={shapeStyle} onClick={handleClick}>
      <span className="clicks">{clicks}</span>
    </div>
  );
};

Shape.propTypes = {
  tfrColor: PropTypes.string,
  tfrType: PropTypes.oneOf(['circle', 'star', 'square']),
};

export default Shape;
