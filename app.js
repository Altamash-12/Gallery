let body = document.querySelector("body");
body.style.backgroundColor = "#ababab";
body.style.height = "100vh";

let container = document.createElement("div");
container.style.width = "35%";
container.style.height = "50%";
container.style.margin = "auto";
container.style.marginTop = "10%";
container.style.border = "2px solid #ccc";
body.appendChild(container);

let forwardIcon = document.createElement("button");
forwardIcon.style.backgroundColor = "red";
forwardIcon.style.border = "none";
forwardIcon.textContent = ">";
container.appendChild(forwardIcon)

let backwardIcon = document.createElement("button");
backwardIcon.style.backgroundColor = "green";
backwardIcon.style.border = "none";
backwardIcon.textContent = "<";
container.appendChild(backwardIcon)