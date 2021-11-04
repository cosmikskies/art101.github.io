/*
* Author : Xuan Luo
* Date : 11/3/21
* Lab 10
*/



// borrowing the grabname and split functions from lab 7
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

var buttonE1 = document.getElementbyId("button");

function buttonpush (){
  var original_name = document.getElementbyId("username");
  var inputed_name = orginal_name.value;

  var sorted_name = username(inputed_name);

  var outputE1 = document.getElementbyId("output");
  outputEl.innerHTML = "new name: "+ sorted_name;

}
buttonEl = document.addEventListener("click", buttonpush);
