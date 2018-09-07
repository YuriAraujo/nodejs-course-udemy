const express = require('express');

let app = express();

app.get('/', (req, res) => {
	res.sendStatus(404).send({
		error: 'Page not found',
		name: 'Todo App v1.0'
	});
});

app.listen(3000);
module.exports.app = app;