
function hamFunction(x){
  //add class
  x.classList.toggle("change");

  // open/close navigation
  var n = document.getElementById('nav');
  if (n.style.display === "block"){
       n.style.display = "none";
     } else {
       n.style.display = "block";
     }
}
