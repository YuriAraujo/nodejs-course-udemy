let expect = require('expect');

let {generateMessage} = require('./message');

describe('generateMessage', () => {
	it('should generate the correct message object', () => {
		let from = 'test user';
		let text = 'test text';
		let res = generateMessage(from, text)

		expect(res.createdAt).toBeA('number');
		expect(res).toInclude({from, text});
	});
});