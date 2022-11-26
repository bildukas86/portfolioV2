
//animated hamburger icon
function hamFunction(x) {

  x.classList.toggle("change");

  var s = document.getElementById('sideNav');
  var b = document.body;
  var m = document.getElementById('main-container');

  
    if (s.style.display === "block"){
     s.style.display = "none";
     b.style.overflow = "visible";
     b.style.left = "0";
     m.style.opacity = "1";

    } else {
      s.style.display = "block";
      b.style.overflow = "hidden";
      b.style.left = "-275px";
      m.style.opacity = "0.3";


    }
}
