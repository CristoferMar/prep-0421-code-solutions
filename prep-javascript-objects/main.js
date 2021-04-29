var person = {
  firstName: 'Cristofer',
  lastName: 'Martinez',
  hobby: 'Eating'
};
console.log(person);

var fullName = person.firstName + ' ' + person.lastName;
console.log("The person's name is: " + fullName);

person.job = 'Finance Specialist';
console.log("The person's current job is: " + person.job);

person.previousJob = "Teacher's Assistant";
console.log("The person's previous job is: " + person.previousJob);

console.log('The complete person object: ', person);

var myCar = {
  make: 'Ford',
  model: 'Model T',
  year: '1908'
};

console.log('Car infomration:', myCar);

myCar['owner'] = fullName;

console.log('My name is ' + person.firstName + ' ' + person.lastName + ' and I drive a ' + myCar.year + ' ' + myCar.make + ' ' + myCar.model);

myCar['color'] = 'Blue';

console.log('My full car info: ', myCar);
