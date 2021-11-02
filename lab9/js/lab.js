/*
* Author : Xuan Luo
* Date : 11/1/21
* Lab 9
*/

//Use getElementById() to find your output <div> and assign it to a variable outputEl
var outputE1 = document.getElementbyId("output");

//creating a new element with document.createELement and assigning it to new variable "new1El"
var new1El = document.createElement("p");


//defining variable new1El to "something new" so that when called upon it says that
new1El = "Something new";
console.log(new1El);
// creating a secondary variable and assigning it something different
var new2El = document.createElement("p");


//changing the value of new2El to say "something else"
new2El = "something else";

//apending both elements one at a time to my desired output
var append1 = document.createTextNode(new1El); // make the new1El appendable
var append2 = document.createTextNode(new2El); // make the 2nd element apparenable
console.log(append1);
outputEl.appendChild(append1); // appends first variable
outputEl.appendChild(append2); // appends 2nd variable

//Change the css attributes of at least two elements of your page

var challenge_el = document.getElementById("ChallengesAndProblems"); // Get the challenge id
challenge_el.style.color ="black"; // changes the text to black

var problem_elm = document.getElementById("Results"); // Get the problem id
problem_elm.style.backgroundColor ="violet"; //changes the background color to violet
