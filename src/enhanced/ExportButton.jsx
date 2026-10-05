import { DownloadIcon } from '../components/Icons';
import { exportPdf } from '../utils/exportDashboard';

export default function ExportButton() {
  return (
    <div className="export-menu">
      <button className="enhanced-export-button" type="button" onClick={exportPdf}>
        <DownloadIcon size={16} /> Export
      </button>
    </div>
  );
}
