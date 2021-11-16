/*
* Author : Xuan Luo
* Date : 11/15/21
* Lab 10
*/
// defining my function
function sortingHat(str){
  len = str.length;
  mod = len % 4;
  if (mod == 0) {
    return "Pop"
  }
  else if (mod == 1) {
    return "EDM"
  }
  else if (mod == 2) {
    return "Lofi"
  }
  else if (mod == 3) {
    return "R&B"
  }
}


var myButton = document.getElementById("myButton");
myButton.addEventListener("click", function(){
  var name = document.getElementById("input").value;
  var genre = sortingHat(name);
  newText = "<p> The Random Music generated has recommended: " + genre + "</p>";
  document.getElementById("Output").innerHTML = newText;
})
