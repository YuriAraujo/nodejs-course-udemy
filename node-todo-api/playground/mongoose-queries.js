const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// let _id = '5b93g378813f5040ac272229';
//
// if (!ObjectID.isValid(_id)) {
// 	console.log('ID not valid');
// }

// Todo.find({_id}).then((todos) => {
// 	console.log('Todos', todos);
// });
//
// Todo.findOne({_id}).then((todo) => {
// 	console.log('Todo', todo);
// });

// Todo.findById({_id}).then((todo) => {
// 	if (!todo) {
// 		return console.log('Id not found');
// 	}
// 	console.log('Todo by id', todo);
// }).catch((e) => console.log(e));

User.findById('5b93f933626d723111e604c9').then((user) => {
	if (!user) {
		return console.log('User not found');
	}

	console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
	console.log(e);
});