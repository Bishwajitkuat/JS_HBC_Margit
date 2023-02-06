document.querySelector("form").addEventListener("change", sumCal);
// global Veriabals
let total_price = 0;
let prizza_price = 0;
let topp_price = 0;
let deli_price = 0;
let topp_list = [];

function sumCal(e) {
  e.preventDefault();
  // veriables

  const input_name = document.querySelector("#order_name_id").value;
  const sum_name = document.querySelector("#sum_name_id");
  const sum_size = document.querySelector("#sum_size_id");
  const input_topp_options = document.querySelectorAll(".toppings input");
  const sum_topp = document.querySelector("#sum_topp_id");
  const input_deli = document.querySelector("#deli");
  const sum_deli = document.querySelector("#sum_deli_id");
  const sum_total = document.querySelector("#sum_total_id");
  console.log("total price begining", total_price);
  // coustomar name update
  sum_name.textContent = input_name;

  // size update
  if (e.target.id === "size_2") {
    sum_size.textContent = "Size 2, price: 7.50€";
    prizza_price = 7.5;
  } else if (e.target.id === "size_4") {
    sum_size.textContent = "Size 4, price: 10.50€";
    prizza_price = 10.5;
  } else if (e.target.id === "size_6") {
    sum_size.textContent = "Size 6, price: 12.50€";
    prizza_price = 12.5;
  } else if (e.target.id === "size_8") {
    sum_size.textContent = "Size 8, price: 15.50€";
    prizza_price = 15.5;
  }

  //toppings update
  if (e.target.type === "checkbox") {
    topp_list = [];
    input_topp_options.forEach((item) => {
      if (item.checked) {
        topp_list.push(item.id);
      }
    });
  }

  const topp_text = topp_list.join(", ");
  sum_topp.textContent = topp_text;

  // delivery method
  if (e.target.id === "deli") {
    sum_deli.textContent = e.target.value;
  }

  if (e.target.id === "deli" && e.target.value === "home") {
    deli_price = 5;
  } else {
    deli_price = 0;
  }
  // total price calculation
  console.log(total_price);
  console.log(prizza_price);

  let topp_num = topp_list.length;
  console.log("top_num: ", topp_num);
  if (topp_num > 4) {
    topp_price = (topp_num - 4) * 0.5;
  } else {
    topp_price = 0;
  }

  total_price = prizza_price + topp_price + deli_price;

  console.log(total_price);
  console.log(prizza_price);

  sum_total.textContent = `${total_price.toFixed(2)}€`;
}
