console.log("Ian Martinez");

// Select element by class name "description"
let desc = document.querySelector(".description");
console.log(desc);

// Select element by ID name "title"
let titlenode = document.querySelector("#title");
console.log(titlenode);

// Select elements by tag name "p"
let par = document.querySelectorAll("p");
console.log(par);

// Select all elements with class name "methods"
let methods = document.querySelectorAll(".methods");
console.log(methods);

// Loop through each element in the node list
console.log(" ---- example 2: loop through each element in a node list");
methods.forEach((method) => {
    console.log(method);
});

console.log("\n ---- example 3: CLICK EVENT------");
// Select the button
let btn = document.querySelector(".btnclick");

// Add a click event to btn
if (btn) {
    btn.addEventListener("click", function () {
        alert("BTN WAS CLICKED");
    });
}

console.log("\n-----example 4: click event to change text content");
// Select the elements, 'btnmsg' and 'msg'
let btnmsg = document.querySelector(".btnmsg");
let msg = document.querySelector(".msg");

// Add an event to 'btnmsg' that changes the text content
if (btnmsg && msg) {
    btnmsg.addEventListener("click", function () {
        msg.innerHTML = "Good afternoon <b>Ian Martinez</b>";
    });
}

console.log("\n ----- Example 5: changing shapes mini-app");
// Select elements
let shape = document.querySelector(".shape");
let btncircle = document.querySelector(".btncircle");
let btnrectangle = document.querySelector(".btnrectangle");
let btnsquare = document.querySelector(".btnsquare");

// Add an event to each button
if (btncircle && shape) {
    btncircle.addEventListener("click", function () {
        shape.className = "shape circle";
    });
}

if (btnsquare && shape) {
    btnsquare.addEventListener("click", function () {
        shape.className = "shape square";
    });
}

if (btnrectangle && shape) {
    btnrectangle.addEventListener("click", function () {
        shape.className = "shape rectangle";
    });

    
/** 
 * Tuesday, March 11, traditional events
 */
// example 6: onmouseout event
let event6 = document.querySelector(".event");
if (event6) {
    event6.onmouseout = function () {
        alert("MOUSE OUT - EXAMPLE 6");
    };
}

// example 7: inline event
function openalert() {
    alert("CLICK EVENT - Example 7");
}

// Example 8: Mouseover event
let divexample8 = document.querySelector(".divexample8");
if (divexample8) {
    divexample8.onmouseout = function () {
        let randred = Math.floor(Math.random() * 255);
        let randgreen = Math.floor(Math.random() * 255);
        let randblue = Math.floor(Math.random() * 255);
        divexample8.style.backgroundColor = `rgb(${randred},${randgreen},${randblue})`;
    };
}

// example 9: keyboard event
let inputex9 = document.querySelector(".inputex9");
let ex9paragraph = document.querySelector(".ex9paragraph");

inputex9.onkeydown = function(event){
        ex9paragraph.innerHTML = `key = ${event.key} was pressed`;
    };
// EXERCISE
// Collect elements

// Search for the first p with class ps1
let firstParagraph = document.querySelector(".ps1");

// Add a mouseout event to change the text content to "STUDENT'S FULL NAME"
if (firstParagraph) {
    firstParagraph.addEventListener("mouseout", function () {
        firstParagraph.textContent = "STUDENT'S FULL NAME";
    });
}

// Search for the second p with class ps2
let secondParagraph = document.querySelector(".ps2");

// Add a click event to change the font size to 25px and color to olive when clicked
if (secondParagraph) {
    secondParagraph.addEventListener("click", function () {
        secondParagraph.style.fontSize = "25px";
        secondParagraph.style.color = "olive";
    });
}

// Search for the first div with class divs2
let firstDiv = document.querySelector(".divs2");

// Add a click event to change the background color to indigo
if (firstDiv) {
    firstDiv.addEventListener("click", function () {
        firstDiv.style.backgroundColor = "indigo";
    });
}

// Search for the second div with class divs3
let secondDiv = document.querySelector(".divs3");

// Add a keydown event to change the width of divs2 to 300px
if (secondDiv) {
    document.addEventListener("keydown", function () {
        secondDiv.style.width = "300px";
    });
}

}
