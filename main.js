
//animated hamburger icon
function hamFunction(x) {
//   var element = document.getElementsByClassName('nav-xs'); // or any other element
// console.log(element); // logs the expandable <html>…</html>
// console.dir(element); // logs the element’s properties and values
  x.classList.toggle("change");

  var n = document.getElementsByClassName("navigation");

  if (n.style.display === "block"){
    n.style.display = "none";
  } else {
    n.style.display = "block";
  }

}
