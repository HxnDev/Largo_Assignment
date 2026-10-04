import { tabs } from '../data/dashboardData';

export default function DashboardTabs() {
  return (
    <nav className="dashboard-tabs" aria-label="Celebrity report sections">
      {tabs.map((tab, index) => <span className={index === 0 ? 'dashboard-tab active' : 'dashboard-tab'} key={tab}>{tab}</span>)}
    </nav>
  );
}
