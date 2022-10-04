// server.js
const express = require("express");
const productRouter = expressRouter();


productRouter.get("/",(req,res)=>{res.send("peticion recibida desde router produyctos")})
productRouter.delete('/api/productos/:xx', (req, res) => {const { xx } = req.params;myInstance.deleteById(xx).then((data) => res.send(data))});
productRouter.put('/api/productos/:xx', (req, res) => {const { xx } = req.params;myInstance.putById(xx,req.body).then ((data)=> res.send('modificado'))})
productRouter.get('/api/productos/:xx',  (req, res) => {const { xx } = req.params;myInstance.getById(xx).then((data) => res.json({id:data.id,price:data.price,title:data.title,url:data.url}))})
productRouter.post('/api/productos/', function(req, res){
myInstance.save(req.body)    .then((data) => myInstance.getById(req.body.id).then((data) => res.render('card',{id:data.id,price:data.price,title:data.title,img:data.url})))});
//app.get('/signup', (req, res) => res.sendFile(__dirname + '/views/signup.html'))

const port = 8080;
app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});

module.exports = productRouter()
