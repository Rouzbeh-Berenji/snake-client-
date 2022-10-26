const net = require("net");
const conn = net.createConnection({
  host: '165.227.47.243',
  port: 50541 // PORT number here,
});
conn.on('data', (msg) => {
  console.log('Successfully connected to game server');
  console.log(msg);
})
module.exports = conn;