/**
 * Author:    Emma Alexander <emalexander@csumb.edu>
 * Created:   11.15.2021
 *
 * License: Public Domain
 **/

 // Pick an URL from API
 var targetUrl = "https://thecocktaildb.com/api/json/v1/1/random.php";

 function doAjaxStuff() {
 	// Using the core $.ajax() method
   $.ajax({
       // The URL for the request
       url: targetUrl,
       // The data to send (will be converted to a query string)
       // data: { id: 123},
       // Whether this is a POST or GET request
       type: "GET",
       // The type of data we expect back
       // dataType : "json",
   })
   // If the request succeeds
   .done(function( data ) {
       alert("Success!");
       console.log(data);
       $("#output").html("<pre>" + JSON.stringify(data, null, 2) + "</pre>");
   })
   // If the request fails
   .fail(function( xhr, status, errorThrown ) {
       console.log(errorThrown + " Status:" + status );
       alert("Failure");
   });

 }

 // When a user clicks the button, use a jQuery AJAX call to fetch output from the numbers API
 $("#activate").click(doAjaxStuff)

 // Insert the output in the output div
