import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';
import { appealPieData } from '../../data/dashboardData';

export default function AppealPieChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie isAnimationActive={false} data={appealPieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius="62%"
          label={({ name, value }) => `${name}, ${value}%`} labelLine stroke="#8aa0bc" strokeWidth={1}>
          {appealPieData.map((item) => <Cell key={item.name} fill={item.color} />)}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}
