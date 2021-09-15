/**
 * Author:    Emma Alexander <emalexander@csumb.edu>
 * Created:   09.15.2021
 *
 * License: Public Domain
 **/

// declare variables to hold the make, model, color, and year of your vehicle
make = "Jeep";
model = "Compass"
color = "White";
year = 2021;
currentYear = 2021;

// declare a boolean variable ownIt for whether you own it or not
ownIt: true;

// create a new variable age that subtracts the year from the current year
age = 2021 - year;

// output
document.writeln("Make: " + make + "<br>");
document.writeln("Model: " + model + "<br>");
document.writeln("Color: " + color + "<br>");
document.writeln("Year: " + year + "<br>");
document.writeln("Age: " + age + "<br>");
document.writeln("Own it: " + true + "<br>");
