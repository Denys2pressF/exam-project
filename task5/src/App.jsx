import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import ErrorPage from './Pages/ErrorPage';
import ShapesLine from './ShapesLine';
import StatsBar from './StatsBar';
import Header from './Header';
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
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route 
            path="/horizontal" 
            element={
              <>
                <StatsBar clickStats={clickStats} toggleDirection={toggleDirection} />
                <ShapesLine shapes={shapes} direction="horizontal" onShapeClick={handleShapeClick} />
              </>
            } 
          />
          <Route 
            path="/vertical" 
            element={
              <>
                <StatsBar clickStats={clickStats} toggleDirection={toggleDirection} />
                <ShapesLine shapes={shapes} direction="vertical" onShapeClick={handleShapeClick} />
              </>
            } 
          />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
