import { DownloadIcon } from './Icons';

export default function ScoreCard({ score = 99, downloadEnabled = false }) {
  return (
    <article className="score-card">
      <div><p>E-SCORE</p><strong>{score}</strong></div>
      {downloadEnabled ? (
        <a className="one-sheet-button" href={`${import.meta.env.BASE_URL}documents/brad-pitt-one-sheet.pdf`} download>
          <DownloadIcon /> Download Celebrity One-Sheet
        </a>
      ) : (
        <button className="one-sheet-button not-implemented" type="button" aria-disabled="true" title="Available in enhanced version">
          <DownloadIcon /> Download Celebrity One-Sheet
        </button>
      )}
      <a href="https://www.imdb.com/name/nm0000093/" target="_blank" rel="noreferrer">Link to Celebrity&apos;s IMDb page</a>
    </article>
  );
}
