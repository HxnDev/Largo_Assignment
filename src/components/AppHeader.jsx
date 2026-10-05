import largoLogo from '../assets/largo-logo.png';

export default function AppHeader() {
  return (
    <header className="site-header">
      <div className="header-content">
        <a className="logo" href="#main" aria-label="Largo home">
          <img src={largoLogo} alt="Largo" />
        </a>
        <nav className="primary-navigation" aria-label="Primary navigation">
          <button className="navigation-link not-implemented" type="button" aria-disabled="true" title="Yet to implement">Dashboard</button>
          <a className="navigation-link active" href="#main" aria-current="page">Smart Search</a>
          <button className="navigation-link not-implemented" type="button" aria-disabled="true" title="Yet to implement">List View</button>
        </nav>
        <button className="profile-button not-implemented" type="button" aria-label="Profile menu, yet to implement" aria-disabled="true" title="Yet to implement">A</button>
      </div>
    </header>
  );
}
