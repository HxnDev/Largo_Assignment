import { tabs } from '../data/dashboardData';

export default function EnhancedTabs() {
  return <nav className="enhanced-tabs" aria-label="Celebrity report sections">
    {tabs.map((tab, index) => <button className={index === 0 ? 'active' : ''} type="button" key={tab}>{tab}</button>)}
  </nav>;
}
