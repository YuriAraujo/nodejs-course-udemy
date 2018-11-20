let expect = require('expect');

let {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
	it('should generate the correct message object', () => {
		let from = 'test user';
		let text = 'test text';
		let res = generateMessage(from, text)

		expect(res.createdAt).toBeA('number');
		expect(res).toInclude({from, text});
	});
});

describe('generateLocationMessage', () => {
	it('should generate correct location object', () => {
		let from = 'Yuri';
		let latitude = 15;
		let longitude = 19;
		let url = 'https://maps.google.com/?q=15,19';
		let message = generateLocationMessage(from, latitude, longitude);

		expect(message.createdAt).toBeA('number');
		expect(message).toInclude({from, url});
	});
});