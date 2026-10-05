import { useState } from 'react';
import { newsItems } from '../data/dashboardData';
import AppHeader from '../components/AppHeader';
import AwarenessCard from '../components/AwarenessCard';
import ChartCard from '../components/ChartCard';
import DashboardTabs from '../components/DashboardTabs';
import NewsCard from '../components/NewsCard';
import { GridIcon } from '../components/Icons';
import ProfileBar from '../components/ProfileBar';
import ScoreCard from '../components/ScoreCard';
import AppealPieChart from '../components/charts/AppealPieChart';
import AttributesChart from '../components/charts/AttributesChart';
import PowerFactorsChart from '../components/charts/PowerFactorsChart';
import TotalAppealChart from '../components/charts/TotalAppealChart';

export default function OriginalDashboard({ versionSwitcher }) {
  const [fieldingDate, setFieldingDate] = useState('July 25, 2025');
  const [demographic, setDemographic] = useState('male');
  return (
    <div className="app original-dashboard">
      <AppHeader />
      <div className="version-switcher-wrap">{versionSwitcher}</div>
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
