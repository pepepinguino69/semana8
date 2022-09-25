// server.js
const express = require("express");
const moment = require("moment");


moment.tz.setDefault("America/New_York")


const app = express();
const path = require("path");
const VIEWS = path.join(__dirname, "views");
app.get("/", (request, response) => {
  response.send(
    "hola estoy conectado a una api con get: " +
      moment().format("hh:mm").toString()
  );
});

app.get("/aboutme", (request, response) => {
  
  const datos=moment().format("hh:mm:ss")

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
