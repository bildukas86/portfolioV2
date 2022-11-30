
//animated hamburger icon
function hamFunction(x) {

  x.classList.toggle("change");
  
//hide /unhide nav list
  var n = document.getElementsByClassName("navigation");

  if (n.style.display === "block"){
    n.style.display = "none";
  } else {
    n.style.display = "block";
  }

}
