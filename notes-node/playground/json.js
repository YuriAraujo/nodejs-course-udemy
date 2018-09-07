// var obj = {
//     name: 'Yuri'
// };
// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

// var personString= '{"name": "Yuri", "age": 25}';
// var person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);

const fs = require('fs');

var originalNote = {
  title: "Some title",
  body: "Some body"
};

let stringObj = JSON.stringify(originalNote);
console.log(stringObj, typeof stringObj);
fs.writeFileSync('notes.json', stringObj);

let obj = JSON.parse(stringObj);
console.log(obj.title, typeof obj);