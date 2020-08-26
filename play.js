const { connect } = require("./client.js")
const { setupInput } = require("./input")
//removed connect function to ./client.js
//removed input function to ./input.js
console.log('Connecting ...');
//connect();

setupInput(connect());