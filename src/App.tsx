import React from 'react';
import './App.css';
import BarChart from './BarChart/BarChart';

function App() {
  return (
    <BarChart
      divisions={10}
      minValue={0}
      maxValue={100}
      height="400px"
      dataPoints={[
        [{
          label: 'A',
          value: 60,
        },
        {
          label: 'B',
          value: 100,
        }],
        [{
          label: 'A',
          value: 82,
        },
        {
          label: 'B',
          value: 99,
        }]
      ]}
    />
    

  );
}

export default App;
