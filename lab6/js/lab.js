/**
 * Author:    Emma Alexander <emalexander@csumb.edu>
 * Created:   09.22.2021
 *
 * License: Public Domain
 **/

// Declare an Array //
myTransport = [" Car", " Uber", " Walking", " Airplane"];

// Declare an Object //
myMainRide = {
  make: "Jeep",
  model: "Compass",
  color: "White",
  year: 2021,
}

// Output Variables //

document.writeln("My Transportation: ", myTransport, "</br");
document.writeln("My Main Ride: <pre>",
    JSON.stringfly(myMainRide, null, '\t'), "</pre>");
