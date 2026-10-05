import { lazy, Suspense, useEffect, useState } from 'react';
import VersionSwitcher from './components/VersionSwitcher';
import OriginalDashboard from './original/OriginalDashboard';

const EnhancedDashboard = lazy(() => import('./enhanced/EnhancedDashboard'));

function getInitialVersion() {
  return new URLSearchParams(window.location.search).get('version') === 'enhanced'
    ? 'enhanced'
    : 'original';
}

export default function App() {
  const [version, setVersion] = useState(getInitialVersion);

  useEffect(() => {
    const url = new URL(window.location.href);
    url.searchParams.set('version', version);
    window.history.replaceState({}, '', url);
  }, [version]);

  return (
    <Suspense fallback={<div className="version-loading">Loading enhanced dashboard...</div>}>
      {version === 'original' ? (
        <OriginalDashboard versionSwitcher={<VersionSwitcher version={version} onChange={setVersion} />} />
      ) : (
        <EnhancedDashboard version={version} onVersionChange={setVersion} />
      )}
    </Suspense>
  );
}
