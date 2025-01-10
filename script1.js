// Write a js program to print all natural numbers from 1 to n. - using while loop.
var userInput=prompt("Enter a Number up to which you want to check natural numbers.");
console.log(`The natural numbers upto ${userInput} are:`);

var count = 1;
while (count<=userInput) {
    console.log(count);
    count++;
}