const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

Todo.findOneAndDelete({_id: '5b93f378813f5040ac27222b'}).then((todo) => {
	console.log(todo);
});

Todo.findByIdAndDelete('5b93f378813f5040ac27222a').then((todo) => {
	console.log(todo);
});