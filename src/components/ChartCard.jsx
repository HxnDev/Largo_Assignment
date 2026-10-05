import { MaximizeIcon, MoreIcon } from './Icons';

export default function ChartCard({ title, subtitle, children, onMaximize }) {
  return (
    <article className="chart-card">
      <header className="chart-card-header">
        <div><h2>{title}</h2>{subtitle ? <p>{subtitle}</p> : null}</div>
        <div className="chart-actions">
          <span aria-hidden="true"><MoreIcon /></span>
          {onMaximize ? (
            <button type="button" onClick={onMaximize} aria-label={`Expand ${title}`}><MaximizeIcon /></button>
          ) : <span aria-hidden="true"><MaximizeIcon /></span>}
        </div>
      </header>
      <div className="chart-content">{children}</div>
    </article>
  );
}
