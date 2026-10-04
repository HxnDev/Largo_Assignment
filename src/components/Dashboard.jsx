import { useState } from 'react';
import { newsItems } from '../data/dashboardData';
import AppHeader from './AppHeader';
import AwarenessCard from './AwarenessCard';
import ChartCard from './ChartCard';
import DashboardTabs from './DashboardTabs';
import NewsCard from './NewsCard';
import { GridIcon } from './Icons';
import ProfileBar from './ProfileBar';
import ScoreCard from './ScoreCard';
import AppealPieChart from './charts/AppealPieChart';
import AttributesChart from './charts/AttributesChart';
import PowerFactorsChart from './charts/PowerFactorsChart';
import TotalAppealChart from './charts/TotalAppealChart';

export default function Dashboard() {
  const [fieldingDate, setFieldingDate] = useState('July 25, 2025');
  const [demographic, setDemographic] = useState('male');
  return (
    <div className="app">
      <AppHeader />
      <main className="dashboard-container" id="main">
        <ProfileBar fieldingDate={fieldingDate} demographic={demographic}
          onDateChange={setFieldingDate} onDemographicChange={setDemographic} />
        <DashboardTabs />
        <div className="view-controls" aria-label="Display controls">
          <button className="subscription-button" type="button">Subscription details</button>
          <button className="grid-button" type="button" aria-label="Grid view"><GridIcon /></button>
          <div className="view-toggle" role="group" aria-label="Value display">
            <button className="active" type="button" aria-label="Show percentages">%</button>
            <button type="button" aria-label="Show values">#</button>
          </div>
        </div>
        <section className="summary-grid" aria-label="Celebrity scorecard summary">
          <ScoreCard /><AwarenessCard />
          <div className="news-grid">{newsItems.map((item) => <NewsCard item={item} key={item.title} />)}</div>
        </section>
        <section className="charts-grid" aria-label="Celebrity analytics charts">
          <ChartCard title="Total Appeal"><TotalAppealChart /></ChartCard>
          <ChartCard title="Attributes"><AttributesChart demographic={demographic} /></ChartCard>
          <ChartCard title="Appeal" subtitle="Film Personality - Actor"><AppealPieChart /></ChartCard>
          <ChartCard title="Power Factors™"><PowerFactorsChart /></ChartCard>
        </section>
      </main>
    </div>
  );
}
