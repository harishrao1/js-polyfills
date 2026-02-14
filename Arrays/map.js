const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map(function (number) {
  return number * 2;
});

console.log(doubledNumbers);

// polyFill
Array.prototype.myMap = function (callbackFunc) {
  const newArr = [];

  for (let i = 0; i < this.length; i++) {
    newArr.push(callbackFunc(this[i]));
  }

  return newArr;
};

console.log(numbers.myMap((x) => x * 2));
