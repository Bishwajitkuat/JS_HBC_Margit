function randomNumber() {
  first_num = Number(prompt("First Number:"));
  second_num = Number(prompt("Second number:"));
  third_num = Number(prompt("Third number:"));

  // num_list = [first_num, second_num, third_num];
  // positive_num = num_list.filter((item) => item > -1).length;
  let positive_num = 0;
  if (first_num > -1) {
    positive_num += 1;
  }
  if (second_num > -1) {
    positive_num += 1;
  }
  if (third_num > -1) {
    positive_num += 1;
  }

  let sum = 0;
  let multi = 0;
  if (positive_num >= 1) {
    sum = first_num + second_num + third_num;
    console.log("Sum: ", sum);
  }
  if (positive_num === 3) {
    multi = first_num * second_num * third_num;
    console.log("Multiplication: ", multi);
  }
  if (positive_num === 0) {
    console.log("only negatives");
  }
}

randomNumber();
