function addTwoNumbers(num1, num2) {
  return num1 + num2;
}
var sum = addTwoNumbers(4, 4);
console.log('sum', sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}
var minutes = convertHoursToMinutes(2);
console.log('minutes', minutes);

function getGreeting(name) {
  return 'Hello ' + name + '!';
}
var greet = getGreeting('World');
console.log(greet);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}
var multByFive = addAndMultiplyBy5(10, 5);
console.log(multByFive);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}
var divByFive = multiplyAndDivideBy5(35, 10);
console.log(divByFive);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}
var difference = subtractTwoNumbers(22, 7);
console.log(difference);

function getCircleCircumference(radius) {
  return 2 * radius * 3.14159;
}
var circumference = getCircleCircumference(5);
console.log(circumference);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}
var fullName = getFullName('Juan', 'Ramirez');
console.log(fullName);

function cube(number) {
  return number * number * number;
}
var cubed = cube(5);
console.log(cubed);
