import React from 'react';
import { PieChart, PieArcSeries, PieArcLabel } from '@mui/x-charts';

const data = [
  { id: 0, value: 8, label: 'placed' },
  { id: 1, value: 2, label: 'Unplaced' },
  // { id: 2, value: 20, label: 'series C' },
];

export default function StaticsticStudent() {
  return (
    <PieChart
    colors={['#5c6bc0','pink']} 
      series={[
        {
          data,
          highlightScope: { faded: 'global', highlighted: 'item' },
          faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
        },
      ]}
      height={200}
    />
  );
}