import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

const StatsBar = ({ clickStats, toggleDirection }) => {
  return (
    <div className="stats-bar">
      <button onClick={toggleDirection}>Toggle Direction</button>
      <div className="stats">
        {Object.entries(clickStats).map(([shape, count]) => (
          <div key={shape}>
            {shape} - {count}
          </div>
        ))}
      </div>
    </div>
  );
};

StatsBar.propTypes = {
  clickStats: PropTypes.object.isRequired,
  toggleDirection: PropTypes.func.isRequired,
};

export default StatsBar;
