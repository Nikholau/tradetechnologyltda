import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import { useUserContext } from '../../../../hooks/UserContext';

export interface IGoal {
  minute: string;
  total: number | null;
  percentage: string | null;
}

const GoalsChart: React.FC = () => {
  const { goals } = useUserContext();

  return (
    <div>
      <h2>Gráfico de Gols Marcados</h2>
      <BarChart width={400} height={300} data={goals}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="minute" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="total" fill="#800080" />
      </BarChart>
    </div>
  );
};

export default GoalsChart;
