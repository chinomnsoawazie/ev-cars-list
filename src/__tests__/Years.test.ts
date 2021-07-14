import { YearsList } from '../index';

test('First available year', () => {
  expect(YearsList[0][1]).toBe('2003');
});

test('Last available year', () => {
  expect(YearsList[YearsList.length - 1][1]).toBe('2022');
});
