
const { Router } = require("express");
const express = require("express");
const PORT = 8080;
const appServer = express();
const router = express.Router("fs");

Router.get("/", (yeucau, trave) => {
    dât = fs.readFileSync("./html/main.htm;")
    trave.send("Main page!!!");
})

appServer.use("/", router);

appServer.Listen( PORT );
console.log("web da mo tai" + PORT);