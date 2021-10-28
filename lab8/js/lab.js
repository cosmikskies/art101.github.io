/*
*  Author: Xuan Luo
*  Date: 10/27/21
*  Lab 8
*/
// defining my arrays
array1 = [ 100, 35, 49, 26, 7, 56, 12];
array2 = [ 27, 45, 20, 52, 40, 79, 21];

//defing my function
function OddOrEven(num) {
    if (num % 2 == 0) {
        return "even";
    } else {
        return "odd";
    }
}

// testing the function
console.log( OddOrEven(2));
console.log( OddOrEven(29));

var whatisit = array1.map(OddOrEven);
console.log("Results if the array is even or odd :", whatisit);
