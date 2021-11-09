/*
* Author : Xuan Luo
* Date : 11/8/21
* Lab 11
*/



$("#Challenges").append("<button id = 'button-c'> Press Me >~< </button>");
$("#Problems").append("<button id = 'button-p'> Press Me >~< </button>");
$("#Results").append("<button id = 'button-r'> Press Me >~< </button>");

// making a button
$("#button-c").click(function(){
  		//Find the challenge, problems, or results section the button is in
      //Toggle a class special within the <div> of the section
      $(this).parent().toggleClass("special");
      console.log("hi")
	});

$("#button-p").click(function(){
    		//Find the challenge, problems, or results section the button is in
        //Toggle a class special within the <div> of the section
      $(this).parent().toggleClass("special");
      console.log("hi")
  	});

$("#button-r").click(function(){
      		//Find the challenge, problems, or results section the button is in
          //Toggle a class special within the <div> of the section
        $(this).parent().toggleClass("special");
        console.log("hi")
    	});
