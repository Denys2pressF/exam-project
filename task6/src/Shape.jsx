import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import './App.css';

const Shape = ({ tfrColor, tfrType, onShapeClick }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    onShapeClick();
    setTimeout(() => setIsClicked(false), 1000);  // Вимикаємо анімацію через 1 секунду
  };

  const variants = {
    clicked: { opacity: [1, 0.5, 1], scale: [1, 1.2, 1] },
    default: { opacity: 1, scale: 1 }
  };

  const shapeStyle = {
    backgroundColor: tfrColor,
  };

  return (
    <motion.div
      className={`shape ${tfrType}`}
      style={shapeStyle}
      animate={isClicked ? 'clicked' : 'default'}
      variants={variants}
      transition={{ duration: 0.5, repeat: 1 }}
      onClick={handleClick}
    />
  );
};

Shape.propTypes = {
  tfrColor: PropTypes.string.isRequired,
  tfrType: PropTypes.oneOf(['circle', 'square', 'star']).isRequired,
  onShapeClick: PropTypes.func.isRequired,
};

export default Shape;
