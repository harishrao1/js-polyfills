/**
 *
 * call, apply and bind
 */

let car1 = {
  color: `white`,
  company: `BMW`,
};

let car2 = {
  color: `Yellow`,
  company: `Ferrari`,
};

function purchaseCar(price, year) {
  return `I purchased ${this.color} ${this.company} for Rs.${price} in ${year}`;
}

/**
 * call() – Executes immediately
 *    - Arguments passed individually
 */

console.log(purchaseCar.call(car1, "70 Lakh", 2024));
console.log(purchaseCar.call(car2, "90 Lakh", 2025));

/**
 * apply - Executes immediately, Arguments are passed as an array.
 */
console.log(purchaseCar.apply(car1, ["70 Lakh", 2024]));
console.log(purchaseCar.apply(car2, ["90 Lakh", 2025]));

/**
 *
 * bind : Returns new Function - Does not execute immediately
 */

const buyBMW = purchaseCar.bind(car1, `80 Lakh`, 2026);

console.log(buyBMW);

// polyfills

Function.prototype.myCall = function (context, ...args) {
  if (typeof this !== `function`) {
    throw new TypeError(`myCall must be called on a function`);
  }

  context.fn = this ?? globalThis;
  context.fn(...args);
};

Function.prototype.myApply = function (context, args) {
  if (typeof this !== "function") {
    throw new TypeError("myApply must be called on a function");
  }
  context = context || globalThis;
  args = args || [];
  context.fn = this;
  context.fn(...args);
};

Function.prototype.myBind = function (context, ...args) {
  if (typeof this !== "function") {
    throw new TypeError("myBind must be called on a function");
  }
  context.fn = this;
  return function () {
    return context.fn(...args);
  };
};

Function.prototype.myCall = function (context, ...args) {
  context.fn = this;
  context.fn(...args);
};

/**
 *
 *
 * call - immediate execution, arguments individually
 * apply - immediate execution, arguments as array
 * bind - returns new function (lazy execution)
 *
 *
 *
 * Arrow functions ignore call/apply/bind
 * proper bind must handle constructor case
 * always use symbol to avoid property collision
 * use globalThis instead of window
 */
