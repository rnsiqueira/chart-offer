'use client'
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { faker } from '@faker-js/faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);


const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      fill: false,
      label: 'Dados fake',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 8000 })),
      borderColor: 'rgb(222, 220, 93)',
      backgroundColor: 'rgb(222, 220, 93)',
    },
    {
      fill: false,
      label: 'Dados fake 2',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 4000 })),
      borderColor: 'rgb(93, 222, 114)',
      backgroundColor: 'rgb(93, 222, 114)',
    },
  ],
};

export default function LineChart() {
  return <Line
   data={data}
  />;
}