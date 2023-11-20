'use client'
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  BarController,
} from 'chart.js';
import { faker } from '@faker-js/faker';

ChartJS.register(
    BarElement,
    BarController,
  );


  export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'left',
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart',
      },
    },
  };

  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'Dados fake',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 15000 })),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
    {
      fill: true,
      label: 'Dados fake1',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 12000 })),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export default function BarChart() {
    return <Bar data={data} />;
}