// alert("hello");

let modal = $(".modalBox");

$(".btn-order").click(function () {
  modal.show();
});

let q = document.getElementById("size");
let w = document.getElementById("crusts");
let z = document.getElementById("topping");

function myFunction() {
  if (q.value == "Small" && w.value == "Crispy" && z.value == "Hawaiian") {
    let pizzaPrice1 = sizePrice[0] + crustPrice[0] + toppingsPrice[0];
    document.getElementById("info").innerText = pizzaPrice1;
  }
  if (q.value == "Small" && w.value == "Crispy" && z.value == "Barbeque") {
    let pizzaPrice2 = sizePrice[0] + crustPrice[0] + toppingsPrice[1];
    document.getElementById("info").innerText = pizzaPrice2;
  }
  if (q.value == "Small" && w.value == "Crispy" && z.value == "Olive") {
    let pizzaPrice3 = sizePrice[0] + crustPrice[0] + toppingsPrice[2];
    document.getElementById("info").innerText = pizzaPrice3;
  }
  if (q.value == "Small" && w.value == "Stuffed" && z.value == "Hawaiian") {
    let pizzaPrice4 = sizePrice[0] + crustPrice[1] + toppingsPrice[0];
    document.getElementById("info").innerText = pizzaPrice4;
  }
  if (q.value == "Small" && w.value == "Stuffed" && z.value == "Barbeque") {
    let pizzaPrice5 = sizePrice[0] + crustPrice[1] + toppingsPrice[1];
    document.getElementById("info").innerText = pizzaPrice5;
  }
  if (q.value == "Small" && w.value == "Stuffed" && z.value == "Olive") {
    let pizzaPrice6 = sizePrice[0] + crustPrice[1] + toppingsPrice[2];
    document.getElementById("info").innerText = pizzaPrice6;
  }
  if (q.value == "Small" && w.value == "Gluten-free" && z.value == "Hawaiian") {
    let pizzaPrice7 = sizePrice[0] + crustPrice[0] + toppingsPrice[0];
    document.getElementById("info").innerText = pizzaPrice7;
  }
  if (q.value == "Small" && w.value == "Gluten-free" && z.value == "Barbeque") {
    let pizzaPrice8 = sizePrice[0] + crustPrice[1] + toppingsPrice[1];
    document.getElementById("info").innerText = pizzaPrice8;
  }
  if (q.value == "Small" && w.value == "Gluten-free" && z.value == "Olive") {
    let pizzaPrice9 = sizePrice[0] + crustPrice[2] + toppingsPrice[2];
    document.getElementById("info").innerText = pizzaPrice9;
  }

  // pricing fr medium
  if (q.value == "Medium" && w.value == "Crispy" && z.value == "Hawaiian") {
    let pizzaPrice10 = sizePrice[1] + crustPrice[0] + toppingsPrice[0];
    document.getElementById("info").innerText = pizzaPrice10;
  }
  if (q.value == "Medium" && w.value == "Crispy" && z.value == "Barbeque") {
    let pizzaPrice11 = sizePrice[1] + crustPrice[0] + toppingsPrice[1];
    document.getElementById("info").innerText = pizzaPrice11;
  }
  if (q.value == "Medium" && w.value == "Crispy" && z.value == "Olive") {
    let pizzaPrice12 = sizePrice[1] + crustPrice[0] + toppingsPrice[2];
    document.getElementById("info").innerText = pizzaPrice12;
  }
  if (q.value == "Medium" && w.value == "Stuffed" && z.value == "Hawaiian") {
    let pizzaPrice13 = sizePrice[1] + crustPrice[1] + toppingsPrice[0];
    document.getElementById("info").innerText = pizzaPrice13;
  }
  if (q.value == "Medium" && w.value == "Stuffed" && z.value == "Barbeque") {
    let pizzaPrice14 = sizePrice[1] + crustPrice[1] + toppingsPrice[1];
    document.getElementById("info").innerText = pizzaPrice14;
  }
  if (q.value == "Medium" && w.value == "Stuffed" && z.value == "Olive") {
    let pizzaPrice15 = sizePrice[1] + crustPrice[1] + toppingsPrice[2];
    document.getElementById("info").innerText = pizzaPrice15;
  }
  if (
    q.value == "Medium" &&
    w.value == "Gluten-free" &&
    z.value == "Hawaiian"
  ) {
    let pizzaPrice16 = sizePrice[1] + crustPrice[0] + toppingsPrice[0];
    document.getElementById("info").innerText = pizzaPrice16;
  }
  if (
    q.value == "Medium" &&
    w.value == "Gluten-free" &&
    z.value == "Barbeque"
  ) {
    let pizzaPrice17 = sizePrice[1] + crustPrice[1] + toppingsPrice[1];
    document.getElementById("info").innerText = pizzaPrice17;
  }
  if (q.value == "Medium" && w.value == "Gluten-free" && z.value == "Olive") {
    let pizzaPrice18 = sizePrice[1] + crustPrice[2] + toppingsPrice[2];
    document.getElementById("info").innerText = pizzaPrice18;
  }
  // size large
  if (q.value == "Large" && w.value == "Crispy" && z.value == "Hawaiian") {
    let pizzaPrice19 = sizePrice[2] + crustPrice[0] + toppingsPrice[0];
    document.getElementById("info").innerText = pizzaPrice19;
  }
  if (q.value == "Large" && w.value == "Crispy" && z.value == "Barbeque") {
    let pizzaPrice20 = sizePrice[2] + crustPrice[0] + toppingsPrice[1];
    document.getElementById("info").innerText = pizzaPrice20;
  }
  if (q.value == "Large" && w.value == "Crispy" && z.value == "Olive") {
    let pizzaPrice21 = sizePrice[2] + crustPrice[0] + toppingsPrice[2];
    document.getElementById("info").innerText = pizzaPrice21;
  }
  if (q.value == "Large" && w.value == "Stuffed" && z.value == "Hawaiian") {
    let pizzaPrice22 = sizePrice[2] + crustPrice[1] + toppingsPrice[0];
    document.getElementById("info").innerText = pizzaPrice22;
  }
  if (q.value == "Large" && w.value == "Stuffed" && z.value == "Barbeque") {
    let pizzaPrice23 = sizePrice[2] + crustPrice[1] + toppingsPrice[1];
    document.getElementById("info").innerText = pizzaPrice23;
  }
  if (q.value == "Large" && w.value == "Stuffed" && z.value == "Olive") {
    let pizzaPrice24 = sizePrice[2] + crustPrice[1] + toppingsPrice[2];
    document.getElementById("info").innerText = pizzaPrice24;
  }
  if (q.value == "Large" && w.value == "Gluten-free" && z.value == "Hawaiian") {
    let pizzaPrice25 = sizePrice[2] + crustPrice[0] + toppingsPrice[0];
    document.getElementById("info").innerText = pizzaPrice25;
  }
  if (q.value == "Large" && w.value == "Gluten-free" && z.value == "Barbeque") {
    let pizzaPrice26 = sizePrice[2] + crustPrice[1] + toppingsPrice[1];
    document.getElementById("info").innerText = pizzaPrice26;
  }
  if (q.value == "Large" && w.value == "Gluten-free" && z.value == "Olive") {
    let pizzaPrice27 = sizePrice[2] + crustPrice[2] + toppingsPrice[2];
    document.getElementById("info").innerText = pizzaPrice27;
  }
}

