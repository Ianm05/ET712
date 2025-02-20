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
// Use for loop to check, all negative numbers and postive numbers and add all the negative and positive numbers
let positivenum = 0;
let negativenum = 0;
for(let m = 0; m<num.length; m++){
if(num[m]<0){
positivenum+= num[m]

}
}


console.log(`Sum of all negative numbers = ${negativenum}`);
console.log(`Sum of all positive numbers = ${positivenum}`);



console.log("\n-------- Example 6: while loop as a counter-------")
// use a while loop to display number from 0 to 4 -- > 0 1 2 3 4
let 

y = 0;
while (y<=4){
    console.log(y)
    y++
}

console.log("\n--------Example 7: while loop application---------")
 // using while loop to check if the user number matches the secret number
 const SECRET = 8
 //collect a number from the user
 let usernumber = parseInt(prompt("Enter a number: "))
 guesscounter = 0
 // run a while to recollect the user number doesn't match the secret number while 
 while(usernumber !== SECRET){
    guesscounter++
    usernumber = parseInt(prompt( "Wrong guess! Enter another number:"))

 }
  console.log(`${usernumber} is right! Total attempts ${guesscounter}`)

  console.log("\n-----example 8: break in a while loop------")
  // create an app to sum in all even numbers. The app continously collects a positive number and stop is a negative number
  let sumeven = 0;


  while(true){
    let collectnumber = parseInt(prompt("Enter a positive number: "))
    if(collectnumber<0){
        break
    }
    else{
        if(collectnumber%2===0){
            sumeven += collectnumber //sumeven = sumeven + collectnumber

        }
    }
    console.log('The sum of all even numbers is ${sumeven}');

    console.log("\n---- Example 9 : continue in a for loop ------")
    // print number from -5 to 5  -5  -4  -3 -2  1 0 1 2 3 4 5 
    for(let n =-5; n<=5; n++) {
        if(n%2===0){
            continue
        }   
        console.log(n)  
    }

  }

console.log("\n------ EXCERCISE B -------")

 Passcode = "2005"; // Set the correct passcode
let attempts = 3; // Maximum attempts allowed
let userAttempt; // Variable to store user input

while (attempts > 0) {
    userAttempt = prompt("Enter the passcode: ");

    if (userAttempt === Passcode) {
        console.log("Access Granted!");
        break; // Exit the loop when correct passcode is entered
    } else {
        attempts--; // Reduce attempts
        console.log(`Incorrect passcode. You have ${attempts} attempt(s) left.`);
        
        if (attempts === 0) {
            console.log("Too many failed attempts. Access Denied!");
        }
    }
}


 