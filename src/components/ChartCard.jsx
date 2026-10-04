import { MaximizeIcon, MoreIcon } from './Icons';

export default function ChartCard({ title, subtitle, children }) {
  return (
    <article className="chart-card">
      <header className="chart-card-header">
        <div><h2>{title}</h2>{subtitle ? <p>{subtitle}</p> : null}</div>
        <div className="chart-actions" aria-hidden="true">
          <span><MoreIcon /></span><span><MaximizeIcon /></span>
        </div>
      </header>
      <div className="chart-content">{children}</div>
    </article>
  );
}
