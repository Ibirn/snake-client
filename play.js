const net = require("net");

const connect = function() {
  const conn = net.createConnection({
    host: '192.168.0.139',
    port: 58542
  });

  conn.on('connect', () => {
    conn.write('Successfully connected to game server!');
  });

  conn.setEncoding('utf8')
  return conn;
}

console.log('Connecting ...');
connect();