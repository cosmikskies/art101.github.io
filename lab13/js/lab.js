/*  Author: Xuan Luo
*   Date: 11/22/21
*   Lab 13
*/

// Create a fizzbuzz

function fizzbuzzz () {
  outputstr = ""
  for (var num = 1; num < 201; num++) {
    outputstr += num + ":";
    // If the number is a multiple of 3, if should print "Fizz!"
    if (num % 3 === 0 && !(num % 5 === 0) && !(num % 7 === 0)) {
      outputstr +=  " Fizzz!";
    }
    // If the number is a multiple of 5, it should print "Buzz!"
    if (num % 5 === 0 && !(num % 3 === 0) && !(num % 7 === 0)) {
      outputstr += " Buxzz!";
    }
    // If the number is a multiple of 7, it should print "Boom!"
    if (num % 7 === 0 && !(num % 5 === 0) && !(num % 3 === 0)) {
      outputstr +=  " Booom!";
    }


    // If the number is a multiple of more than one 3, 5 or 7, it should combine Fizz, Buzz, and Boom. For example, if the number is a multiple of 3 AND 5, it should print "FizzBuzz!" and so on.
    if (num % 3 === 0 && (num % 5 === 0) && !(num % 7 === 0)) {
      outputstr +=  " FizzzBuzzz!";
      }
    if (num % 3 === 0 && (num % 7 === 0) && !(num % 5 === 0)) {
        outputstr +=  " FizzzBooom!";
        }
    if (num % 5 === 0 && (num % 7 === 0) && !(num % 3 === 0)) {
            outputstr +=  " BuzzzBooom!";
        }
    if (num % 5 === 0 && (num % 7 === 0) && (num % 3 === 0)) {
                outputstr += + " FizzzBuzzzBooom!";
        }
    outputstr += "<br>"
     $("#output").html(outputstr);
   }


 }



fizzbuzzz()
