const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

let geocodeURL = `https://maps.googleapis.com/maps/api/geocode/json?address=
                ${encodeURIComponent(argv.address)}&key=AIzaSyD-1VJdBjn3nVLNON2iZfAFcbmq4xNs_eg`;

axios.get(geocodeURL).then((response) => {
    if (response.data.status === 'ZERO_RESULTS') {
        throw new Error('Unable to find that address.')
    }

    let lat = response.data.results[0].geometry.location.lat;
    let lng = response.data.results[0].geometry.location.lng;
    let weatherURL = `https://api.darksky.net/forecast/e84d9b251416ed79ace9a9f208b0d929/${lat},${lng}`;
    console.log(response.data.results[0].formatted_address);
    return axios.get(weatherURL);
}).then((response) => {
    let temperature = response.data.currently.temperature;
    let apparentTemperature = response.data.currently.apparentTemperature;
    console.log(`Temperature: ${temperature}, apparente temperature: ${apparentTemperature}`);
}).catch((e) => {
    if (e.code === 'ENOTFOUND') {
        console.log('Unable to connect to API servers.');
    } else {
        console.log(e.message);
    }
});