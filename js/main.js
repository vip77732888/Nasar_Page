var header = document.getElementById("nav__header");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active__lg");
    current[0].className = current[0].className.replace(" active__lg", " ");
    this.className += " active__lg";
  });
}
