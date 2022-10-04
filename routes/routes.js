// server.js
//const express = require("express");
//const  Contenedor  = require('../Contenedor.js').Contenedor
//const productRouter = express.Router();

//const myInstance = new Contenedor("/.productos.txt");


//module.exports = productRouter

const express = require("express");
const Contenedor = require("../Contenedor")
const productsRouter = express.Router();
console.log(Contenedor)

const myInstance = new Contenedor("productos.txt");

productsRouter.get("/",(req,res)=>{res.send("peticion recibida desde router productos")})
productsRouter.delete('/:xx', (req, res) => {const { xx } = req.params;myInstance.deleteById(xx).then((data) => res.send(data))});
productsRouter.put(':xx', (req, res) => {const { xx } = req.params;myInstance.putById(xx,req.body).then ((data)=> res.send('modificado'))})
productsRouter.get('/:xx',  (req, res) => {const { xx } = req.params;myInstance.getById(parseInt(xx)).then((data) => res.json({id:data.id,price:data.price,title:data.title,url:data.url}))})
productsRouter.post('/', function(req, res){myInstance.save(req.body)    .then((data) => myInstance.getById(req.body.id).then((data) => res.render('card',{id:data.id,price:data.price,title:data.title,img:data.url})))});
//productsRouter.get("home",(req,res)=>{res.send("peticion home")})

module.exports = productsRouter;