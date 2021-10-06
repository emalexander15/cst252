/**
 * Author:    Emma Alexander <emalexander@csumb.edu>
 * Created:   10.06.2021
 *
 * License: Public Domain
 **/

 // find a button
 var button = document.getElementById('my-button');

 function sortText(text) {
 	return text.split('').sort().reverse().join('');
 }

 // create an event handler within the JS file that listens for a button click.
 button.addEventListener('click', function() {
 // when the button is pushed, prompt the user to input their name with the prompt() function.
   // var name = prompt("What's your name?");
   // find the value of the input field
   var inputEl = document.getElementById('input');
   var name = inputEl.value;
   // run through sort
   var newName = sortText(name);
   // Use this input to change the text from ‘Hello, World!’ to ‘Hello’ + the user’s name
   var newText = "Howdy, " + newName + "!";
   // find the element!
 	var heading = document.getElementById('greet');
   // modify the heading text
   heading.innerHTML = newText;
   // change output
   document.getElementById('output').innerHTML = newText;
 });
