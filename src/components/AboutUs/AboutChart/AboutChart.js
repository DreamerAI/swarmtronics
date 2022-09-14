import React from 'react';
import './AboutChart.css';
import robotsData from './robotsData';

import { Line as ChartJS } from 'chart.js/auto';
import { Line } from 'react-chartjs-2';

const data = {
  labels: ['PWM 10%', '20%', '30%', '40%', '50%'],
  datasets: robotsData,
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      beginAtZero: true,
    },
  },
  tooltips: {
    bodyColor: '#ffffff',
    bodySpacing: 4,
    xPadding: 12,
    mode: 'index',
    intersect: 0,

    footerColor: '#ffffff',
  },
  plugins: {
    legend: {
      labels: {
        color: 'white',
        font: {
          family: 'Webnar', // Add your font here to change the font of your legend label
        },
      },
    },
  },
};

function AboutChart() {
  return (
    <div className="about--chart">
      <Line data={data} options={options} />
    </div>
  );
}

export default AboutChart;
