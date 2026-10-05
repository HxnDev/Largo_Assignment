import { DownloadIcon } from './Icons';

export default function ScoreCard({ score = 99 }) {
  return (
    <article className="score-card">
      <div><p>E-SCORE</p><strong>{score}</strong></div>
      <a className="one-sheet-button" href={`${import.meta.env.BASE_URL}documents/brad-pitt-one-sheet.pdf`} download>
        <DownloadIcon /> Download Celebrity One-Sheet
      </a>
      <a href="https://www.imdb.com/name/nm0000093/" target="_blank" rel="noreferrer">Link to Celebrity&apos;s IMDb page</a>
    </article>
  );
}
