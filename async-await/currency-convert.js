// http://data.fixer.io/api/latest?access_key=7273f6c4b84dea9d4f2125abe7027237&format=1

const axios = require('axios');

const getExchangeRate = async (from, to) => {
	const response = await axios.get('http://data.fixer.io/api/latest?access_key=7273f6c4b84dea9d4f2125abe7027237&format=1');
	const euro = 1 / response.data.rates[from];
	return  euro * response.data.rates[to];
};

const getCountries = async (currency) => {
	const response = await axios.get(`http://restcountries.eu/rest/v2/currency/${currency}`);
	return response.data.map((country) => country.name);
};

const convertCurrency = async (from, to, amount) => {
	const rate = await getExchangeRate(from, to);
	const convertedAmount = (amount * rate).toFixed(2)
	const countries = await getCountries(to);
	return `${amount} ${from} is worth ${convertedAmount} ${to}. You can spend it in the following countries: ${countries.join(', ')}.`
};

convertCurrency('USD', 'CAD', 20)
	.then((result) => console.log(result))
	.catch((err) => console.log(err));