let toppingsPrice = [700, 800, 900];
let sizePrice = [70, 80, 100];
let crustPrice = [30, 40, 80];

// let q = document.getElementById("small");
// let w = document.getElementById("medium");
// let z = document.getElementById("large");

// let g = document.getElementById("soft");
// let h = document.getElementById("thin");
// let k = document.getElementById("thick");

// // let hawaii = document.getElementById("hawaii");
// // let bbq = document.getElementById("bbq");
// // let olive = document.getElementById("olive");

// function hawaii() {
//   let toppings1 = "hawaii";
//   let priceHawaii = toppingsPrice[0];
//   return priceHawaii;
// }
// function myFunction() {
//   // document.getElementById("info").innerText = sizePrice[2];
//   if (q.value == "small" && g.value == "soft") {
//     console.log(500);
//   }
// }
// console.log(q.value);

// function bbq() {
//   let toppings2 = "barbeque";
//   let priceBbq = toppingsPrice[1];
//   return priceBbq;
// }
// function olive() {
//   let toppings3 = "Olive";
//   let priceOlive = toppingsPrice[2];
//   return priceOlive;
// }
// console.log(hawaii());

// function Choice(price1, price2, price3) {
//   this.price1 = price1;
//   this.price1 = price2;
//   this.price1 = price3;
// }
// $(document).ready(function () {
//   $("form");
// });
// let choice = new choice();
// cart
// $function(){
//   let goToCartIcon=function($addToCartBtn){
//     let $cartIcon =$('.my-cart-icon');
//     let image=$('<img width="30px" height="30px" src="' + $addToCartBtn.data("image")+'"/>').css({"position": "fixed", "z-index": "999"});
//     $addTocartBtn.prepend($image);
//       var position = $cartIcon.position();
//       $image.animate({
//         top: position.top,
//         left: position.left
//       }, 500 , "linear", function() {
//         $image.remove();
//       });
//     }

// }
// cart
