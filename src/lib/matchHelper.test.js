import { shuffleArray } from './matchHelper';

test('shuffle', () => {
  const arr = [1, 2, 3];
  const shuffledArr = shuffleArray(arr);
  expect(shuffledArr.length).toBe(arr.length);
});