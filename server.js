
const express = require("express");
const productsRouter = require("./routes/routes");

const app = express();

app.listen(8080,()=>console.log("server listening on port 8080"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const path = require("path");
const VIEWS = path.join(__dirname, "views");
app.set('view engine', 'pug')
app.use(express.static('public'));
app.use("/api/productos", productsRouter);
app.get('/', (req, res) => res.sendFile(__dirname + '/views/crud.html'))
app.get('/signup', (req, res) => res.sendFile(__dirname + '/views/signup.html'))
app.get('/index', (req, res) => res.sendFile(__dirname + '/views/index.html'))



