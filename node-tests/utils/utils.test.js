const expect = require('expect');

const utils = require('./utils');

describe('Utils', () => {

	describe('#add', ()=> {
		it('should add two numbers', () => {
			let res = utils.add(3, 8);

			expect(res).toBe(11).toBeA('number');
		});
	});
});

it('should square a number', () => {
	let res = utils.square(3);

	expect(res).toBe(9).toBeA('number');
	// if (res !== 9) {
	// 	throw new Error(`Expected 9 but got ${res}`);
	// }
});

it('should verify first and last names are set', () => {
	let user = {location: 'Fortaleza', age: 25};
	let res = utils.setName(user, 'Yuri Araújo');

	expect(user).toInclude({
		firstName: 'Yuri',
		lastName: 'Araújo'
	});
});

it('should async add two numbers', (done) => {
	utils.asyncAdd(4, 3, (sum) => {
		expect(sum).toBe(7).toBeA('number');
		done();
	});
});

it('should async square a number', (done) => {
	utils.asyncSquare(3, (square) => {
		expect(square).toBe(9).toBeA('number');
		done();
	})
});

// it('should expect some values', () => {
// 	// expect(12).toNotBe(11);
// 	// expect({name: 'Yuri'}).toEqual({name: 'Yuri'});
// 	// expect([2, 3, 4]).toExclude(5);
// 	expect({
// 		name: 'Yuri',
// 		age: 25,
// 		location: 'Fortaleza'
// 	}).toInclude({
// 		age: 25
// 	});
// });