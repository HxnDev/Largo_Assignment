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

export function SparklesIcon({ size = 18 }) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.2 2.2c.3-.9 1.6-.9 1.9 0l1.2 3.5c.3.9 1 1.6 1.9 1.9l3.5 1.2c.9.3.9 1.6 0 1.9l-3.5 1.2c-.9.3-1.6 1-1.9 1.9l-1.2 3.5c-.3.9-1.6.9-1.9 0L10 13.8c-.3-.9-1-1.6-1.9-1.9l-3.5-1.2c-.9-.3-.9-1.6 0-1.9l3.5-1.2c.9-.3 1.6-1 1.9-1.9l1.2-3.5ZM19 15.2c.2-.6 1.1-.6 1.3 0l.4 1.2c.2.6.7 1.1 1.3 1.3l1.2.4c.6.2.6 1.1 0 1.3l-1.2.4c-.6.2-1.1.7-1.3 1.3l-.4 1.2c-.2.6-1.1.6-1.3 0l-.4-1.2c-.2-.6-.7-1.1-1.3-1.3l-1.2-.4c-.6-.2-.6-1.1 0-1.3l1.2-.4c.6-.2 1.1-.7 1.3-1.3l.4-1.2ZM19.3 1.5c.15-.45.8-.45.95 0l.3.9c.15.45.5.8.95.95l.9.3c.45.15.45.8 0 .95l-.9.3c-.45.15-.8.5-.95.95l-.3.9c-.15.45-.8.45-.95 0l-.3-.9a1.5 1.5 0 0 0-.95-.95l-.9-.3c-.45-.15-.45-.8 0-.95l.9-.3c.45-.15.8-.5.95-.95l.3-.9Z" />
    </svg>
  );
}

export function CalendarIcon({ size = 15 }) {
  return <svg aria-hidden="true" width={size} height={size} viewBox="0 0 16 16" fill="none"><rect x="2" y="3.5" width="12" height="10.5" rx="1.5" stroke="currentColor" strokeWidth="1.3" /><path d="M5 2v3M11 2v3M2 6.5h12" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" /></svg>;
}

export function UsersIcon({ size = 15 }) {
  return <svg aria-hidden="true" width={size} height={size} viewBox="0 0 16 16" fill="none"><circle cx="6" cy="5" r="2.25" stroke="currentColor" strokeWidth="1.25" /><path d="M2.5 13c.2-2.3 1.5-3.5 3.5-3.5s3.3 1.2 3.5 3.5M10 3.4a2 2 0 0 1 0 3.8M10.4 9.7c1.7.1 2.7 1.2 2.9 3" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" /></svg>;
}

export function ChevronDownIcon({ size = 13 }) {
  return <svg aria-hidden="true" width={size} height={size} viewBox="0 0 16 16" fill="none"><path d="m4 6 4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

export function CloseIcon({ size = 16 }) {
  return <svg aria-hidden="true" width={size} height={size} viewBox="0 0 16 16" fill="none"><path d="m3.5 3.5 9 9m0-9-9 9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg>;
}
