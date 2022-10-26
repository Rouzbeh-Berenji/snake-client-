// establishes a connection with the game server
const conn = require("./client.js");
  // interpret incoming data as text
  conn.setEncoding("utf8");
  console.log("Connecting ...");
conn.on("connect", (msg) => {
  // code that does something\
  conn.write ("Name: ber")
  console.log(msg);
});