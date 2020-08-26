const { MOVE_UP_KEY, MOVE_DOWN_KEY, MOVE_LEFT_KEY, MOVE_RIGHT_KEY, MESSAGES } = require("./constants")
let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  //escape function that takes argument and exits:
  const handleUserInput = (key) => {
    if (key === '\u0003') {
      process.exit();
    } else if (key === MOVE_UP_KEY) {
      conn.write("Move: up")
    } else if ( key === MOVE_DOWN_KEY) {
      conn.write("Move: down")
    } else if ( key === MOVE_LEFT_KEY) {
      conn.write("Move: left")
    } else if (key === MOVE_RIGHT_KEY) {
      conn.write("Move: right")
    } else if (key === 'q') {
      conn.write("Say: We are snake legion")
    } else if (key === 'e') {
      conn.write("Say: SSSSSSSnek")
    }
  }
  //stdin listening for data (input) and when detected, runs handleUserInput with that keypress as argument.
  stdin.on('data', (key) => {
    handleUserInput(key)
  })
  return stdin;
}

module.exports = {
  setupInput,
}