const nums = [1, 2, 3, 4, 5, 6];

const sum = nums.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);

console.log(sum);

// polyfill
Array.prototype.myReduce = function (callbackFunc, initialValue) {
  let accumulator = initialValue === undefined ? undefined : initialValue;

  for (let i = 0; i < this.length; i++) {
    if (accumulator !== undefined) {
      //   accumulator = callbackFunc(accumulator, this[i]);
      accumulator = callbackFunc.call(undefined, accumulator, this[i], i, this);
    } else {
      accumulator = this[i];
    }
  }

  return accumulator;
};
