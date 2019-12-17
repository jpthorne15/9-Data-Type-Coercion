// Dynamic vs. strongly or explicitly typed languages
/* In a strongly typed language like Java you have to specify the data type
such as a string before you declare a variable
*/
let firstName = "Jim";
console.log (firstName);
//Expected Result Jim

firstName = firstName.toUpperCase();
console.log (firstName);
// Expected Result JIM

firstName = 123;
console.log (firstName);
// Expected Result 123

/*If there was now an attempt to run the toUpperCase function there would
be a runtime error because number do not have an uppercase */

/*We can combine 2 variables with 2 different strings into a single string*/

firstName = "Elmer";
let lastName = "Fudd";

let fullName = firstName + ' ' + lastName;
console.log (fullName)
// Expected Result Elmer Fudd

let age = 80;

let profileDescription = fullName + ' ' + age;
console.log (profileDescription)
// Expected Result Elmer Fudd 80

/* Javascript infers that when you add a number to a string you are wanting a string
to be returned. This is data coercion because it converts a number into a string. It is
usually intended for user output and needs greater readability. The sequence can
also be reversed. See below */

let ageProfile = age + ' ' + fullName;
console.log (ageProfile)
// Expected Result 80 Elmer Fudd

//When the addition operator is used the number value is coerced to a string
let compoundValue = "80" + 160;
console.log (compoundValue)
// Expected Result "80160"

// When the subtraction operator is used the string is converted to a numerical value
let minusNumber = "80" - 160;
console.log (minusNumber)
// Expected Result -80

/* If you mix letters and numbers in a string and then subtract it from number you
will get "NaN" or not a number for the result*/

let errorNan = "garbage 80" - 160;
console.log (errorNan)
// Expected Result NaN

// The parseInt number converts a string number into a number

let stringNumber = "80";
let myNumber = parseInt (stringNumber);
console.log (myNumber)
// Expected result 80

/*The parseInt function also extracts the number out a mixed string of 
letters and numbers when the number is first in the sequence*/

stringNumber = "80 garbage";
myNumber = parseInt (stringNumber);
console.log (myNumber)
// Expected result 80

/*The parseInt function returns not a number or NaN when the number is last
in the string sequence*/

stringNumber = "garbage 80";
myNumber = parseInt (stringNumber);
console.log (myNumber)
// Expected result NaN






