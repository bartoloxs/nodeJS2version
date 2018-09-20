const request = require('request');
const apiKey = 'AIzaSyBGr5l9rOXtxqrZtVrdrgxON-miTxGAOZ8';
const apiWeather = '300f882dacc34e6a0654a68e5ed3baa3';

// https://api.darksky.net/forecast/[key]/[latitude],[longitude]

var geocodeAddress = (address, resolve, reject) => {
  const encodedAddress = encodeURIComponent(address);

  request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?key=${apiKey}&address=${encodedAddress}`,
    json: true
  }, (err, response, body) => {
    if (err) {
      reject('Unable to connect to google servers.')
    } else if (body.status === 'ZERO_RESULTS') {
      reject('Unable to find that address.');
    } else if (body.status === 'OK') {
      resolve({
        address: body.results[0].formatted_address,
        latitude: body.results[0].geometry.location.lat,
        longitude: body.results[0].geometry.location.lng
      });
    }
  });
}

module.exports = {
  geocodeAddress
};