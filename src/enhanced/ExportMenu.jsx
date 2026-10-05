import { useEffect, useRef, useState } from 'react';
import { ChevronDownIcon, DownloadIcon, FileIcon, ImageIcon, TableIcon } from '../components/Icons';
import { exportCsv, exportExcel, exportImage, exportPdf } from '../utils/exportDashboard';

export default function ExportMenu({ dataset, dashboardRef }) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const close = (event) => {
      if (event.key === 'Escape' || (event.type === 'pointerdown' && !menuRef.current?.contains(event.target))) setOpen(false);
    };
    document.addEventListener('keydown', close);
    document.addEventListener('pointerdown', close);
    return () => { document.removeEventListener('keydown', close); document.removeEventListener('pointerdown', close); };
  }, []);

  const run = (action) => { setOpen(false); action(); };
  return (
    <div className="export-menu" ref={menuRef}>
      <button className="enhanced-export-button" type="button" aria-haspopup="menu" aria-expanded={open} onClick={() => setOpen((value) => !value)}>
        <DownloadIcon size={16} /> Export <ChevronDownIcon />
      </button>
      {open ? <div className="export-menu-popover" role="menu">
        <button type="button" role="menuitem" onClick={() => run(exportPdf)}><FileIcon /> Export as PDF</button>
        <button type="button" role="menuitem" onClick={() => run(() => exportImage(dashboardRef.current))}><ImageIcon /> Export as Image</button>
        <button type="button" role="menuitem" onClick={() => run(() => exportCsv(dataset))}><FileIcon /> Export as CSV</button>
        <button type="button" role="menuitem" onClick={() => run(() => exportExcel(dataset))}><TableIcon /> Export as Excel</button>
      </div> : null}
    </div>
  );
}
