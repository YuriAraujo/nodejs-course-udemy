const {ObjectID} = require('mongodb');
const jwt = require('jsonwebtoken');

const {Todo} = require('./../../models/todo');
const {User} = require('./../../models/user');
const userOneId = new ObjectID();
const userTwoId = new ObjectID();

const users = [{
	_id: userOneId,
	email: 'test@test.com',
	password: '12345678',
	tokens: [{
		access: 'auth',
		token: jwt.sign({_id: userOneId, access: 'auth'}, process.env.JWT_SECRET).toString()
	}]
}, {
	_id: userTwoId,
	email: 'test2@test2.com',
	password: '87654321',
	tokens: [{
		access: 'auth',
		token: jwt.sign({_id: userTwoId, access: 'auth'}, process.env.JWT_SECRET).toString()
	}]
}];

const todos = [{
	_id: ObjectID('5b93f378813f5040ac272229'),
	text: 'Walk the dog',
	_creator: userOneId
}, {
	_id: ObjectID('5b93f378813f5040ac27222a'),
	text: 'Take a break before lunch',
	_creator: userTwoId
}, {
	_id: ObjectID('5b93f378813f5040ac27222b'),
	text: 'Call Susan',
	completed: true,
	completedAt: 1582739,
	_creator: userTwoId
}];

const populateTodos = (done) => {
	Todo.remove({}).then(() => {
		return Todo.insertMany(todos);
	}).then(() => done());
};

const populateUsers = (done) => {
	User.remove({}).then(() => {
		let userOne = new User(users[0]).save();
		let userTwo = new User(users[1]).save();

		Promise.all([userOne, userTwo])
	}).then(() => done());
};

module.exports = {todos, populateTodos, users, populateUsers};