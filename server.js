const express = require("express");
const {Server} = require("socket.io");



const app = express();

const PORT = process.env.PORT || 8080;

//servidor de express
const server = app.listen(PORT, ()=>console.log(`listening on port ${PORT}`));

//servidor de websocket y lo conectamos con el servidor de express
const io = new Server(server);
const  Contenedor  = require('./Contenedor.js').Contenedor
const myInstance = new Contenedor("productos.txt");
const myChatInstance = new Contenedor("chat2.txt");


app.use(express.static(__dirname+"/public"));

const historicoMensajes = [];

io.on("connection",(socket)=>{
    socket.on("firstConnection",data=>{
    myInstance.getAll().then((prods) => io.sockets.emit("productos",prods));
    myChatInstance.getAll().then((msgs) => io.sockets.emit("historico",msgs));

    
    //socket.emit("historico",historicoMensajes)
    })
    
  socket.on("messageChat",msgs=>{historicoMensajes.push(msgs);io.sockets.emit("historico",historicoMensajes);myChatInstance.save(msgs);
     myChatInstance.getAll().then((historicoMensajes) => {historicoMensajes.push(msgs);io.sockets.emit("historico",historicoMensajes)})
       
       
        
        //historicoMensajes.push(msgs);
      
        //enviar a todos
       io.sockets.emit("historico",historicoMensajes);
      
    })
  
  
    socket.on("message",data=>{myInstance.save(data);
     myInstance.getAll().then((prods) => {io.sockets.emit("productos",prods);prods.push(data);io.sockets.emit("productos",prods)})
       
    })
})

function formatFecha(){
  
  let fecha=new Date()

let ano=addZero(fecha.getFullYear());
let mes=addZero(fecha.getMonth()+1)	
let dia=addZero(fecha.getDate())
let hora=addZero(fecha.getHours())	
let minutos=addZero(fecha.getMinutes())
let segundos=addZero(fecha.getSeconds())
return dia+"/"+mes+"/"+ano+"-"+hora+":"+minutos+":"+segundos}

function addZero(num){
    let addString
    num<10? addString="0":addString="";
    return addString+num}
