import { matchHelper } from './';

test('shuffle', () => {
  //Arrange
  const arr = [1, 2, 3, 4, 5];
  //Act
  const shuffledArr = matchHelper.shuffleArray(arr);
  const passed = shuffledArr.some((el, index) => el != arr[index]);
  //Assert
  expect(passed).toBe(true);
});

test('match map', () => {
  //Arrange
  const arr = [1,2,3,4,5];
  //Act
  const map = matchHelper.matchMap(arr);
  const passed = arr.some((el,idx) => map[el] === arr[idx >= arr.length? 0 : idx + 1]);
  //Assert
  expect(passed).toBe(true);
});