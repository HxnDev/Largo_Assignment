import { DownloadIcon } from './Icons';

export default function ScoreCard() {
  return (
    <article className="score-card">
      <div><p>E-SCORE</p><strong>99</strong></div>
      <button type="button"><DownloadIcon /> Download Celebrity One-Sheet</button>
      <a href="https://www.imdb.com/name/nm0000093/" target="_blank" rel="noreferrer">Link to Celebrity&apos;s IMDb page</a>
    </article>
  );
}
