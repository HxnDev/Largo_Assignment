import { GridIcon, SparklesIcon } from './Icons';

export default function VersionSwitcher({ version, onChange }) {
  const showEnhanced = version === 'original';
  return (
    <button className="version-switch-button" type="button" onClick={() => onChange(showEnhanced ? 'enhanced' : 'original')}>
      {showEnhanced ? <SparklesIcon size={16} /> : <GridIcon size={15} />}
      <strong>{showEnhanced ? 'Enhanced version' : 'Original version'}</strong>
    </button>
  );
}
