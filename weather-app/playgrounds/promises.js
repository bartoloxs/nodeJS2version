var asycnAdd = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a === 'number' && typeof b === 'number') {
        resolve(a + b);
      } else {
        reject('Arguments must be numbers.');
      }
    }, 1500);
  });
};

asycnAdd(1, 5).then((result) => {
  console.log('Result is ', result);
}, (errMessage) => {
  console.log(errMessage);
});

// var somePromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('Hey, It worked');
//   }, 2500);
//   // reject('Woops... something got wrong :(');
// });

// somePromise.then((message) => {
//   console.log(message);
// }).catch((errMessage) => {
//   console.log(errMessage);
// });