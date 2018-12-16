const users = [{
	id: 1,
	name: 'One',
	schooldId: 101
},{
	id: 2,
	name: 'Two',
	schooldId: 999
}];

const grades = [{
	id: 1,
	schooldId: 101,
	grade: 78
},{
	id: 2,
	schooldId: 999,
	grade: 98
},{
	id: 3,
	schooldId: 101,
	grade: 60
}];

const getUser = (id) => {
	return new Promise((resolve, reject) => {
		const user = users.find((user) => user.id === id);

		if (user) {
			resolve(user);
		} else {
			reject(`Unable to find user with id of ${id}`);
		}
	});
};

const getGrades = (schooldId) => {
	return new Promise((resolve, reject) => {
		resolve(grades.filter((grade) => grade.schooldId === schooldId));
	});
};

const getStatus = (userId) => {
	let user;
	return getUser(userId).then((tempUser) => {
		user = tempUser;
		return getGrades(user.schooldId)
	}).then((grades) => {
		let average = 0;

		if (grades.length > 0) {
			average = grades.map((grade) => grade.grade).reduce((a, b) => a + b) / grades.length;
		}

		return `${user.name} has a ${average}% in the class`
	})
};

const getStatusAlt = async (userId) => {
	const user = await getUser(userId);
	const grades = await getGrades(user.schooldId);

	console.log(user, grades)
};

getStatusAlt(2)
	.then((name) => console.log(name))
	.catch((err) => console.log(err));