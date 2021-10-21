/*
* Author : Xuan Luo
* Date : 10/20/21
* Lab 6
*/
// defining mytransport
myTransport = ["Bus", "rides from friends", "Toyota Camry", "bike"];
// defining MyMainRide as a varaible
var MyMainRide = {
    make = "Toyota";
    model = "Camry";
    color = "blue";
    year = "2002";
    ownIt = false;
    age : function() {
      return 2019 - age;
    }
// Output
document.writeln("The forms of transportation that i take:", myTransport, "<br>");
document.writeln("My main ride is: <pre>", JSON.stringify(MyMainRide, null, '/t'), "<pre>")

}
