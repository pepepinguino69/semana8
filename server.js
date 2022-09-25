// server.js
const express = require("express");
const luxon= require ("luxon")
const { DateTime } = require("luxon");
const  Contenedor  = require('./Contenedor.js').Contenedor

const myInstance = new Contenedor("./productos.txt");

let datos = DateTime.now().setZone('America/Argentina/Buenos_Aires').toLocaleString({ month: 'long', day: 'numeric',year:'numeric',hour:'numeric',minute:'numeric' })
const app = express();
const path = require("path");
const VIEWS = path.join(__dirname, "views");

app.get("/productos", (request, response) => {myInstance.getAll().then((data) => response.send(data))});

app.get("/json/productos", (request, response) => {myInstance.getAll().then((data) => response.json(data))});






app.get('/productos/:id', (req, res) => {const { id } = req.params;myInstance.getById(id).then((data) => res.send(data))});
app.get('/json/productos/:id', (req, res) => {const { id } = req.params;myInstance.getById(id).then((data) => res.json(data))});
  
  
//**********************************************************************************************
//app.use(express.json());
//app.post('/save', (req, res) => {
//  const { newObject} = req.body;    

//************************************************************************************************
                                         
                                         


app.get("/", (request, response) => {
  

  const mostrar = `<h1>Hola bienvenido a mi primer servidor ${datos}<h1>
  <h2>Endpoints disponibles</h2>
  <h3>Visualizar todos los productos : /productos</h3>
  <h3>Visualizar productos por la id : /productos/id</h3>
  
  <h4>Proximamente</h4>
  
  <h4>POST</h4>
  <h4>PUT</h4>
  <h4>DELETE</h4>
  
  `;
  response.send(mostrar);
});

app.get("/index", (request, response) => {
  response.sendFile("index.html", { root: VIEWS });
});

const port = 8080;
app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
