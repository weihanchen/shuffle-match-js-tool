'use strict';

const shuffleArray = arr => {
  arr = arr.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const matchMap = (arr) => arr.reduce((result, el, idx) => Object.assign({}, result, {
  [el]: (idx + 1) >= arr.length ? arr[0] : arr[idx + 1]
}), {});


export default { shuffleArray, matchMap };

//testing
// const arr = shuffleArray(['1A', '2B', '3C', '4D']);
// const paired = pairElements(arr, 'name', 'pair');
// const sortPaired = sortArrObjBy(paired, 'name');

// console.log(sortPaired);
