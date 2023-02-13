const nav = document.querySelector("nav");
const btn = document.querySelector("#btn_menu");
const list = document.querySelector("nav ul");

btn.addEventListener("click", show_menue);

function show_menue() {
  if (nav.classList.contains("show")) {
    nav.classList.remove("show");
    list.classList.remove("show1");
  } else {
    nav.classList.add("show");
    list.classList.remove("show1");
  }
}
