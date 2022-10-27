// establishes a connection with the game server
const conn = require("./client.js");
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};
const handleUserInput = function () {
  if (stdin === "\u003c"){
process.exit ();
  }
  // your code here
};
  // interpret incoming data as text
  conn.setEncoding("utf8");
  console.log("Connecting ...");
conn.on("connect", (msg) => {
  // code that does something\
  conn.write ("Name: ber")
    setTimeout(() => {
    conn.write ("Move: up")
  }, 100);
  console.log(msg);
});