"use strict";
const gasolinCal = () => {
  let price = document.querySelector("#price").value;
  let money = document.querySelector("#money").value;
  let text = document.querySelector("#money");
  const amount = Math.round(+money / +price);
  const output = `You could get about ${amount} letters, ${
    amount > 10 ? "good, you can escape now" : "Ups, you have to stay here."
  }`;
  document.querySelector(".result").textContent = output;
  document.querySelector("#price").value = "";
  document.querySelector("#money").value = "";
};

document.querySelector("#cal").addEventListener("click", gasolinCal);

//Temp converter
const cel = (id) => {
  let celci = document.querySelector("#celci");
  let fahrn = document.querySelector("#fahrn");
  let kel = document.querySelector("#kel");
  if (id === "celci") {
    fahrn.value = ((+celci.value * 9) / 5 + 32).toFixed(2);
    kel.value = (+celci.value + 273.15).toFixed(2);
  } else if (id === "fahrn") {
    celci.value = (((+fahrn.value - 32) * 5) / 9).toFixed(2);
    kel.value = (((+fahrn.value tem_input- 32) * 5) / 9 + 273.15).toFixed(2);
  } else if (id === "kel") {
    celci.value = (+kel.value - 273.15).toFixed(2);
    fahrn.value = (((+kel.value - 273.15) * 9) / 5 + 32).toFixed(2);
  }
  // empty each field if one field is empty
  document.querySelectorAll(".tem_input input").forEach((item) => {
    item.addEventListener("input", function () {
      if (this.value === "") {
        celci.value = "";
        fahrn.value = "";
        kel.value = "";
      }
    });
  });
};

// using for forEach and event hendelar

// document.querySelectorAll(".tem_input input").forEach((item) =>
//   item.addEventListener("input", function () {
//     const id = this.id;
//     if (id === "celci") {
//       fahrn.value = Math.round((+celci.value * 9) / 5 + 32);
//       kel.value = Math.round(+celci.value + 273.15);
//     } else if (id === "fahrn") {
//       celci.value = Math.round(((+fahrn.value - 32) * 5) / 9);
//       kel.value = Math.round(((+fahrn.value - 32) * 5) / 9 + 273.15);
//     } else if (id === "kel") {
//       celci.value = Math.round(+kel.value - 273.15);
//       fahrn.value = Math.round(((+kel.value - 273.15) * 9) / 5 + 32);
//     }
//   })
// );

//Nodelist
// const nodelist = [...document.querySelectorAll("p")];
// console.log(nodelist);
