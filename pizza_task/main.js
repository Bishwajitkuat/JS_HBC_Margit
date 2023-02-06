document.querySelector("form").addEventListener("change", orderSum);
//global variables
let pizza_price = 0;
let topps_num = 0;
let deli_price = 0;
// adding hide class to address divs
document.querySelector("#summery_address_id").classList.add("hide");
document.querySelector("#address_id").classList.add("hide");

//functions for ordersummer part
function orderSum(e) {
  e.preventDefault();
  // variables
  const coustomer_name = document.querySelector("#coustomer_name_id");
  const pizza_size = document.querySelector("#order_size_id");
  const pizza_quantity = document.querySelector("#order_size_quantity");
  const pizza_size_price = document.querySelector("#order_size_price");
  const toppings = document.querySelector("#order_toppings_id");
  const toppings_quantity = document.querySelector("#toppings_quantity_id");
  const toppings_price = document.querySelector("#toppinngs_price_id");
  const order_total = document.querySelector("#order_total_id");
  const delivery_method = document.querySelector("#order_delivery_id");
  const home_deli_price = document.querySelector("#home_deli_price_id");
  const sum_deli_address = document.querySelector("#sum_deli_address_id");
  let selected_topps = "";
  // customer name update
  if (e.target.id === "input_name") {
    coustomer_name.textContent = e.target.value; //e.target.value;
  }
  //pizza size update
  if (e.target.id === "size_2") {
    pizza_size.textContent = "Size 2";
    pizza_quantity.textContent = 1;
    pizza_size_price.textContent = "7,50€";
    pizza_price = 7.5;
  } else if (e.target.id === "size_4") {
    pizza_size.textContent = "Size 4";
    pizza_quantity.textContent = 1;
    pizza_size_price.textContent = "10,50€";
    pizza_price = 10.5;
  } else if (e.target.id === "size_6") {
    pizza_size.textContent = "Size 6";
    pizza_quantity.textContent = 1;
    pizza_size_price.textContent = "12,50€";
    pizza_price = 12.5;
  } else if (e.target.id === "size_8") {
    pizza_size.textContent = "Size 8";
    pizza_quantity.textContent = 1;
    pizza_size_price.textContent = "15,50€";
    pizza_price = 15.5;
  }

  //toppings

  if (e.target.type === "checkbox") {
    topps_num = 0;
    document.querySelectorAll(".toppings_options input").forEach((item) => {
      if (item.checked) {
        if (item.id === "mushroom") {
          selected_topps += " Mushroom,";
          topps_num++;
        }
        if (item.id === "pepperoni") {
          selected_topps += " Pepperoni,";
          topps_num++;
        }
        if (item.id === "ex_cheese") {
          selected_topps += " Extra cheese,";
          topps_num++;
        }
        if (item.id === "garlic") {
          selected_topps += " Fresh garlic,";
          topps_num++;
        }

        if (item.id === "basil") {
          selected_topps += " Basil,";
          topps_num++;
        }
        if (item.id === "tomato") {
          selected_topps += " Tomato,";
          topps_num++;
        }
        if (item.id === "onion") {
          selected_topps += " Onion,";
          topps_num++;
        }
        if (item.id === "chilli") {
          selected_topps += " Chilli,";
          topps_num++;
        }
        if (item.id === "olive") {
          selected_topps += " Olive,";
          topps_num++;
        }
        if (item.id === "pepper") {
          selected_topps += " Green pepper,";
          topps_num++;
        }
      }
    });
    toppings.textContent = `${selected_topps.slice(0, -1)}`;
    toppings_quantity.textContent = topps_num;
    // toppings price claculation
    let topp_price = 0;
    if (topps_num && topps_num > 4) {
      toppings_price.textContent = `${(topps_num - 4) * 0.5}€`;
    } else toppings_price.textContent = "0€";
  }

  // delivery Method
  if (e.target.id === "delivery_method") {
    deli_price = 0;
    if (e.target.value === "home") {
      delivery_method.textContent = "Home delivery";
      deli_price = 5;
    } else if (e.target.value === "non") {
      delivery_method.textContent = "Non";
    } else if (e.target.value === "pickup") {
      delivery_method.textContent = "Pickup";
    } else if (e.target.value === "eat_in") {
      delivery_method.textContent = "Eat in";
    }
    home_deli_price.textContent = `${deli_price}€`;
  }
  // total price calculation
  let total_price = 0;
  if (topps_num > 4) {
    total_price = pizza_price + (topps_num - 4) * 0.5 + deli_price;
  } else {
    total_price = pizza_price + deli_price;
  }
  order_total.textContent = `${total_price.toFixed(2)}€`;
}
