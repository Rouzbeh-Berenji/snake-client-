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
  } else if (stdin === "w"){
    Connection.write("Move: up")
  } else if (stdin === "a"){
    Connection.write("Move: left")
  } else if (stdin === "s"){
    Connection.write("Move: down")
  } else if (stdin === "d"){
    Connection.write("Move: right")
  }
}
module.exports = {setupInput};