import { GridIcon, SparklesIcon } from './Icons';

export default function VersionSwitcher({ version, onChange }) {
  return (
    <section className="version-switcher" aria-label="Dashboard version">
      <div className="version-options" role="group" aria-label="Choose dashboard version">
        <button className={version === 'original' ? 'active' : ''} type="button" onClick={() => onChange('original')}>
          <GridIcon size={20} />
          <span><strong>Simple version</strong><small>Original mock layout</small></span>
        </button>
        <button className={version === 'enhanced' ? 'active' : ''} type="button" onClick={() => onChange('enhanced')}>
          <SparklesIcon size={22} />
          <span><strong>Enhanced version</strong><small>Refined UI + extra features</small></span>
        </button>
      </div>
      <p><span aria-hidden="true">ⓘ</span> Toggle between versions to compare<br />the original mock and the enhanced design.</p>
    </section>
  );
}
