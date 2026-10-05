import { tabs } from '@/data/dashboardData';
import TabButton from '@/components/TabButton';

export default function EnhancedTabs() {
  return <nav className="enhanced-tabs" aria-label="Celebrity report sections">
    {tabs.map((tab, index) => <TabButton active={index === 0} key={tab}>{tab}</TabButton>)}
  </nav>;
}
