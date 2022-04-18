import React from 'react';
import './Chart.css';
import ChartBar from './ChartBar';

export default function Chart({ dataPoints }) {
  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          max={null}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}
