const net = require("net");
const { IP, PORT } = require("./constants");
const conn = net.createConnection({
  host: IP,
  port: PORT // PORT number here,
});
conn.on('data', (msg) => {
  console.log('Successfully connected to game server');
  console.log(msg);
})
module.exports = {conn};