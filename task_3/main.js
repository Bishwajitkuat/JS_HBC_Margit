const number = Number(
  prompt("Please input a number! I will tell you, it's Odd or Even.")
);
function oddOreven(num) {
  const result = num % 2 === 0 ? "even" : "odd";
  console.log(`${num} is ${result}`);
}

oddOreven(number);
