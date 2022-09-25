// server.js
const express = require("express");
const luxon= require ("luxon")
const { DateTime } = require("luxon");


import { format, formatDistance, formatRelative, subDays } from 'date-fns'
let ahora = DateTime.now().setZone('America/Argentina/Buenos_Aires').minus({weeks:1}).endOf('day').toISO();

const app = express();
const path = require("path");
const VIEWS = path.join(__dirname, "views");
app.get("/", (request, response) => {
  response.send(
    "hola estoy conectado a una api con get: " 
      
  );
});

app.get("/aboutme", (request, response) => {
  
 const datos =32

  const mostrar = `<h1>Hola bienvenido a mi primer servidor${datos}<h1>`;
  response.send(mostrar);
});

app.get("/index", (request, response) => {
  response.sendFile("index.html", { root: VIEWS });
});

const port = 8080;
app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
