/**
 * Author:    Emma Alexander <emalexander@csumb.edu>
 * Created:   09.26.2021
 *
 * License: Public Domain
 **/



// sortUserName
function sortUserName(userName) {
    // convert to lower case
    userName = userName.toLowerCase();
    console.log("userName =", userName);
    // split string to array
    var nameArray = userName.split('');
    console.log("nameArray =", nameArray);
    // sort the array
    var nameArraySort = nameArray.sort();
    console.log("nameArraySort =", nameArraySort);
    // join array back to a string
    var nameSorted = nameArraySort.join('');
    console.log("nameSorted =", nameSorted);
    // Note that I could have done the above lines as a single line:
    userName.toLowerCase().split("").sort().join("")
    return userName.toLowerCase().split("").sort().join("");
}

// getName
function getName() {
  var name = window.prompt("Please type your name here.");
  // var name = document.getElementById("inputField").val
  return name;
}

function main() {
    var userName = getName();
    document.writeln("<style>:root {--textlen: " + userName.length + ";}</style>");
    var sortedName = sortUserName(userName);
    document.writeln("Here's your sorted name: " + sortedName + "</br></br>");
}

main();
