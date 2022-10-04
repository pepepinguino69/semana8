// server.js
const express = require("express");
const  Contenedor  = require('../Contenedor.js').Contenedor
//const productsRouter = express.Router();

const myInstance = new Contenedor("productos.txt");


productsRouter.get("/",(req,res)=>{res.send("peticion recibida desde router produyctos")})
//productsRouter.delete('/api/productos/:xx', (req, res) => {const { xx } = req.params;myInstance.deleteById(xx).then((data) => res.send(data))});
//productsRouter.put('/api/productos/:xx', (req, res) => {const { xx } = req.params;myInstance.putById(xx,req.body).then ((data)=> res.send('modificado'))})
//productsRouter.get('/api/productos/:xx',  (req, res) => {const { xx } = req.params;myInstance.getById(xx).then((data) => res.json({id:data.id,price:data.price,title:data.title,url:data.url}))})
//productsRouter.post('/api/productos/', function(req, res){myInstance.save(req.body)    .then((data) => myInstance.getById(req.body.id).then((data) => res.render('card',{id:data.id,price:data.price,title:data.title,img:data.url})))});

const port = 8080;
app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});

module.exports = productsRouter()
