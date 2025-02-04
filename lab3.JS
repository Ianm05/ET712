/**
 *  Student's Full Name
 *  Feb 4, Loops
 *
 */
console.log("Ian Martinez");

console.log("\n-------Example 1: for loops------ ");
// Use a for loop to print from 0 to 4 --> 0 1 2 3 4
for (let n = 0; n <= 4; n++) {
console.log(`counting = ${n}`);
}

console.log("\n-------- Example 2: for loop with conditional statement-----");
// Collect the initial value from the user
// Print all even numbers between the initial value and 20
let initialvalue = parseInt(prompt("Enter a number: "));
for (; initialvalue <= 20; initialvalue++) {
    if (initialvalue % 2 == 0) {
console.log(initialvalue); // Only print even numbers
    }
}

console.log("\n-------- Example 3: for loop as decrement counter------");
// For loop to print from 9 to 0 --> 9 8 7 6 5 4 3 2 1 0
for (let n = 9; n >= 0; n--) {
    console.log(n);
}

console.log("\n------Example 4: For loop in an array (list) -----");

// Set up a list of numbers
// Count how many negative numbers are in a list
let numbers = [5, -3, 10, -9, 2];
let counternegative = 0;

for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] < 0) {
        counternegative++;
    }
}

console.log(`There is/are ${counternegative} negative number(s) in the list "numbers".`);

console.log("\n-------Example 5: For loop in a string---------")
let username = "Peter Pan, neverland"
let counter_e =0;
    for(let index=0; index<username, length; index++){
        //console.log(username[index])
        //Find the total number of letter 'e' in username
        if(username[index]=="e"){
            counter_e++
        }
    }
console.log("\n------- Excercise for loop-------")
let num =[-3,10,0,8,-9,5,-2,8,6,-1]


