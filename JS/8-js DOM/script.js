// icinde button ve wrapper var
let container = document.createElement("div");
container.className = "container";
container.style.display = "flex";
container.style.flexDirection = "column";
container.style.gap = "20px";


// divRGB and button
let copyWrapper = document.createElement("div");
copyWrapper.className = "copy-wrapper";
copyWrapper.style.display = "flex";
copyWrapper.style.justifyContent = "center";
copyWrapper.style.alignItems = "center";
copyWrapper.style.gap = "10px";


// divRGB
let divRGB = document.createElement("div");
divRGB.className = "copyText";
divRGB.style.width = "100%";
divRGB.style.padding = "15px";
divRGB.style.backgroundColor = "rgb(0,0,0,.1)";

// copy button
let copybtn = document.createElement("button");
copybtn.innerText = "A"
copybtn.className = "copybtn";
copybtn.style.padding = "5px";
copybtn.style.backgroundColor = "#fff";
copybtn.style.border = "none";



// button
let button = document.createElement("button");
button.className = "btn";

let count = 0;
button.innerText = `Change Color ${count}`;

button.style.padding = "30px";
button.style.fontWeight = "bold";
button.style.fontSize = "20px";

// append
copyWrapper.append(divRGB, copybtn);
container.append(button, copyWrapper);
document.body.append(container);

document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.height = "100vh";


function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}

button.addEventListener("click", function() {
    let colorBody = randomColor();
    divRGB.innerText = colorBody;
    document.body.style.backgroundColor = colorBody;
    button.style.color = colorBody;
    count++;
    button.innerText = `Change Color ${count}`;
});

copybtn.addEventListener("click", function() {
    // Copy the text inside the text field
    navigator.clipboard.writeText(divRGB.innerText);
    // Alert the copied text
    alert("Color is copied to clipboard! Your color is: " + divRGB.innerText);
});