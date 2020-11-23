//This does not cover all the JavaScript commands. This is just meant to be a basic introduction to JavaScript.
//Javascript console API
console.log("Hello World");
console.warn("This is a warning");
console.error("This is an error");
console.clear();

//Javascript variables
var number1 = 50;
var number2 = 100;
console.log(number1+number2);

var firstname = "Zeaan";
var lastname = "Pithawala";
console.log(firstname,lastname);

//Objects
var marks = {
    zeaan : 100,
    rachit : 98,
    akash : 95,
    XYZ : 85
}
console.log(marks);

/*
Primitive datatypes: undefined, null, number, string, boolean, symbol
Reference datatypes: arrays, objects
*/

//Array
var array = [1,2,"Zeaan",4,5]
console.log(array);
console.log(array[0]);
console.log(array[2]);
console.log(array[4]);

//Functions
function avg(a,b){
    return (a+b)/2;
}
c1 = avg(4,8);
c2 = avg(5,15);
console.log(c1,c2);

//If and else
var age = 18;
if(age<13){
    console.log("You are a kid");
}
else if(age>12 || age<20){
    console.log("You are a teenager");
}
else{
    console.log("You are an adult");
}

//For loop
for(var i=0; i<array.length; i++){
    console.log(array[i])
}

//while loop
//We can use let instead of var
//We would use let instead of var because var is old
let j = 0;
while(j<array.length){
    console.log(array[j]);
    j++;
}

//do while loop
do
{
    console.log(array[j]);
    j++;
}
while(j<array.length);

//For declaring constant, we use const
const pi = 3.14;

//Array methods
//Returns length of an array
console.log(array.length);
//Removes last element
array.pop();
//Adds an element to the array
array.push("Pithawala");
//Removes the first element from the array
array.shift();
//It places the element in the first position
array.unshift("Ok");
//Converts an array into string
array.toString();
//Sorts the array
let numbers = [55,96,32,7,25];
numbers.sort();
console.log(array);
console.log(numbers);

//Strings
let s = "Hello, I am Zeaan and I am a developer";
console.log(s.length);
console.log(s.indexOf("I"));
console.log(s.lastIndexOf("I"));
console.log(s.slice(0,7));

//Date
let mydate = new Date();
console.log(mydate);
console.log(mydate.getFullYear());
console.log(mydate.getTime());
console.log(mydate.getDay());
console.log(mydate.getMinutes());
console.log(mydate.getHours());
