var somePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Hey, It worked');
  }, 2500);
  // reject('Woops... something got wrong :(');
});

somePromise.then((message) => {
  console.log(message);
}).catch((errMessage) => {
  console.log(errMessage);
});