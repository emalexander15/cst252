/**
 * Author:    Emma Alexander <emalexander@csumb.edu>
 * Created:   10.30.2021
 *
 * License: Public Domain
 **/

//Create a constructor for vehicles called Vehicle, including make, model, year, color, and extras.
function Vehicle(make, model, year, color, extras) {
  this.myMake = make;
  this.myModel = model;
  this.myYear = year;
  this.myColor = color;
  this.myExtras = extras;
  this.info = function() {
    return (this.myMake  +
    " " + this.myModel +
    " " + this.myYear +
    " is " + this.myColor +
    " and " + this.myExtras);
  };
}
var outputDiv = document.getElementById("output");

//
vehicles = [];
var Jeep = new Vehicle("Jeep", "Compass", "2021 car", "white", "this is the current car Emma owns.");
vehicles.push(Jeep);

for (i=0; i<vehicles.length;i++) {
  outputDiv.innerText += vehicles[i].info() + "\n"
}
