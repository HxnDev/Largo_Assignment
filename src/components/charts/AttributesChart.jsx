import { Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { attributeData } from '../../data/dashboardData';

export default function AttributesChart({ demographic }) {
  const opacity = (series) => demographic === 'total' || demographic === series ? 1 : 0.45;
  return (
    <div className="chart-with-legend">
      <div className="chart-plot">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={attributeData} margin={{ top: 18, right: 10, left: -18, bottom: 44 }}>
            <CartesianGrid stroke="#e8ebef" strokeDasharray="2 3" vertical={false} />
            <XAxis dataKey="name" angle={-38} textAnchor="end" interval={0} tick={{ fontSize: 8 }} />
            <YAxis domain={[0, 60]} ticks={[0, 15, 30, 45, 60]} tick={{ fontSize: 10 }} />
            <Bar isAnimationActive={false} dataKey="total" fill="#c91b2c" fillOpacity={opacity('total')} label={{ position: 'top', fontSize: 7 }} />
            <Bar isAnimationActive={false} dataKey="male" fill="#4e83bd" fillOpacity={opacity('male')} />
            <Bar isAnimationActive={false} dataKey="female" fill="#eaa3cf" fillOpacity={opacity('female')} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="custom-legend"><span className="total">Total</span><span className="male">Male</span><span className="female">Female</span></div>
    </div>
  );
}
