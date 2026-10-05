import { awarenessCategories } from '@/data/dashboardData';

export default function AwarenessCard({ score = 60, categories = awarenessCategories }) {
  return (
    <article className="awareness-card">
      <h2>Awareness</h2><strong className="awareness-score">{score}%</strong>
      <p>Category Averages for this Celebrity:</p>
      <ul>{categories.map((category) => (
        <li key={category.label}>
          <span className="legend-square" style={{ backgroundColor: category.color }} />
          <span>{category.label}</span><strong>{category.value}%</strong>
        </li>
      ))}</ul>
    </article>
  );
}
