const net = require('net');

const connect = function () {
  const conn = net.createConnection({
    host: '135.23.222.131',
    port: 50542
  });
  conn.setEncoding('utf8');
  //below added to read messages from server:
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  return conn;
}

console.log('Connecting ...');
connect();
