import { Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { powerFactorsData } from '../../data/dashboardData';

export default function PowerFactorsChart() {
  return (
    <div className="chart-with-legend">
      <div className="chart-plot">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={powerFactorsData} margin={{ top: 18, right: 12, left: -18, bottom: 35 }}>
            <CartesianGrid stroke="#e8ebef" strokeDasharray="2 3" vertical={false} />
            <XAxis dataKey="name" angle={-24} textAnchor="end" interval={0} tick={{ fontSize: 8 }} />
            <YAxis domain={[0, 60]} ticks={[0, 15, 30, 45, 60]} tick={{ fontSize: 10 }} />
            <Bar isAnimationActive={false} dataKey="celebrity" fill="#c91b2c" radius={[2, 2, 0, 0]} label={{ position: 'top', fontSize: 7, formatter: (value) => `${value}%` }} />
            <Bar isAnimationActive={false} dataKey="average" fill="#cfd4da" radius={[2, 2, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="custom-legend"><span>Brad Pitt</span><span className="average">Film Personality - Actor Avg.</span></div>
    </div>
  );
}
