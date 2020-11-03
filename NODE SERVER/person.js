const Person = require('./personexport');
var person = require('./personexport');
var person = new Person('Praveen','Bangalore');
person.printDetails();
person.greetMessage('Have a good day');
console.log(person.mobile)