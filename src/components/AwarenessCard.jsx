import { awarenessCategories } from '../data/dashboardData';

export default function AwarenessCard() {
  return (
    <article className="awareness-card">
      <h2>Awareness</h2><strong className="awareness-score">60%</strong>
      <p>Category Averages for this Celebrity:</p>
      <ul>{awarenessCategories.map((category) => (
        <li key={category.label}>
          <span className="legend-square" style={{ backgroundColor: category.color }} />
          <span>{category.label}</span><strong>{category.value}%</strong>
        </li>
      ))}</ul>
    </article>
  );
}
