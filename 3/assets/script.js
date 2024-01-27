let ele = document.getElementById("ele1");

function paint(color = "green") {
  ele.style.backgroundColor = color;
}

paint();

ele.addEventListener("click", function () {
  paint("yellow");
});
