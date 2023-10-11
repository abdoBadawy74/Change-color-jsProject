let body = document.body;

body.style.cssText =
  "  display: flex;justify-content: center;align-items: center;flex-direction: column;gap: 40px;";

let btn = document.getElementsByClassName("btn")[0];

btn.style.cssText =
  " padding: 15px;background-color: #eee;cursor: pointer;font-size: 20px;margin-top: 40px;";

let myDiv = document.getElementsByClassName("myDiv")[0];

myDiv.style.cssText = "  width: 200px; height: 200px; border: 1px solid #000;";

let colors = ["red", "green", "blue", "orange", "black", "aqua", "brown", "yellow", "blueviolet", "beige"];

let counter = 0;

btn.onclick = () => {
  myDiv.style.backgroundColor = colors[counter];
  counter++;
  if (counter === colors.length) {
    counter = 0;
  }
};
