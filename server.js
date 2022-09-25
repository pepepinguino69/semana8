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





app.get('/productos/:id', (req, res) => {const { id } = req.params;myInstance.getAll().then((data) => response.send(data))});
  
app.get('/hello/:name', (req, res) => {
  const { name } = req.params;
  res.send(`Hello ${name}`);
});
                                         
                                         
                                         
                                         


app.get("/", (request, response) => {
  

  const mostrar = `<h1>Hola bienvenido a mi primer servidor ${datos}<h1>`;
  response.send(mostrar);
});

app.get("/index", (request, response) => {
  response.sendFile("index.html", { root: VIEWS });
});

const port = 8080;
app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
