// Promise.all - used to handle multiple promises simultanelously.

// it takes an iterable of promises as an input and returns single Promise that resolves when all the input promised have resolved or rejects with the reason of the first promise that rejected.

let promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, `one`);
});
let promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, `two`);
});

Promise.all([promise1, promise2])
  .then((values) => {
    console.log(values);
  })
  .catch((error) => {
    console.log(error);
  });

let promise3 = Promise.resolve(`Hello`);
let promise4 = Promise.resolve(`World`);

// polyfill

function promiseAll(promiseArr) {
  const results = [];

  const resolvedPromieCounter = 0;

  return new Promise((resolve, reject) => {
    promiseArr.forEach((promise, index) => {
      promise
        .then((val) => {
          results[index] = val;
          resolvedPromieCounter = resolvedPromieCounter + 1;

          if (resolvedPromieCounter === promiseArr.length) {
            resolve(results);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
}

function promiseRace(promises) {
  const result = [];

  return new Promise((resolve, reject) => {
    promises.forEach((promise) => {
      promise
        .then((res) => {
          result.push(res);
          resolve(result);
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
}
