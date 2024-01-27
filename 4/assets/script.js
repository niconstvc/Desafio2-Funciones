
const colorDivs = document.querySelectorAll(".color-div");
colorDivs.forEach((div) => {
  div.addEventListener("click", () => {
    div.style.backgroundColor = "black";
  });
});

const key = document.getElementById("key");

const keys = {
  a: "#F10FC8",
  s: "#F16C0F",
  d: "#3498DB",
  other: "white",
};

document.addEventListener("keydown", function (event) {
  if (event.key === "a") {
    key.style.backgroundColor = keys["a"];
  } else if (event.key === "s") {
    key.style.backgroundColor = keys["s"];
  } else if (event.key === "d") {
    key.style.backgroundColor = keys["d"];
  } else if (event.key === "q") {
    createDiv("#913595");
  } else if (event.key === "w") {
    createDiv("#474b4e");
  } else if (event.key === "e") {
    createDiv("#763c28");
  } else {
    key.style.backgroundColor = keys["other"];
  }
});

function createDiv(color) {
  let div = document.createElement("div");
  div.style.backgroundColor = color;
  div.style.width = "200px";
  div.style.height = "200px";
  div.style.display = "inline-block";
  div.style.margin = "12px";
  document.body.appendChild(div);
}