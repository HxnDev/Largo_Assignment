import { useMemo, useState } from 'react';
import AppHeader from '../components/AppHeader';
import AwarenessCard from '../components/AwarenessCard';
import ChartCard from '../components/ChartCard';
import NewsCard from '../components/NewsCard';
import ScoreCard from '../components/ScoreCard';
import VersionSwitcher from '../components/VersionSwitcher';
import AppealPieChart from '../components/charts/AppealPieChart';
import AttributesChart from '../components/charts/AttributesChart';
import PowerFactorsChart from '../components/charts/PowerFactorsChart';
import TotalAppealChart from '../components/charts/TotalAppealChart';
import { getEnhancedDataset } from '../data/enhancedDashboardData';
import EnhancedProfileBar from './EnhancedProfileBar';
import EnhancedTabs from './EnhancedTabs';
import ExpandedChartModal from './ExpandedChartModal';
import './enhanced.css';

const chartTitles = {
  appeal: 'Total Appeal', attributes: 'Attributes', pie: 'Appeal', power: 'Power Factors™',
};

export default function EnhancedDashboard({ version, onVersionChange }) {
  const [date, setDate] = useState('2025-07-25');
  const [demographic, setDemographic] = useState('male');
  const [expandedChart, setExpandedChart] = useState(null);
  const dataset = useMemo(() => getEnhancedDataset(date, demographic), [date, demographic]);

  const chartFor = (key) => ({
    appeal: <TotalAppealChart data={dataset.appeal} interactive />,
    attributes: <AttributesChart data={dataset.attributes} demographic={demographic} interactive />,
    pie: <AppealPieChart data={dataset.appealPie} interactive />,
    power: <PowerFactorsChart data={dataset.powerFactors} interactive />,
  })[key];

  return (
    <div className="app enhanced-dashboard">
      <AppHeader />
      <div className="version-switcher-wrap"><VersionSwitcher version={version} onChange={onVersionChange} /></div>
      <div className="enhanced-container">
        <main id="main">
          <EnhancedProfileBar date={date} demographic={demographic} onDateChange={setDate}
            onDemographicChange={setDemographic} />
          <EnhancedTabs />
          <section className="enhanced-summary-grid" aria-label="Celebrity scorecard summary">
            <ScoreCard score={dataset.score} downloadEnabled />
            <AwarenessCard score={dataset.awareness} categories={dataset.awarenessCategories} />
            <div className="news-grid">{dataset.news.map((item) => <NewsCard item={item} key={item.title} />)}</div>
          </section>
          <section className="enhanced-charts-grid" aria-label="Interactive celebrity analytics charts">
            <ChartCard title="Total Appeal" onMaximize={() => setExpandedChart('appeal')}>{chartFor('appeal')}</ChartCard>
            <ChartCard title="Attributes" onMaximize={() => setExpandedChart('attributes')}>{chartFor('attributes')}</ChartCard>
            <ChartCard title="Appeal" subtitle="Film Personality - Actor" onMaximize={() => setExpandedChart('pie')}>{chartFor('pie')}</ChartCard>
            <ChartCard title="Power Factors™" onMaximize={() => setExpandedChart('power')}>{chartFor('power')}</ChartCard>
          </section>
        </main>
      </div>
      {expandedChart ? <ExpandedChartModal title={chartTitles[expandedChart]} onClose={() => setExpandedChart(null)}>
        {chartFor(expandedChart)}
      </ExpandedChartModal> : null}
    </div>
  );
}
