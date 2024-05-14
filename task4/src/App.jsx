import React, { useState } from 'react';
import ShapesLine from './ShapesLine';
import StatsBar from './StatsBar';
import './App.css';

const App = () => {
  const [direction, setDirection] = useState('horizontal');
  const [clickStats, setClickStats] = useState({
    'red circle': 0,
    'blue star': 0,
    'yellow square': 0,
  });

  const toggleDirection = () => {
    setDirection(direction === 'horizontal' ? 'vertical' : 'horizontal');
  };

  const handleShapeClick = (shape, clicks) => {
    setClickStats(prevStats => ({
      ...prevStats,
      [shape]: clicks,
    }));
  };

  const shapes = [
    { tfrColor: 'red', tfrType: 'circle' },
    { tfrColor: 'blue', tfrType: 'star' },
    { tfrColor: 'yellow', tfrType: 'square' },
  ];

  return (
    <div className="app">
      <StatsBar clickStats={clickStats} toggleDirection={toggleDirection} />
      <h1>{direction === 'horizontal' ? 'Horizontal Shapes Line' : 'Vertical Shapes Line'}</h1>
      <ShapesLine shapes={shapes} direction={direction} onShapeClick={handleShapeClick} />
    </div>
  );
};

export default App;
