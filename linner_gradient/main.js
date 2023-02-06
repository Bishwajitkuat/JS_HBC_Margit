document.querySelector("form").addEventListener("change", function () {
  const first_color = document.querySelector("#first_color").value;
  const second_color = document.querySelector("#second_color").value;
  console.log(first_color, second_color);

  document.querySelector(
    "body"
  ).style.background = `linear-gradient(${first_color}, ${second_color})`;
});
