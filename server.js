// server.js
const express = require("express");
const luxon= require ("luxon")
const { DateTime } = require("luxon");
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer();
//require('crypto').randomBytes(64).toString('hex')->genera el token
//guardado en el .env
const dotenv = require('dotenv');


const  Contenedor  = require('./Contenedor.js').Contenedor

const myInstance = new Contenedor("./productos.txt");

// get config vars
dotenv.config();

// access config var
process.env.TOKEN_SECRET;
function generateAccessToken(username) {
  return jwt.sign(username, process.env.TOKEN_SECRET, { expiresIn: '1800s' });
}

app.use(bodyParser.urlencoded({ extended: true }));


//let datos = DateTime.now().setZone('America/Argentina/Buenos_Aires').toLocaleString({ month: 'long', day: 'numeric',year:'numeric',hour:'numeric',minute:'numeric' })
const app = express();
const path = require("path");
const VIEWS = path.join(__dirname, "views");
app.set('view engine', 'pug')

app.use(express.static('public'))

let acum=""
app.get("/", (req, res) => res.sendFile(__dirname + '/views/home.html'))

//app.get('/productos', (req, res) => {myInstance.getAll().then((data)=>{data.forEach(e=>acum+=`<img src="${e.url}"><h3>${e.id}-${e.title}----${e.price}---</h3>`);res.send(acum)})});


app.get('/productoRandom', (req, res) => {
        myInstance.getById(-1).then((data)=>
              res.render('card',{id:data.id,price:data.price,title:data.title,img:data.url,nombre:'Ariel Rubel'}))})

app.get('/producto/:xx', (req, res) => {const { xx } = req.params;myInstance.getById(xx).then((data) => res.render('card',{id:data.id,price:data.price,title:data.title,img:data.url,nombre:'Ariel Rubel'}))})
//app.post('/newProduct/',(req, res) => {res.render('the_template', { name: req.body.name });
app.get('/json/productos',(req, res) => {myInstance.getAll().then((data) => res.json(data))});
app.get('/index.html', (req, res) => res.sendFile(__dirname + '/views/index.html'))
app.get('/index', (req, res) => res.sendFile(__dirname + '/views/index.html'))
app.get('/signup.html', (req, res) => res.sendFile(__dirname + '/views/signup.html'))
app.get('/addProduct.html', (req, res) => res.sendFile(__dirname + '/views/addProduct.html'))
app.get('/addProduct', (req, res) => res.sendFile(__dirname + '/views/addProduct.html'))
app.get('/signup', (req, res) => res.sendFile(__dirname + '/views/signup.html'))
app.get('/json/producto/:id',(req, res) => {const { id } = req.params;myInstance.getById(id).then((data) => res.json(data))});
app.get('/json/productoRandom/', (req, res) => {myInstance.getById(-1).then((data) => res.json(data))});

app.get('/productos', (req, res) => {
        myInstance.getAll().then((data)=>
              res.render('card2',{data}))})



const port = 8080;
app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
