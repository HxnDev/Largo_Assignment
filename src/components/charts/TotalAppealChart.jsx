import { useState } from 'react';
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { appealData } from '../../data/dashboardData';
import ChartTooltip from './ChartTooltip';

function CategoryTick({ x, y, payload, data }) {
  const item = data[payload.index];
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

function AppealLegend({ interactive, visible, onToggle }) {
  const items = [['total', 'Total'], ['name', 'Name'], ['face', 'Face']];
  return (
    <div className={`custom-legend ${interactive ? 'interactive' : ''}`}>
      {items.map(([key, label]) => interactive ? (
        <button className={`${key} ${visible[key] ? '' : 'muted'}`} type="button" key={key} onClick={() => onToggle(key)}>{label}</button>
      ) : <span className={key} key={key}>{label}</span>)}
    </div>
  );
}

export default function TotalAppealChart({ data = appealData, interactive = false }) {
  const [visible, setVisible] = useState({ total: true, name: true, face: true });
  const toggle = (key) => setVisible((current) => ({ ...current, [key]: !current[key] }));
  return (
    <div className="chart-with-legend">
      <div className="chart-plot">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 18, right: 16, left: -16, bottom: 35 }}>
            <CartesianGrid stroke="#e8ebef" strokeDasharray="2 3" vertical={false} />
            <XAxis dataKey="name" tick={<CategoryTick data={data} />} interval={0} />
            <YAxis domain={[0, 100]} ticks={[0, 25, 50, 75, 100]} tick={{ fontSize: 10 }} />
            {interactive ? <Tooltip content={<ChartTooltip />} cursor={{ fill: '#f5f7fa' }} /> : null}
            {visible.total ? <Bar isAnimationActive={false} dataKey="total" name="Total" fill="#c91b2c" radius={[2, 2, 0, 0]} label={{ position: 'top', fontSize: 8, formatter: (value) => `${value}%` }} /> : null}
            {visible.name ? <Bar isAnimationActive={false} dataKey="nameScore" name="Name" fill="#e46d78" radius={[2, 2, 0, 0]} label={{ position: 'top', fontSize: 8, formatter: (value) => `${value}%` }} /> : null}
            {visible.face ? <Bar isAnimationActive={false} dataKey="face" name="Face" fill="#efadb5" radius={[2, 2, 0, 0]} label={{ position: 'top', fontSize: 8, formatter: (value) => `${value}%` }} /> : null}
          </BarChart>
        </ResponsiveContainer>
      </div>
      <AppealLegend interactive={interactive} visible={visible} onToggle={toggle} />
    </div>
  );
}
