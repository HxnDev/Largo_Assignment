import { useState } from 'react';
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { powerFactorsData } from '@/data/dashboardData';
import ChartTooltip from './ChartTooltip';

export default function PowerFactorsChart({ data = powerFactorsData, interactive = false }) {
  const [visible, setVisible] = useState({ celebrity: true, average: true });
  return (
    <div className="chart-with-legend">
      <div className="chart-plot">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 18, right: 12, left: -18, bottom: 35 }}>
            <CartesianGrid stroke="#e8ebef" strokeDasharray="2 3" vertical={false} />
            <XAxis dataKey="name" angle={-24} textAnchor="end" interval={0} tick={{ fontSize: 8 }} />
            <YAxis domain={[0, 60]} ticks={[0, 15, 30, 45, 60]} tick={{ fontSize: 10 }} />
            {interactive ? <Tooltip content={<ChartTooltip />} cursor={{ fill: '#f5f7fa' }} /> : null}
            {visible.celebrity ? <Bar isAnimationActive={false} dataKey="celebrity" name="Brad Pitt" fill="#c91b2c" radius={[2, 2, 0, 0]} label={{ position: 'top', fontSize: 7, formatter: (value) => `${value}%` }} /> : null}
            {visible.average ? <Bar isAnimationActive={false} dataKey="average" name="Actor average" fill="#cfd4da" radius={[2, 2, 0, 0]} /> : null}
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className={`custom-legend ${interactive ? 'interactive' : ''}`}>
        {interactive ? <>
          <button className={visible.celebrity ? '' : 'muted'} type="button" onClick={() => setVisible((current) => ({ ...current, celebrity: !current.celebrity }))}>Brad Pitt</button>
          <button className={`average ${visible.average ? '' : 'muted'}`} type="button" onClick={() => setVisible((current) => ({ ...current, average: !current.average }))}>Film Personality - Actor Avg.</button>
        </> : <><span>Brad Pitt</span><span className="average">Film Personality - Actor Avg.</span></>}
      </div>
    </div>
  );
}
