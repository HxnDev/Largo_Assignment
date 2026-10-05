import { useState } from 'react';
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { attributeData } from '../../data/dashboardData';
import ChartTooltip from './ChartTooltip';

export default function AttributesChart({ demographic, data = attributeData, interactive = false }) {
  const [visible, setVisible] = useState({ total: true, male: true, female: true });
  const opacity = (series) => demographic === 'total' || demographic === series ? 1 : 0.45;
  return (
    <div className="chart-with-legend">
      <div className="chart-plot">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 18, right: 10, left: -18, bottom: 44 }}>
            <CartesianGrid stroke="#e8ebef" strokeDasharray="2 3" vertical={false} />
            <XAxis dataKey="name" angle={-38} textAnchor="end" interval={0} tick={{ fontSize: 8 }} />
            <YAxis domain={[0, 60]} ticks={[0, 15, 30, 45, 60]} tick={{ fontSize: 10 }} />
            {interactive ? <Tooltip content={<ChartTooltip />} cursor={{ fill: '#f5f7fa' }} /> : null}
            {visible.total ? <Bar isAnimationActive={false} dataKey="total" name="Total" fill="#c91b2c" fillOpacity={opacity('total')} label={{ position: 'top', fontSize: 7 }} /> : null}
            {visible.male ? <Bar isAnimationActive={false} dataKey="male" name="Male" fill="#4e83bd" fillOpacity={opacity('male')} /> : null}
            {visible.female ? <Bar isAnimationActive={false} dataKey="female" name="Female" fill="#eaa3cf" fillOpacity={opacity('female')} /> : null}
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className={`custom-legend ${interactive ? 'interactive' : ''}`}>
        {['total', 'male', 'female'].map((key) => interactive ? (
          <button className={`${key} ${visible[key] ? '' : 'muted'}`} type="button" key={key}
            onClick={() => setVisible((current) => ({ ...current, [key]: !current[key] }))}>
            {key[0].toUpperCase() + key.slice(1)}
          </button>
        ) : <span className={key} key={key}>{key[0].toUpperCase() + key.slice(1)}</span>)}
      </div>
    </div>
  );
}
