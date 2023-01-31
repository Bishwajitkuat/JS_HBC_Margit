document.querySelector("form").addEventListener("change", orderSum);
//global variables
let pizza_price;
let topps_num;
//functions for ordersummer part
function orderSum(e) {
  e.preventDefault();
  // variables
  const coustomer_name = document.querySelector("#coustomer_name_id");
  const pizza_size = document.querySelector("#order_size_id");
  const toppings = document.querySelector("#order_toppings_id");
  const order_total = document.querySelector("#order_total_id");
  let selected_topps = "";
  // customer name update
  if (e.target.id === "input_name") {
    coustomer_name.textContent = e.target.value; //e.target.value;
  }
  //pizza size update

  if (e.target.id === "size_2") {
    pizza_size.textContent = "Pizza size 2, price: 7,50€";
    pizza_price = 7.5;
  } else if (e.target.id === "size_4") {
    pizza_size.textContent = "Pizza size 4, price: 10,50€";
    pizza_price = 10.5;
  } else if (e.target.id === "size_6") {
    pizza_size.textContent = "Pizza size 6, price: 12,50€";
    pizza_price = 12.5;
  } else if (e.target.id === "size_8") {
    pizza_size.textContent = "Pizza size 8, price: 15,50€";
    pizza_price = 15.5;
  }

  //toppings

  if (e.target.type === "checkbox") {
    topps_num = 0;
    document.querySelectorAll("table input").forEach((item) => {
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
    toppings.textContent = `${selected_topps.slice(0, -1) + "."}`;
  }
  console.log("pizza price: ", pizza_price);
  console.log("topping number: ", topps_num);
  let total_price = 0;
  if (pizza_price && topps_num && topps_num > 4) {
    total_price = pizza_price + (topps_num - 4) * 0.5;
  } else if (pizza_price) {
    total_price = pizza_price;
  }
  order_total.textContent = `${total_price.toFixed(2)}€`;
  console.log("final price: ", total_price);
}
