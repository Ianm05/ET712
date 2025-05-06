// ------ example 1: console messaging ------
console.log("\n------ Example 1: Console Messaging -----");
console.warn("This is a warning message!");
console.error("ERROR!");

// ------ example 2: global object of JS ------
console.log("\n------ Example 2: Global Object of JS -----");

setTimeout(() => {
    console.log("Welcome to Node.js");
}, 3000);

let count = 0;
const timer = setInterval(() => {
    count += 2;
    console.log(`Counting = ${count} times`);
    if (count === 10) {
        clearInterval(timer);
    }
}, 2000);

// ------ example 3: modules ------
console.log("\n------ Example 3: Modules -----");
const fs = require("fs"); // Correct module for file operations
const name = require("./mod"); // Ensure mod.js exists and exports the needed functions

console.log(name.helper("Peter"));
console.log(name.id(12345));
console.log(name.email("Ianm59034@gmail.com"));

// ------ example 4: creating a server ------
console.log("\n------ Example 4: Creating a Server -----");

const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    const readStream = fs.createReadStream(__dirname + "/index.html");
    
    // Pipe the stream to the response
    readStream.pipe(res);
});

// Start the server on port 3000
server.listen(3000, () => {
    console.log("Server is running!"); 
});
