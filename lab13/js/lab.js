/**
 * Author:    Emma Alexander <emalexander@csumb.edu>
 * Created:   10.18.2021
 *
 * License: Public Domain
 **/

 // Return Bratz Doll names
 // depending on length mod 4
 function sortingHat(str) {
   len = str.length;
   mod = len % 4;
   if (mod == 0) {
     return "Yasmin (4th)"
   }
 else if (mod == 1) {
   return "Cloe (2nd)"
 }
 else if (mod == 2) {
   return "Jade (3rd)"
 }
 else if (mod == 3) {
   return "Sasha (1st)"
 }
}

 var myButton = document.getElementById("button");
 myButton.addEventListener("click", function () {
   var name = document.getElementById("input").value;
   var house = sortingHat(name);
   newText = "<p>The sorting hat has said you are: " + house + "</p>";
   document.getElementById("output").innerHTML = newText;
 })
