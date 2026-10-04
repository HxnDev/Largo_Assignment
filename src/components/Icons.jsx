export function DownloadIcon({ size = 12 }) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path d="M8 2.25v7.5m0 0 2.5-2.5M8 9.75l-2.5-2.5M3 11.5v1.75h10V11.5" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function GridIcon({ size = 13 }) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 16 16" fill="none">
      <rect x="2.25" y="2.25" width="4.25" height="4.25" stroke="currentColor" strokeWidth="1.2" />
      <rect x="9.5" y="2.25" width="4.25" height="4.25" stroke="currentColor" strokeWidth="1.2" />
      <rect x="2.25" y="9.5" width="4.25" height="4.25" stroke="currentColor" strokeWidth="1.2" />
      <rect x="9.5" y="9.5" width="4.25" height="4.25" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

export function MoreIcon() {
  return (
    <svg aria-hidden="true" width="14" height="4" viewBox="0 0 14 4" fill="currentColor">
      <circle cx="2" cy="2" r="1.25" /><circle cx="7" cy="2" r="1.25" /><circle cx="12" cy="2" r="1.25" />
    </svg>
  );
}

export function MaximizeIcon() {
  return (
    <svg aria-hidden="true" width="12" height="12" viewBox="0 0 16 16" fill="none">
      <path d="M9.5 2.5h4v4M13.5 2.5 9 7M6.5 13.5h-4v-4M2.5 13.5 7 9" stroke="currentColor" strokeWidth="1.15" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
