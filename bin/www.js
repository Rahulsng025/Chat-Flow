const app = require("../app");
const debug = require("debug")("angular2-nodejs:server");
const http = require("http");

//Port environment for express server
const port = normalizePort(process.env.port || 3000);
app.set("port", port);

// Create http server
const server = http.createServer(app);

//Attaching socket.io to http server to run on port 3000
var io = require("socket.io").listen(server);

// Event handler
// On method triggers automatically whenever a new connection is made
io.on("connection", (socket) => {
  // connection is a event
  console.log("New connection made");

  //joining room
  socket.on("join", function (data) {
    socket.join(data.room); // Here data will have two variable ie the username and the room
    console.log(data.user + " Joined the room :" + data.room);

    // New User join method
    // Inform to all other user's who belong to this room
    // that a new particular user has join.
    socket.broadcast.to(data.room).emit("new user joined", {
      // to is method to particularly send a message to particular room only
      user: data.user,
      message: "has joined the room",
    });
  });

  // Leaving room
  socket.on("leave", function (data) {
    console.log(data.user + " Left the room : " + data.room);

    socket.broadcast.to(data.room).emit("left room", {
      user: data.user,
      message: "has left the room",
    });
    socket.leave(data.room);
  });

  // Message event
  socket.on("message", function (data) {
    io.in(data.room).emit("new message", {
      // in method is used send and display it to our screen also
      user: data.user,
      message: data.message,
    });
  });
});

// Listen on port, configuration

server.listen(port);
server.on("error", onError);
server.on("listening", onListening);

// Normalize a port into a number, string, or false.
function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

// Event listner for HTTP server "error" event
function onError(error) {
  if (error.syscall !== "listen") {
    throw error;
  }

  var bind = typeof port === "string" ? "Pipe" + port : "Port" + port;

  // Handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
}

// Event listener for HTTP server "listening event"
function onListening() {
  var addr = server.address();
  var bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
  debug("Listening on " + bind);
}
