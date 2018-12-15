const expect = require('expect');
const { Users } = require('./users');

describe('Users', () => {

	let users;

	beforeEach(() => {
		users = new Users();
		users.users = [{
			id: '1',
			name: 'One',
			room: 'NodeJS Course'
		},{
			id: '2',
			name: 'Two',
			room: 'React Course'
		},{
			id: '3',
			name: 'Three',
			room: 'NodeJS Course'
		}];
	});

	it('should add new user', () => {
		let users = new Users();
		let user = {
			id: '71627',
			name: 'Yuri',
			room: 'NodeJS Course'
		};
		let resUser = users.addUser(user.id, user.name, user.room);

		expect(users.users).toEqual([user]);
	});

	it('should remove a user', () => {
		let userId = '1';
		let user = users.removeUser(userId);

		expect(user.id).toBe(userId);
		expect(users.users.length).toBe(2);
	});

	it('should not remove user', () => {
		let userId = '23';
		let user = users.removeUser(userId);

		expect(user).toNotExist();
		expect(users.users.length).toBe(3);
	});

	it('should find user', () => {
		let userId = '1';
		let user = users.getUser(userId);

		expect(user.id).toBe(userId);
	});

	it('should not find user', () => {
		let userId = '8';
		let user = users.getUser(userId);

		expect(user).toNotExist();
	});

	it('should return names for nodejs course', () => {
		let userList = users.getUserList('NodeJS Course');

		expect(userList).toEqual(['One', 'Three']);
	});

	it('should return names for react course', () => {
		let userList = users.getUserList('React Course');

		expect(userList).toEqual(['Two']);
	})
});