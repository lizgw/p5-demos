// list out all the html file names to be included
var demoNames = [
    "01-hello-art",
    "02-full-screen",
    "03-random-lines",
    "04-triangles",
    "05-random-triangles",
    "06-animated-triangles",
    "07-color",
    "08-color-hue",
    "09-rainbow-snake",
    "10-custom-shape"
]
var demoList = document.getElementById("demo-list");
var demoFrame = document.getElementById("demo-iframe");

for (demoName of demoNames) {
    // break apart the name on hyphens
    var namePieces = demoName.split("-");
    // start building the name string
    var prettyName = namePieces[0] + ": ";
    // add each word & capitalize the first letter
    for (var i = 1; i < namePieces.length; i++)
    {
        prettyName += namePieces[i].substring(0, 1).toUpperCase() + namePieces[i].substring(1) + " ";
    }

    // create an empty li and a button
    var listElem = document.createElement("li");
    var buttonElem = document.createElement("button");

    // run a function when the button is clicked
    buttonElem.demoName = demoName;
    buttonElem.addEventListener("mouseup", demoButtonPressed);
    
    // put some words in the button
    buttonElem.innerText = prettyName;

    // put the button inside the li, and put the li in the list
    listElem.appendChild(buttonElem);
    demoList.appendChild(listElem);
}

function demoButtonPressed(event) {
    var fileName = event.target.demoName + ".html";
    console.log(fileName);
}