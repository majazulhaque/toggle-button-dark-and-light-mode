import "./styles.css";
var toogleDiv = document.getElementById("toggleBtn");
var btnDiv = document.getElementById("btn");
var flag = false;
function darkmode() {
  if (flag === false) {
    document.body.style.backgroundColor = "black";
    btnDiv.style.marginLeft = "auto";
    flag = true;
  } else {
    document.body.style.backgroundColor = "white";
    btnDiv.style.marginLeft = "0px";
    flag = false;
  }
}
btnDiv.addEventListener("click", darkmode);
