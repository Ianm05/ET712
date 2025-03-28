/**
 * Ian Martinez
 * Feb 11,function
 */
console.log("Ian Martinez ")
console.log("\n------ Example 1: function------")
// create a function to prompt 'Hello World'
function msg() {
    console.log('hello World!')
}

console.log("\n------Example 2: function to print 3,2,1---------")

// example 2, function to print 3, 2, 1
function printcount() {
    for (let n = 3; n > 0; n--) {
        console.log(n)
    }
}
console.log("\n------Example 3: function with parameters---------")
//pass a name into a function. The function will prompt the name in all uppercase
function greeting(passname) {
    passname = passname.toUpperCase()
    console.log(`Welcome to function ${passname}`)
}
//function that takes two numbers and prompt the sum of them
function sum(x, y) {
    console.log(`${x} + ${y} = ${x + y}`)
    console.log("\n------Example 4: Snake eyes---------")
}
// function to print 'snake eyes' if a 1 and 1 is passed to the fuction
function snake_eyes(x, y) {
    if (x === 1 && y === 1) {
        console.log("SNAKE EYES!")
    }
    else {
        console.log("Not snake eyes!")

    }
}

// call snake_eyes function
snake_eyes(3, 2)
snake_eyes(1, 1)

console.log("\n--------Example 5: function that returns value---------")
// function that returns the double of the number. The number is passed to the function
function doublenumber(n) {
    n *= 2 //n = n*2
    return n
}
// call function
let number = 5
let dbnum = doublenumber(number)
console.log(`The double of number ${number} is ${dbnum}`)

console.log("\n---------- Example 6: function that returns the value--------")
// function that returns 'true' if a temperature is greater than 75. Otherwise, it returns 'false' if the temperature is less than or equal to 75
function checktemp(temperature){
    if(temperature>75){
        return true
    }
    else{
        return false
    }
}

// call function
let t = 100
let temp_result = checktemp(t)
console.log(`is the temperature greater than 75? ${temp_result}`)


