var student = {
    name: 'Ram',
    age: 20,
    hobbies: ['dance', 'music'],
    greet: function greet() {
      console.log('Good Day');
    },
    address: {
      city: 'Bangalore',
      state: 'KR'
    }
  }
  var jsonstring = JSON.stringify(student);
  console.log(jsonstring);
  var jsobj = JSON.parse(jsonstring);
  console.log(jsobj.age);