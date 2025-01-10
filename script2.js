// Write a js program to print all natural numbers in reverse (from n to 1). - using while loop
var userInput=prompt("Enter a Number up to which you want to check natural numbers.");
console.log(`The natural numbers from ${userInput} to 1 are:`);

var count = userInput;
while (count>=1) {
    console.log(count);
    count--;
}