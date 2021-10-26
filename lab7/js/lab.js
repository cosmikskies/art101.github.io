/*
*  Author: Xuan Luo
*  Date: 10/25/21
*  Lab 7
*/


var name = window.prompt("Hello. What is your name?");
console.log("name =", name);

function username(name) {

  //Using the inputed name into the array
  var userarray = name.split('');
  console.log("Array =", userarray);
  //Sort the array
  var userarraysorted = userarray.sort();
  console.log("Sorted Array =", userarraysorted);
  //turns the sorted array into a new name
  var newname = userarraysorted.join('');
  console.log("new name =", newname);
  //returns newname
  return newname;
}
//Outputs
function output () {
  document.writeln("Your new name is now: ", username(name), "</br>");
}

output();
