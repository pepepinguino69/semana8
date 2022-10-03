// server.js
const express = require("express");
const luxon= require ("luxon")
const { DateTime } = require("luxon");
const jwt = require('jsonwebtoken');
//const multer = require('multer');
//const upload = multer();
//require('crypto').randomBytes(64).toString('hex')->genera el token
//guardado en el .env
const dotenv = require('dotenv');
const  Contenedor  = require('./Contenedor.js').Contenedor

// get config vars
dotenv.config();

// access config var
process.env.TOKEN_SECRET;
function generateAccessToken(username) {
  return jwt.sign(username, process.env.TOKEN_SECRET, { expiresIn: '1800s' });
}


//let datos = DateTime.now().setZone('America/Argentina/Buenos_Aires').toLocaleString({ month: 'long', day: 'numeric',year:'numeric',hour:'numeric',minute:'numeric' })
const app = express();
app.use(express.json())
app.use(express.urlencoded({extended: true}))
const path = require("path");
const VIEWS = path.join(__dirname, "views");
app.set('view engine', 'pug')

app.use(express.static('public'))
const myInstance = new Contenedor("productos.txt");
app.use(express.static('public'));
let acum=""
app.get("/", (req, res) => res.sendFile(__dirname + '/views/home.html'))

app.get('/productoRandom', (req, res) => {
        myInstance.getById(-1).then((data)=>
              res.render('card',{id:data.id,price:data.price,title:data.title,img:data.url,nombre:'Ariel Rubel'}))})


app.delete('/json/producto/:xx', (req, res) => {const { xx } = req.params;myInstance.deleteById(xx).then((data) => res.send('borrado'))});
app.put('/json/producto/:xx', (req, res) => {const { xx } = req.params;myInstance.deleteById(xx);myInstance.save(req.body).then((data) => res.send('modificado'))});
app.get('/producto/:xx', (req, res) => {const { xx } = req.params;myInstance.getById(xx).then((data) => res.render('card',{id:data.id,price:data.price,title:data.title,img:data.url,nombre:'Ariel Rubel'}))})
app.get('/crud.html', (req, res) => res.sendFile(__dirname + '/views/crud.html'))
app.post('/addProduct/', function(req, res){
myInstance.save(req.body)    .then((data) => myInstance.getById(req.body.id).then((data) => res.render('card',{id:data.id,price:data.price,title:data.title,img:data.url})))});
app.get('/signup', (req, res) => res.sendFile(__dirname + '/views/signup.html'))


app.get('/productos', (req, res) => {
        myInstance.getAll().then((data)=>
              res.render('card2',{data}))})



const port = 8080;
app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
