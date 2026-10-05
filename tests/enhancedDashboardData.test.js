import test from 'node:test';
import assert from 'node:assert/strict';
import { demographics, fieldingDates, getEnhancedDataset } from '../src/data/enhancedDashboardData.js';

test('returns the expected default enhanced scorecard', () => {
  const dataset = getEnhancedDataset('2025-07-25', 'male');

  assert.equal(dataset.score, 98);
  assert.equal(dataset.awareness, 58);
  assert.equal(dataset.appealPie.reduce((total, item) => total + item.value, 0), 100);
});

test('updates metrics when the date or demographic changes', () => {
  const currentMale = getEnhancedDataset('2025-07-25', 'male');
  const earlierFemale = getEnhancedDataset('2024-07-26', 'female');

  assert.notDeepEqual(earlierFemale.appeal, currentMale.appeal);
  assert.notDeepEqual(earlierFemale.attributes, currentMale.attributes);
  assert.notEqual(earlierFemale.awareness, currentMale.awareness);
});

test('keeps generated metrics within their chart ranges', () => {
  for (const date of fieldingDates) {
    for (const demographic of demographics) {
      const dataset = getEnhancedDataset(date.value, demographic.value);

      assert.ok(dataset.score >= 0 && dataset.score <= 100);
      assert.ok(dataset.awareness >= 0 && dataset.awareness <= 100);
      assert.ok(dataset.attributes.every((item) =>
        ['total', 'male', 'female'].every((key) => item[key] >= 0 && item[key] <= 60)));
      assert.equal(dataset.appealPie.reduce((total, item) => total + item.value, 0), 100);
    }
  }
});
