let first_color = document.querySelector("#first_color");
let second_color = document.querySelector("#second_color");
let degree = 0;
let dir_id;

document.querySelector("form").addEventListener("input", function (e) {
  e.preventDefault();

  if (e.target.type === "radio") {
    degree = e.target.value;
    dir_id = e.target.id;
  }

  document.querySelector(
    "body"
  ).style.backgroundImage = `linear-gradient(${degree}deg ,${first_color.value}, ${second_color.value})`;
  document.querySelector("#color1").textContent = `${first_color.value}  to `;
  document.querySelector("#color2").textContent = second_color.value;
  document.querySelector("#dir_star").textContent = `From ${dir_id}`;
});
