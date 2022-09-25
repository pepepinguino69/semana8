// server.js
const express = require("express");

const app = express()
const path = require("path");
const VIEWS = path.join(__dirname, "views");
app.get("/", (request, response) => { response.send("hola estoy conectado a una api con get") })

app.get("/index", (request, response) => {
    response.sendFile("index.html", { root : VIEWS }
    );
});
app.get("/aboutme", (request, response) => {
    const datos = 23
    const mostrar = `<h1>Hola bienvenido a mi primer servidor${datos}<h1>`;
	response.send(mostrar);
});

const port = 80;
app.listen(port, () => {
	console.log(`server listening on port ${port}`);
});


