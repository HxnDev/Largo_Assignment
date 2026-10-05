export default function TabButton({ active = false, className = '', children }) {
  return (
    <button
      className={`${className}${active ? ' active' : ' not-implemented'}`}
      type="button"
      aria-current={active ? 'page' : undefined}
      aria-disabled={active ? undefined : true}
      title={active ? undefined : 'Yet to implement'}
    >
      {children}
    </button>
  );
}
