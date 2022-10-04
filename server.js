// server.js
const express = require("express");
const productRouter = require("./routes/routes")
const app = express();
const port = 8080;
app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use("/api/productos", productRouter);
const path = require("path");
app.use(express.static('public'))
let acum=""
//app.get("/", (req, res) => res.sendFile(__dirname + '/views/home.html'))


//app.delete('/json/producto/:xx', (req, res) => {const { xx } = req.params;myInstance.deleteById(xx).then((data) => res.send(data))});
//app.put('/json/producto/:xx', (req, res) => {const { xx } = req.params;myInstance.putById(xx,req.body).then ((data)=> res.send('modificado'))})
//app.get('/json/producto/:xx',  (req, res) => {const { xx } = req.params;myInstance.getById(xx).then((data) => res.json({id:data.id,price:data.price,title:data.title,url:data.url}))})
//app.get('/crud.html', (req, res) => res.sendFile(__dirname + '/views/crud.html'))
//app.post('/addProduct/', function(req, res){
//myInstance.save(req.body)    .then((data) => myInstance.getById(req.body.id).then((data) => res.render('card',{id:data.id,price:data.price,title:data.title,img:data.url})))});
//app.get('/signup', (req, res) => res.sendFile(__dirname + '/views/signup.html'))
//app.get('/json/productos', (req, res) => myInstance.getAll().then((data) => res.json({data})))

  

