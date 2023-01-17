//Guess what answers you would get if you ran this in the Javascript Console.
// Once you have an answer to the questions then check them by copying them and running it in the console yourself line by line

//Evaluate the below:
3 + 65; // 68
console.log(3 + 65);
3 + "65"; //results: 365, + convert number to str and end with concatanation
console.log(3 + "65");
7 - "3"; //result 4, - convert str to number
console.log(7 - "3");
15 % 5; //result is 0 because there is no remainder
console.log(15 % 5);
5 % 15; //result is 5 because 15 can not devide 5 plainly
console.log(5 % 15);
"Java" + "Script"; //result: JavaScript
console.log("Java" + "Script");
"Java" - "Script"; // result is NaN, because - convet str to number but "Java" converted into NaN, NaN - NaN is NaN
console.log("Java" - "Script");
console.log(NaN - NaN); // NaN

" " + " "; // result: " "
console.log(" " + " ");
" " + 0; // result: 0
console.log(" " + 0);
true + true; //  true = 1 and false = 0 in calculation, 2
console.log(true + true);
true + false; // 1
console.log(true + false);
false + true; // 1
console.log(false + true);
false - true; // -1
console.log(false - true);
3 - 4; // -1
console.log(3 - 4);

//Evaluate the below comparisons:
4 >= 2; // true
console.log(4 >= 2);
6 === 2; // false
console.log(6 === 2);
3 <= 1; // false
console.log(3 <= 1);
1 != 1; // false
console.log(1 != 1);
"A" > "B"; // false because code number of a is lower than b
console.log("A" > "B");
"B" < "C"; // true
console.log("B" < "C");
"a" > "A"; // true
console.log("a" > "A");
"b" < "A"; // false
console.log("b" < "A");
true === false; // false
console.log(true === false);
true != true; // false
console.log(true != true);

// Display the string:
// "Go To Helsinki Business College," they said. "It'll Will Be "Fun"," they said.

const name = "Mikko";
const student = name;
// alert(student);

// usefull method of Window
// const full_name = window.prompt("Please enter you name");
// console.log(typeof full_name);
// document.querySelector("h2").textContent = `Your name is ${full_name}`;
// confirm("Is your name printed correctly!");

// basic function
function sum(x, y) {
  return x + y;
}
console.log(sum(2, 3));

// function do not execute any code after return

function sum1(x, y) {
  return x + y;
  console.log(`x = ${x} and y = ${y}`);
}
console.log(sum1(3, 3));

function sum2(x, y) {
  console.log(`x = ${x} and y = ${y}`);
  return x + y;
}
console.log(sum2(4, 5));

//millitary_service program

function military_service_age() {
  const age = Number(prompt("How old are you?"));
  if (age < 18) console.log("too young");
  else if (age < 27) console.log("Right age for military service");
  else if (age < 41) console.log("You are in reserve");
  else if (age < 55) console.log("You are in backup reserve");
  else console.log("too aged");
}
military_service_age();

// Salary calculator

function salaryCal() {
  const hour = Number(prompt("How many hours have you worked today?"));
  const salaryRate = Number(prompt("How much is hourly salary?"));
  if (hour <= 7) console.log(`Your salary is: ${hour * salaryRate}`);
  else if (hour <= 9)
    console.log(
      `Your salary is:${7 * salaryRate + (hour - 7) * salaryRate * 1.5}`
    );
  else
    console.log(
      `Your salary is:${
        7 * salaryRate +
        (hour - 7) * salaryRate * 1.5 +
        (hour - 9) * salaryRate * 2
      }`
    );
}

salaryCal();
