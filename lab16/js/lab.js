/*
* Author : Xuan Luo
* Date  ; 12/1/21
* Lab 15
*/

var number = 0;

var earl = "https://xkcd.com/json.info" + number + ".json";
// Add a click event to the button
$("#buttons").click(function(){
// When a user clicks the button, use a jQuery AJAX call to fetch output from your API
  $.ajax({
      url: earl,
      type: "GET",
  })
  // Put the output of the AJAX call in the output div
  .done(function(data) {
      $("#output").html("<h1 id = stuff>" + comicObj.title + "<h2>");
      $("Output").append("<img src =''" +  comicObj.img + "'width = '350'>");
  })
  console.log("hi");
});
