// show-hide navigation
function hamFunction(x){
  //add class
  x.classList.toggle("change");

  // open/close navigation
  var n = document.getElementById('nav');

  n.classList.toggle("vis-on");

}
//pridesim sita: https://codepen.io/sanskarbansal/pen/ExjqRmx
//pamokos https://medium.com/front-end-weekly/how-to-create-typing-effect-in-css-and-js-3252dd807f0a


////////////////////
// typing effect  https://codepen.io/rmhridoy/pen/ZEJqqaP
///////////////////

// type js plugin
// let typeJsText = document.querySelector(".typeJsText");
// let textArray = typeJsText.dataset.typetext.split("");
// let counter = -1;
//
// typeJsText.innerHTML = "";
//
// function typeJs() {
//   if (counter < typeJsText.dataset.typetext.length) {
//     counter++;
//     typeJsText.innerHTML += typeJsText.dataset.typetext.charAt(counter);
//     textArray = typeJsText.dataset.typetext.split("");
//   } else {
//     textArray.pop();
//     typeJsText.innerHTML = textArray.join("");
//     if (textArray.length == 0) {
//       counter = -1;
//     }
//   }
// }
//
// setInterval(() => {
//   typeJs();
// }, 100);
