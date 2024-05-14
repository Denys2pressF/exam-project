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
    setDirection(prevDirection => prevDirection === 'horizontal' ? 'vertical' : 'horizontal');
  };

  const handleShapeClick = (shape) => {
    setClickStats(prevStats => ({
      ...prevStats,
      [shape]: (prevStats[shape] || 0) + 1,
    }));
  };

  const shapes = [
    { tfrColor: 'red', tfrType: 'circle' },
    { tfrColor: 'blue', tfrType: 'star' },
    { tfrColor: 'yellow', tfrType: 'square' },
  ];

  return (
    <div className="app">
      <StatsBar 
        clickStats={clickStats} 
        toggleDirection={toggleDirection} 
        currentDirection={direction}
      />
      <h1>{direction === 'horizontal' ? 'Horizontal Shapes Line' : 'Vertical Shapes Line'}</h1>
      <ShapesLine 
        shapes={shapes} 
        direction={direction} 
        onShapeClick={handleShapeClick} 
      />
    </div>
  );
};

export default App;
