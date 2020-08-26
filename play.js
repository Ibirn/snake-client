const { connect } = require("./client.js")
//removed connect function to ./client.js
console.log('Connecting ...');
connect();

const setupInput = () => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  //escape function that takes argument and exits:
  const handleUserInput = (key) => {
    if (key === '\u0003') {
      process.exit();
  }}
  //stdin listening for data (input) and when detected, runs handleUserInput with that keypress as argument.
  stdin.on('data', (key) => {
    handleUserInput(key)
  })

  return stdin;
}



setupInput();