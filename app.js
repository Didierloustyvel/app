var PORT = process.env.PORT || 8080
const express = require("express")
const http = require("http");
const app = express()
const server = http.createServer(app);
const fs = require('fs');

const io = require("socket.io")(server);
app.set("views", "./views")
app.set("view engine", "ejs")
app.use("/assets", express.static("public"))
app.get("/*", (req, res) => {
  res.render("index.ejs")
})

io.sockets.on('connection', async (socket) => {
    socket.on('data', async (value) => {
        console.log(value)
    });
})

server.listen(PORT, () => console.log("Server started"))