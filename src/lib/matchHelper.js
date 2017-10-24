'use strict';

const shuffleArray = arr => {
  arr = arr.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const matchElements = (arr, self = 'name', other = 'pair') => arr.reduce((result, el, idx) => [...result, ...[{
  [self]: el,
  [other]: (idx + 1) >= arr.length ? arr[0] : arr[idx + 1]
}]], []);

const sortArrObjBy = (arr, key) => arr.sort((a, b) => {
  const [aVal, bVal] = [a[key], b[key]];
  if (aVal < bVal) return -1;
  if (aVal > bVal) return 1;
  return 0;
});

export default { shuffleArray, matchElements, sortArrObjBy };

//testing
// const arr = shuffleArray(['1A', '2B', '3C', '4D']);
// const paired = pairElements(arr, 'name', 'pair');
// const sortPaired = sortArrObjBy(paired, 'name');

// console.log(sortPaired);
