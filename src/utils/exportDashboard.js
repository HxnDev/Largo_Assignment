function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.append(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function rowsFromDataset(dataset) {
  return [
    ['Metric', 'Value'],
    ['E-Score', dataset.score],
    ['Awareness', dataset.awareness],
    ...dataset.awarenessCategories.map((item) => [`Awareness - ${item.label}`, item.value]),
    ...dataset.powerFactors.map((item) => [`Power Factor - ${item.name}`, item.celebrity]),
  ];
}

export function exportCsv(dataset) {
  const csv = rowsFromDataset(dataset)
    .map((row) => row.map((value) => `"${String(value).replaceAll('"', '""')}"`).join(','))
    .join('\n');
  downloadBlob(new Blob([csv], { type: 'text/csv;charset=utf-8' }), 'brad-pitt-scorecard.csv');
}

export function exportExcel(dataset) {
  const table = rowsFromDataset(dataset)
    .map((row) => `<tr>${row.map((value) => `<td>${value}</td>`).join('')}</tr>`)
    .join('');
  const workbook = `<html><head><meta charset="utf-8"></head><body><table>${table}</table></body></html>`;
  downloadBlob(new Blob([workbook], { type: 'application/vnd.ms-excel' }), 'brad-pitt-scorecard.xls');
}

export function exportPdf() {
  window.print();
}

export async function exportImage(element) {
  const clone = element.cloneNode(true);
  clone.querySelectorAll('button, .version-switcher').forEach((node) => node.remove());
  const css = [...document.styleSheets].map((sheet) => {
    try { return [...sheet.cssRules].map((rule) => rule.cssText).join('\n'); } catch { return ''; }
  }).join('\n');
  const width = element.scrollWidth;
  const height = element.scrollHeight;
  const markup = new XMLSerializer().serializeToString(clone);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}"><foreignObject width="100%" height="100%"><div xmlns="http://www.w3.org/1999/xhtml"><style>${css}</style>${markup}</div></foreignObject></svg>`;
  const image = new Image();
  const url = URL.createObjectURL(new Blob([svg], { type: 'image/svg+xml;charset=utf-8' }));
  await new Promise((resolve, reject) => { image.onload = resolve; image.onerror = reject; image.src = url; });
  const canvas = document.createElement('canvas');
  canvas.width = width * 2;
  canvas.height = height * 2;
  const context = canvas.getContext('2d');
  context.scale(2, 2);
  context.fillStyle = '#f4f6f8';
  context.fillRect(0, 0, width, height);
  context.drawImage(image, 0, 0, width, height);
  URL.revokeObjectURL(url);
  canvas.toBlob((blob) => blob && downloadBlob(blob, 'brad-pitt-scorecard.png'), 'image/png');
}
