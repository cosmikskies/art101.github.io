/*
* Author : Xuan Luo
* Date  ; 11/30/21
* Lab 15
*/

var earl = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,racist,sexist,explicit"
// Add a click event to the button
$("#buttons").click(function(){
// When a user clicks the button, use a jQuery AJAX call to fetch output from your API
  $.ajax({
      url: earl,
      type: "GET",
  })
  // Put the output of the AJAX call in the output div
  .done(function(data) {
      $("#Output").html(data.joke);
  })
  console.log("hi");
});
