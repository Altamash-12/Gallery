let body = document.querySelector("body");
body.style.backgroundColor = "#ababab";

let container = document.createElement("div");
container.style.width = "35%";
container.style.height = "335px";
container.style.margin = "auto";
container.style.marginTop = "100px";
container.style.border = "2px solid #ccc";
container.style.position = "relative";
body.appendChild(container);

let forwardIcon = document.createElement("button");
forwardIcon.style.backgroundColor = "#000";
forwardIcon.style.color = "#fff";
forwardIcon.style.border = "2px solid #fff";
forwardIcon.style.fontSize = "18px";
forwardIcon.style.position = "absolute";
forwardIcon.style.top = "50%";
forwardIcon.style.right = "0";
forwardIcon.style.transform = "translate(50%, -50%)";
forwardIcon.style.padding = "10px 15px";
forwardIcon.style.borderRadius = "50%";
forwardIcon.textContent = ">";
container.appendChild(forwardIcon);

let backwardIcon = document.createElement("button");
backwardIcon.style.backgroundColor = "#000";
backwardIcon.style.color = "#fff";
backwardIcon.style.fontSize = "18px";
backwardIcon.style.position = "absolute";
backwardIcon.style.top = "50%";
backwardIcon.style.transform = "translate(-50%, -50%)";
backwardIcon.style.border = "2px solid #fff";
backwardIcon.style.padding = "10px 15px";
backwardIcon.style.borderRadius = "50%";
backwardIcon.textContent = "<";
container.appendChild(backwardIcon);

let img1 = document.createElement("img");
img1.src = "italy.webp";
img1.style.width = "100%";
img1.style.height = "100%";

let img2 = document.createElement("img");
img2.src = "machu-picchu.jpg";
img2.style.width = "100%";
img2.style.height = "100%";

let img3 = document.createElement("img");
img3.src = "petra.webp";
img3.style.width = "100%";
img3.style.height = "100%";

let img4 = document.createElement("img");
img4.src = "Taj-mahal.webp";
img4.style.width = "100%";
img4.style.height = "100%";

let img5 = document.createElement("img");
img5.src = "great wall of china.jpg";
img5.style.width = "100%";
img5.style.height = "100%";

let img6 = document.createElement("img");
img6.src = "chichen itza.jpg";
img6.style.width = "100%";
img6.style.height = "100%";

let img7 = document.createElement("img");
img7.src = "eiffel-tower.jpg";
img7.style.width = "100%";
img7.style.height = "100%";

let curIndex = 0;
let arrOfImg = [img1, img2, img3, img4, img5, img6, img7];
let currImg = arrOfImg[curIndex];
container.appendChild(currImg);

forwardIcon.addEventListener("click", function (e) {
  if (curIndex === arrOfImg.length - 1) {
    curIndex = 0;
    currImg.src = arrOfImg[curIndex].src;
  } else {
    curIndex++;
    currImg.src = arrOfImg[curIndex].src;
  }
});

backwardIcon.addEventListener("click", function (e) {
  if (curIndex === 0) {
    curIndex = [6];
    currImg.src = arrOfImg[curIndex].src;
  } else {
    curIndex--;
    currImg.src = arrOfImg[curIndex].src;
  }
});

setInterval(() => {
  if (curIndex === arrOfImg.length - 1) {
    curIndex = 0;
    currImg.src = arrOfImg[curIndex].src;
  } else {
    curIndex++;
    currImg.src = arrOfImg[curIndex].src;
  }
}, 5000)
