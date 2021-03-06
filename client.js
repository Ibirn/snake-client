const net = require('net');
const { IP, PORT } = require("./constants");

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  conn.setEncoding('utf8');
  //below added to read messages from server:
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  // added to identify our snake on connection:
  conn.on('connect', () => {
    conn.write("Name: KMC");
  });
  //added and removed to understand snake logic.
  // conn.on('connect', () => {
  //   conn.write("Move: up")
  // })

  // setInterval(() => {
  //   conn.write("Move: up");
  // }, 1000)


  return conn;
};

//added for exports:
module.exports = {
  connect,
};