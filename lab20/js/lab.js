/**
 * Author:    Emma Alexander <emalexander@csumb.edu>
 * Created:   11.18.2021
 *
 * License: Public Domain
 **/

 // Pick an URL from API
 URL = "https://coffee.alexflipnote.dev/random";

 function getimg() {
   $.ajax({
     // endpoint
     ur: URL,
     // type
     type: "GET",
 })

 // Click button
 $('#activate').click(getimg);

 // if succeeds
 .done(function(data) {
   console.log(data);
   var imageUrl = data.image;
   var imageHtml = "<img src='" + URL + "'>";
   console.log(imageUrl);
   $("#output").html(imageHtml);
 })
}

getimg()
