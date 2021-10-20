/**
 * Author:    Emma Alexander <emalexander@csumb.edu>
 * Created:   10.20.2021
 *
 * License: Public Domain
 **/

for (var num=1; num <= 200; num++) {
var outputStr = ""

// if multiple of 3 add Fizz
if (num % 3 == 0) {
	outputStr = outputStr += "Fizz"
}

str += "Fizz";
$("#output").append("<p>" + str);
});

// if multiple of 5 add Buzz
if (num % 5 == 0) {
	outputStr = outputStr += "Buzz"
}

str += "Buzz";
$("#output").append("<p>" + str);
});

// if multiple of 7 add Boom
if (num % 7 == 0) {
	outputStr = outputStr += "Boom"
}

str += "Boom";
$("#output").append("<p>" + str);
});

// if string is still blank, print it
if (outputStr == "") {
	console.log(num);
}
// otherwise, print str
else {
	console.log(outputStr + '!');
}
}
