// server.js
//const express = require("express");
//const  Contenedor  = require('../Contenedor.js').Contenedor
//const productRouter = express.Router();

//const myInstance = new Contenedor("/.productos.txt");


//module.exports = productRouter

const express = require("express");
const Contenedor = require("../Contenedor").Contenedor
const productsRouter = express.Router();

const myInstance = new Contenedor("productos.txt");

productsRouter.get('/api/productos/:xx',  (req, res) => {const { xx } = req.params;myInstance.getById(xx).then((data) => res.json({id:data.id,price:data.price,title:data.title,url:data.url}))})





productsRouter.get("/home",(req,res)=>{
    res.send("peticion home")
})

module.exports = productsRouter;