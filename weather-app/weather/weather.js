const request = require('request');


let weatherInfo = (lat, long, callback) => {
    request({
        url:  `https://api.darksky.net/forecast/e84d9b251416ed79ace9a9f208b0d929/${lat},${long}`,
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            callback(undefined, {
               temperature: body.currently.temperature,
               apparentTemperature: body.currently.apparentTemperature
            });
        } else {
            callback('Unable to fetch weather.');
        }
    });
};

module.exports.weatherInfo = weatherInfo;