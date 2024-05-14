import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './App.css';

const Shape = ({ tfrColor = 'red', tfrType = 'circle', onClick }) => {
  const [clicks, setClicks] = useState(0);

  const shapeStyle = {
    backgroundColor: tfrColor,
  };

  const handleClick = () => {
    const newClicks = clicks + 1;
    setClicks(newClicks);
    onClick(`${tfrColor} ${tfrType}`, newClicks);
  };

  return (
    <div className={`shape ${tfrType}`} style={shapeStyle} onClick={handleClick}>
      <span className="clicks">{clicks}</span>
    </div>
  );
};

Shape.propTypes = {
  tfrColor: PropTypes.string,
  tfrType: PropTypes.oneOf(['circle', 'square', 'star', 'triangle']),
  onClick: PropTypes.func.isRequired,
};

export default Shape;
