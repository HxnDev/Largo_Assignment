import { useId } from 'react';

export default function ProfileBar({ fieldingDate, demographic, onDateChange, onDemographicChange }) {
  const dateId = useId();
  const filterId = useId();
  return (
    <section className="profile-bar" aria-label="Celebrity and report filters">
      <div className="celebrity-summary">
        <div className="celebrity-badge"><small>E-SCORE</small><strong>CELEBRITY</strong></div>
        <div className="celebrity-avatar" role="img" aria-label="Brad Pitt portrait"><span>BP</span></div>
        <div><h1>Brad Pitt</h1><p>Film Personality - Actor</p></div>
      </div>
      <div className="filter-group">
        <label htmlFor={dateId}>Fielding date:</label>
        <select id={dateId} value={fieldingDate} onChange={(event) => onDateChange(event.target.value)}>
          <option>July 25, 2025</option><option>January 24, 2025</option>
        </select>
      </div>
      <div className="filter-group">
        <label htmlFor={filterId}>Filter by:</label>
        <select id={filterId} value={demographic} onChange={(event) => onDemographicChange(event.target.value)}>
          <option value="total">Total</option><option value="male">Total males</option><option value="female">Total females</option>
        </select>
      </div>
      <button className="export-button" type="button">Export</button>
    </section>
  );
}
