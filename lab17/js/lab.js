/**
 * Author:    Emma Alexander <emalexander@csumb.edu>
 * Created:   11.3.2021
 *
 * License: Public Domain
 **/

 // New class method
class Vehicle {
  constructor(make, model, year, color, extras, name) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.extras = extras;
    this.name = name;
}
  info() {
    return "My car is a " + this.color + " " + this.year + " " + this.make + " "
    +  this.model + " with " +  this.extras + " named " + this.name;
  }
}

var vehicles = [];

vehicles.push(new Vehicle("Jeep", "Compass", 2021, "white", "4 wheel drive", "Gigi"));

outputEl = document.getElementById("output");
for (var i = 0; i<vehicles.length; i++) {
  $("#output").append(vehicles[i].info())
}
