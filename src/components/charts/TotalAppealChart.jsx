import { Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { appealData } from '../../data/dashboardData';

function CategoryTick({ x, y, payload }) {
  const item = appealData[payload.index];
  const parts = item.detail.slice(1, -1).split(' / ');
  const firstDetailLine = parts.length > 2 ? `(${parts.slice(0, 2).join(' / ')} /` : item.detail;
  const secondDetailLine = parts.length > 2 ? `${parts.slice(2).join(' / ')})` : null;
  return (
    <g transform={`translate(${x},${y})`}>
      <text textAnchor="middle" fill="#687386" fontSize="8.5">
        <tspan x="0" dy="13">{item.name}</tspan>
        <tspan x="0" dy="11">{firstDetailLine}</tspan>
        {secondDetailLine ? <tspan x="0" dy="11">{secondDetailLine}</tspan> : null}
      </text>
    </g>
  );
}

function AppealLegend() {
  return <div className="custom-legend"><span className="total">Total</span><span className="name">Name</span><span className="face">Face</span></div>;
}

export default function TotalAppealChart() {
  return (
    <div className="chart-with-legend">
      <div className="chart-plot">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={appealData} margin={{ top: 18, right: 16, left: -16, bottom: 35 }}>
            <CartesianGrid stroke="#e8ebef" strokeDasharray="2 3" vertical={false} />
            <XAxis dataKey="name" tick={<CategoryTick />} interval={0} />
            <YAxis domain={[0, 100]} ticks={[0, 25, 50, 75, 100]} tick={{ fontSize: 10 }} />
            <Bar isAnimationActive={false} dataKey="total" fill="#c91b2c" radius={[2, 2, 0, 0]} label={{ position: 'top', fontSize: 8, formatter: (value) => `${value}%` }} />
            <Bar isAnimationActive={false} dataKey="nameScore" fill="#e46d78" radius={[2, 2, 0, 0]} label={{ position: 'top', fontSize: 8, formatter: (value) => `${value}%` }} />
            <Bar isAnimationActive={false} dataKey="face" fill="#efadb5" radius={[2, 2, 0, 0]} label={{ position: 'top', fontSize: 8, formatter: (value) => `${value}%` }} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <AppealLegend />
    </div>
  );
}
