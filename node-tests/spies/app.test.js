const expect = require('expect');
const rewire = require('rewire');

let app = rewire('./app');

describe('App', () => {
	let db = {
		saveUser: expect.createSpy()
	};
	app.__set__('db', db);

	it('should call the spy correctly', () => {
		let spy = expect.createSpy();
		spy('Yuri', 25);
		expect(spy).toHaveBeenCalledWith('Yuri', 25);
	});

	it('should call saveUser with user object', () => {
		let email = 'test@test.com';
		let password = '123456';

		app.handleSignup(email, password);
		expect(db.saveUser).toHaveBeenCalledWith({email, password});
	});
});