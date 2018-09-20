console.log('Starting app...');

setTimeout(function () {
  console.log('Inside of callback');
}, 2000);

setTimeout(function () {
  console.log('Inside of callback2');
}, 0);

console.log('Finishing up!');