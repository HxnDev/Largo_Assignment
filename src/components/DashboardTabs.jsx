import { tabs } from '../data/dashboardData';
import TabButton from './TabButton';

export default function DashboardTabs() {
  return (
    <nav className="dashboard-tabs" aria-label="Celebrity report sections">
      {tabs.map((tab, index) => <TabButton active={index === 0} className="dashboard-tab" key={tab}>{tab}</TabButton>)}
    </nav>
  );
}
