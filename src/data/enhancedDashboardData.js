import {
  appealData,
  appealPieData,
  attributeData,
  awarenessCategories,
  newsItems,
  powerFactorsData,
} from './dashboardData.js';

export const fieldingDates = [
  { value: '2025-07-25', label: 'July 25, 2025' },
  { value: '2025-01-24', label: 'January 24, 2025' },
  { value: '2024-07-26', label: 'July 26, 2024' },
];

export const demographics = [
  { value: 'total', label: 'Total audience' },
  { value: 'male', label: 'Total males' },
  { value: 'female', label: 'Total females' },
];

const profiles = {
  total: { multiplier: 1, shift: 0, score: 99, awareness: 60 },
  male: { multiplier: 0.96, shift: 1, score: 98, awareness: 58 },
  female: { multiplier: 1.04, shift: -1, score: 99, awareness: 63 },
};

const dateProfiles = {
  '2025-07-25': { multiplier: 1, shift: 0 },
  '2025-01-24': { multiplier: 0.92, shift: -2 },
  '2024-07-26': { multiplier: 0.86, shift: -4 },
};

const clamp = (value, max = 100) => Math.max(0, Math.min(max, Math.round(value)));
const adjust = (value, date, demographic, max = 100) => {
  const dateProfile = dateProfiles[date];
  const profile = profiles[demographic];
  return clamp((value + profile.shift + dateProfile.shift) * profile.multiplier * dateProfile.multiplier, max);
};

export function getEnhancedDataset(date, demographic) {
  const profile = profiles[demographic];
  const dateProfile = dateProfiles[date];
  const adjustedPie = appealPieData.map((item) => ({ ...item, value: adjust(item.value, date, demographic) }));
  const adjustedPieTotal = adjustedPie.reduce((sum, item) => sum + item.value, 0);
  const normalizedPie = adjustedPie.map((item) => ({ ...item, value: Math.round(item.value * 100 / adjustedPieTotal) }));
  normalizedPie[0].value += 100 - normalizedPie.reduce((sum, item) => sum + item.value, 0);
  return {
    score: clamp((profile.score + dateProfile.shift) * dateProfile.multiplier),
    awareness: clamp((profile.awareness + dateProfile.shift) * dateProfile.multiplier),
    awarenessCategories: awarenessCategories.map((item) => ({ ...item, value: adjust(item.value, date, demographic) })),
    appeal: appealData.map((item) => ({
      ...item,
      total: adjust(item.total, date, demographic),
      nameScore: adjust(item.nameScore, date, demographic),
      face: adjust(item.face, date, demographic),
    })),
    attributes: attributeData.map((item) => ({
      ...item,
      total: adjust(item.total, date, demographic, 60),
      male: adjust(item.male, date, demographic, 60),
      female: adjust(item.female, date, demographic, 60),
    })),
    appealPie: normalizedPie,
    powerFactors: powerFactorsData.map((item) => ({
      ...item,
      celebrity: adjust(item.celebrity, date, demographic, 60),
      average: adjust(item.average, date, 'total', 60),
    })),
    news: newsItems,
  };
}
