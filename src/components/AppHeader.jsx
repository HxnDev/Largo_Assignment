export default function AppHeader() {
  return (
    <header className="site-header">
      <div className="header-content">
        <a className="logo" href="#main" aria-label="Largo home">
          <span className="logo-mark">L</span><span>argo</span>
        </a>
        <nav className="primary-navigation" aria-label="Primary navigation">
          <a className="navigation-link" href="#main">Dashboard</a>
          <a className="navigation-link active" href="#main" aria-current="page">Smart Search</a>
          <a className="navigation-link" href="#main">List View</a>
        </nav>
        <button className="profile-button" type="button" aria-label="Open profile menu">A</button>
      </div>
    </header>
  );
}
