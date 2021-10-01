/**
 * Author:    Emma Alexander <emalexander@csumb.edu>
 * Created:   09.30.2021
 *
 * License: Public Domain
 **/


// Use getElementId() to find your output <div> and assign it to a variable
// outputEl
var outputEl = document.getElementById("output");

// Create a new element with document.createElement("p") and assign it to a
// variable new1El
var new1El = document.createElement("p");

// Change the html attribute of new1El to say something new.
new1El.innerHTML = ("Hello.");

// Create another new element and assign it to a variable new2El
var new2El = document.createElement("p")

// Change the html attribute of new2El to say something else.
new2El.innerHTML = ("My program execution was successful.");

// Append both new elements one at a time using appendChild()
outputEl.appendChild(new1El);
outputEl.appendChild(new2El);

// Change the css attributes of at least two elements of your page
new1El.style.fontSize = "20pt";
new2El.style.fontSize = "15pt";
new1El.style.color = "#FAF0E6";
new1El.style.backgroundColor = "#6a4015";
new2El.style.color = "#FAF0E6";
new2El.style.backgroundColor = "#6a4015";
