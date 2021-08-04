const express = require('express');
const app = express();
 
const server = app.listen(8000, () =>
  console.log('The server is all fired up on port 8000')
);
 
// To initialize the socket, we need to
// invoke the socket.io library
// and pass it our Express server
const io = require('socket.io')(server, { cors: true });
io.on("connection", socket => 
{
    // SERVER - Inside the io.("connection", socket => {}) function, add a console.log("Nice to meet you. (shake hand)")
    console.log("nice to meet you");
        // socket.emit("Welcome",data);
        socket.emit("Welcome opopo ",{data:"Welcome to this socket test!"});
        
    
});



