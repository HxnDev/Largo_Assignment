import { DownloadIcon } from '../components/Icons';

export default function ExportButton() {
  return (
    <button className="enhanced-export-button" type="button" onClick={() => window.print()}>
      <DownloadIcon size={16} /> Export
    </button>
  );
}
