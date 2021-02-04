const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);

const LISTEN_PORT = 8080;

server.listen(LISTEN_PORT);
console.log("listen on port: "+LISTEN_PORT);

//set root folder of all web files to public folder
app.use(express.static(__dirname + "\public"));

app.use("/scripts", express.static('./scripts/'));

//how to run node .\app.js

//set default route
app.get("/", function(req,res){
    res.sendFile(__dirname + "/public/index.html");
});
