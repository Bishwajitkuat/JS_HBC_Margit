// element.classList.contains(class_name)
// element.classList.toggle(class_name)
// element.classList.replace(old_name, new_name)
// element.calssList.add()
// element.classList.remove()

// variables
const btn__back = document.querySelector("#backToTop");
const header = document.querySelector("header");
const btn_nemu = document.querySelector("#btn_nemu");
const nav_ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");
const list_item = document.querySelectorAll("nav ul li a");
const doNotClick = document.querySelector("#doNotClick");
const overlay = document.querySelector(".overlay");
const close_btn = document.querySelector("#modal_btn");

//
const scrollFunction = () => {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    btn__back.style.display = "block";
    header.classList.add("header_bg");
  } else {
    btn__back.style.display = "none";
    header.classList.remove("header_bg");
  }
};

const getToTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

const expandMobileMenu = () => {
  for (const item of list_item) {
    item.addEventListener("click", expandMobileMenu);
  }
  if (nav_ul.classList.contains("responsive")) {
    nav.classList.remove("responsive");
    nav_ul.classList.remove("responsive");
  } else {
    nav.classList.add("responsive");
    nav_ul.classList.add("responsive");
  }
};

const modal_show_hide = () => {
  overlay.classList.toggle("visible");
};

// event listener functions
window.addEventListener("scroll", scrollFunction);
btn__back.addEventListener("click", getToTop);
btn_nemu.addEventListener("click", expandMobileMenu);
doNotClick.addEventListener("click", modal_show_hide);
close_btn.addEventListener("click", modal_show_hide);
