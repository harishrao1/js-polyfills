const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter(function (number) {
  return number % 2 === 0;
});

console.log(evenNumbers);

// syntax for filter
// array.filter(callback(currentValue, index, arr), thisValue)

// POlyFill

Array.prototype.myFilter = function (callbackFunc) {
  const newArr = [];

  for (let i = 0; i < this.length; i++) {
    if (callbackFunc(this[i], i)) {
      newArr.push(callbackFunc(this[i]));
    }
  }

  return newArr;
};
