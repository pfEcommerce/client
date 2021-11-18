import React from 'react';
import { Line , Bar } from 'react-chartjs-2';
import theme from '../../styles/theme';
import orderData from '../functions';


const LineChart = ({ state }) => {

  const result = orderData(state,'money')

  const data = {

    labels: result.months,
    datasets: [
      {
        label: 'Ventas en este mes',
        data: result.sales,
        fill: true,
        backgroundColor: `${theme.colors.terGreen}`,
        borderColor: `${theme.colors.mainGreen}`,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  return (
    <div>
      <Line data={data} options={options} />
    </div>
  )

};

export default LineChart;