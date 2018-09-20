var { geocodeAddress: geoService } = require('../geocode/geocode');

var geocodeAddress = (address) => {
  return new Promise((resolve, reject) => {
    geoService(address, resolve, reject);
  });
};

geocodeAddress('#####').then(location => {
  console.log(JSON.stringify(location, undefined, 4));
}, (errorMessagge) => {
  console.log(errorMessagge);
});