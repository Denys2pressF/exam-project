import React from 'react';
import ShapesLine from './ShapesLine';
import './App.css';

const App = () => {
  const shapes = [
    { tfrColor: 'red', tfrType: 'circle' },
    { tfrColor: 'blue', tfrType: 'star' },
    { tfrColor: 'yellow', tfrType: 'triangle' }
  ];

  return (
    <div className="app">
      <h1>Horizontal Shapes Line</h1>
      <ShapesLine shapes={shapes} direction="horizontal" />
      
      <h1>Vertical Shapes Line</h1>
      <ShapesLine shapes={shapes} direction="vertical" />
    </div>
  );
};


export default App;
