// establishes a connection with the game server
const {conn, } = require("./client.js");
const {setupInput, } = require("./input.js");
  // interpret incoming data as text
  console.log("Connecting ...");

conn.on("connect", (msg) => {
  //code that does something
  conn.write ("Name: ber")
    setTimeout(() => {
    conn.write ("Move: up")
  }, 100);
  console.log(msg);
});
// const connect = conn();
// setupInput(connect);