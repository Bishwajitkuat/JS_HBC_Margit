// Loop Assignments (Don’t use arrays)

// Make a program that prints all positive numbers that are odd and smaller than 100 starting from 1. (1 3 5 7 9 11…)

function oddPrinter() {
  for (let i = 1; i < 100; i += 2) {
    console.log(i);
  }
}
//oddPrinter();

// Make a program that prints all positive numbers that are smaller than 100 and even, in this order: 2 98 4 96 6 94 … Print result in one line.

function evenPrinter() {
  let answers = "";
  let end = 98;
  for (let i = 2; i < 100; i += 2) {
    answers += ` ${i} ${end} `;
    end -= 2;
  }
  console.log(answers);
}

//evenPrinter();

// Make a program that asks repeatedly from the user the distance (km) and time (h) and calculates average speed. The program ends when user gives 0 for the distance. (After getting 0, the program does not ask anything from the user.)

function speedCal() {
  while (true) {
    let distance = Number(prompt("Distance in km:"));
    if (distance === 0) {
      break;
    }
    let time = Number(prompt("Time in hours:"));
    let speed = distance / time;
    alert("The speed is: " + speed + " km/h.");
  }
}
//speedCal();

// Make a program that asks 20 numbers from user. After that the program prints out how many of those numbers where even.

function evenCounter() {
  let even_count = 0;
  for (let i = 1; i <= 20; i++) {
    let num = Number(prompt(`Number ${i}:`));
    num % 2 == 0 ? (even_count += 1) : "";
  }
  console.log("There was " + even_count + " even numbers");
}
//evenCounter();

// Make a program that asks numbers from the user, until user gives 0 and then program ends. In the end program prints out average of the numbers.

function avgCal() {
  let sum = 0;
  let count = 0;
  while (true) {
    let input = Number(prompt("Give me a number:"));
    if (input === 0) break;
    sum += input;
    count += 1;
  }
  let average = sum / count;
  console.log(`The average of ${count} numbers is ${average}`);
}
//avgCal();

// Make a program that asks 25 numbers form the user. In the end program prints out average of the numbers.

function avgCalFixed() {
  let sum = 0;
  for (let i = 1; i <= 25; i++) {
    sum += Number(prompt(`Number ${i}:`));
  }
  let average = sum / 25;
  console.log(`The average of 25 numbers is: ${average}`);
}
//avgCalFixed();

// Make a program that ask first one number from the user. After that the program asks: ”Do you want to continue giving numbers?(y/n)”. If user answers y, the program continues to ask another number. If user answers n, program ends. In the end program prints out average of the numbers.

function avgCalContinue() {
  let sum = Number(prompt("Give me a number:"));
  let count = 1;
  while (true) {
    let conti = prompt("Do you want to continue giving numbers?(y/n)");
    if (conti === "y") {
      sum += Number(prompt("Give me a number:"));
      count += 1;
    } else if (conti === "n") {
      break;
    }
  }
  let avg = sum / count;
  console.log(`The average is: ${avg}`);
}
//avgCalContinue();

// Make a program that asks first how many numbers user wants to give to the program. After that program asks those numbers. In the end program prints out the smallest number that user gave.

function smallest() {
  let count = Number(prompt("How many numbers do you want give:"));
  let smaller;
  for (let i = 0; i < count; i++) {
    let num = Number(prompt("Give me a number:"));
    i === 0 ? (smaller = num) : "";
    num < smaller ? (smaller = num) : "";
  }
  console.log(`The smallest number is ${smaller}`);
}

//mallest();

// Make a program that asks ten numbers and in the end prints out two biggest numbers.

function twoBiggest() {
  let biggest;
  let secondBiggest;
  for (let i = 0; i < 3; i++) {
    let num = Number(prompt("give me a number:"));
    // assigning value if does not have value
    if (!biggest) {
      biggest = num;
    } else if (biggest < num) {
      secondBiggest = biggest;
      biggest = num;
      // assigning value if does not have value
    } else if (!secondBiggest) {
      secondBiggest = num;
      // check if biggest is not bigger than input
    } else if (secondBiggest < num) {
      secondBiggest = num;
    }
  }
  console.log(
    `The largest number is: ${biggest} and second largest number is: ${secondBiggest}`
  );
}
//twoBiggest();

// Make a program that asks ten numbers. Program calculates and prints out sum and average, also prints out the smallest and biggest number.

function sumAvgSmlLrg() {
  let sum = 0;
  let count = 0;
  let smallest;
  let largest;
  for (let i = 0; i < 4; i++) {
    num = Number(prompt("Give me a number:"));
    if (!smallest && !largest) {
      smallest = num;
      largest = num;
    }
    largest < num ? (largest = num) : "";
    smallest > num ? (smallest = num) : "";
    sum += num;
    count += 1;
  }
  console.log(
    `Sum: ${sum}, Average: ${
      sum / count
    }, Largest: ${largest} and Smallest: ${smallest}`
  );
}

//sumAvgSmlLrg();
// let list = [1, 2, 3, 4];
// let x = list.map((item) => item ** 2).reduce((acc, item) => acc + item);
// console.log(x);
let y = new Array(10)
  .fill(0)
  .map((item, index) => index + 1)
  .reduce((a, i) => a + i, 0);
console.log(y);
