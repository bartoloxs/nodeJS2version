const request = require('request');
const apiKey = '300f882dacc34e6a0654a68e5ed3baa3';

var getWeather = (lat, long, callback) => {
  request({
    url: `https://api.darksky.net/forecast/${apiKey}/${lat},${long}`,
    json: true
  }, (err, response, body) => {
    if (err) {
      callback('Unable to connect to weather servers :( ');
    } else if (response.statusCode === 400) {
      callback('Unable to fetch weather data');
    } else if (response.statusCode === 200) {
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    }
  });
};


module.exports = { getWeather };