import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import { appealPieData } from '../../data/dashboardData';
import ChartTooltip from './ChartTooltip';

export default function AppealPieChart({ data = appealPieData, interactive = false }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie isAnimationActive={false} data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius="62%"
          label={({ name, value }) => `${name}, ${value}%`} labelLine stroke="#8aa0bc" strokeWidth={1}>
          {data.map((item) => <Cell key={item.name} fill={item.color} />)}
        </Pie>
        {interactive ? <Tooltip content={<ChartTooltip label="Appeal" />} /> : null}
      </PieChart>
    </ResponsiveContainer>
  );
}
