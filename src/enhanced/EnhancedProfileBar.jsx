import { useId } from 'react';
import { CalendarIcon, ChevronDownIcon, UsersIcon } from '../components/Icons';
import CelebrityAvatar from '../components/CelebrityAvatar';
import { demographics, fieldingDates } from '../data/enhancedDashboardData';
import ExportButton from './ExportButton';

export default function EnhancedProfileBar({ date, demographic, onDateChange, onDemographicChange }) {
  const dateId = useId();
  const demographicId = useId();
  return (
    <section className="enhanced-profile-bar" aria-label="Celebrity and report filters">
      <div className="celebrity-summary">
        <div className="celebrity-badge"><small>E-SCORE</small><strong>CELEBRITY</strong></div>
        <CelebrityAvatar />
        <div><h1>Brad Pitt</h1><p>Film Personality - Actor</p></div>
      </div>
      <label className="enhanced-filter" htmlFor={dateId}>
        <span>Fielding date</span>
        <span className="select-shell"><CalendarIcon /><select id={dateId} value={date} onChange={(event) => onDateChange(event.target.value)}>
          {fieldingDates.map((item) => <option value={item.value} key={item.value}>{item.label}</option>)}
        </select><ChevronDownIcon /></span>
      </label>
      <label className="enhanced-filter" htmlFor={demographicId}>
        <span>Filter by</span>
        <span className="select-shell"><UsersIcon /><select id={demographicId} value={demographic} onChange={(event) => onDemographicChange(event.target.value)}>
          {demographics.map((item) => <option value={item.value} key={item.value}>{item.label}</option>)}
        </select><ChevronDownIcon /></span>
      </label>
      <ExportButton />
    </section>
  );
}
