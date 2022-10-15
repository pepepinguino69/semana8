
const express = require("express");
const productsRouter = require("./routes/routes");
const {Server}=require("server.io")
const app = express();

app.listen(8080,()=>console.log("server listening on port 8080"));

const path = require("path");
const VIEWS = path.join(__dirname, "views");
app.use(express.static(__dirname,'public'))
app.use(express.json());
app.use(express.urlencoded({extended:true}));
