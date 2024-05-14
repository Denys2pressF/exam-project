import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

const StatsBar = ({ clickStats, toggleDirection, currentDirection }) => {
  return (
    <div className="stats-bar">
      <button onClick={toggleDirection}>
        Toggle to {currentDirection === 'horizontal' ? 'Vertical' : 'Horizontal'}
      </button>
      <div className="click-stats">
        {Object.entries(clickStats).map(([shape, clicks], index) => (
          <div key={index}>
            {shape}: {clicks}
          </div>
        ))}
      </div>
    </div>
  );
};

StatsBar.propTypes = {
  clickStats: PropTypes.object.isRequired,
  toggleDirection: PropTypes.func.isRequired,
  currentDirection: PropTypes.string.isRequired,
};

export default StatsBar;
