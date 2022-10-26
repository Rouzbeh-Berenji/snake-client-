const net = require("net");
// establishes a connection with the game server
const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541 // PORT number here,
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");
  console.log("Connecting ...");
conn.on("connect", (msg) => {
  // code that does something\
  console.log("Apple");
  console.log(msg);
});