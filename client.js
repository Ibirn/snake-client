const connect = function() {
  const conn = net.createConnection({
    host: '',
    port: 50541
  });

  conn.setEncoding('utf8')
  conn.on('connect', () => {
    conn.write('Name: KMR');
  });
  conn.on('data', () => {
    conn.write('Move: up');
  });
  return conn;
}


module.exports = {
  connect,
}