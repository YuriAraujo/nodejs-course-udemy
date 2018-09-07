const request = require('supertest');
const expect = require('expect');

let app = require('./server').app;

// it('should return hello page not found', (done) => {
// 	request(app)
// 		.get('/')
// 		.expect(404)
// 		.expect((res) => {
// 			expect(res.body).toInclude({
// 				error: 'Page not found'
// 			});
// 		})
// 		.end(done);
// });