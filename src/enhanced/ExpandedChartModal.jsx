import { useEffect, useRef } from 'react';
import { CloseIcon } from '@/components/Icons';

export default function ExpandedChartModal({ title, children, onClose }) {
  const closeRef = useRef(null);
  useEffect(() => {
    const onKeyDown = (event) => { if (event.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKeyDown);
    closeRef.current?.focus();
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [onClose]);
  return (
    <div className="chart-modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <section className="chart-modal" role="dialog" aria-modal="true" aria-labelledby="expanded-chart-title">
        <header><h2 id="expanded-chart-title">{title}</h2><button ref={closeRef} type="button" onClick={onClose} aria-label="Close expanded chart"><CloseIcon /></button></header>
        <div className="expanded-chart-content">{children}</div>
      </section>
    </div>
  );
}
