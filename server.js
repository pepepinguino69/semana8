const express = require("express");
const {Server} = require("socket.io");



const app = express();

const PORT = process.env.PORT || 8080;

//servidor de express
const server = app.listen(PORT, ()=>console.log(`listening on port ${PORT}`));

//servidor de websocket y lo conectamos con el servidor de express
const io = new Server(server);
const  Contenedor  = require('./Contenedor.js').Contenedor

const myChatInstance = new Contenedor("chat2.txt");
myChatInstance.save({id:5,prueba:"Ariel"})

app.use(express.static(__dirname+"/public"));

const historicoMensajes = [];

io.on("connection",(socket)=>{
    
    
  socket.on("messageChat",msgs=>{historicoMensajes.push(msgs);console.log(msgs);console.log(msgs);myChatInstance.save(msgs);
     myChatInstance.getAll().then((historicoMensajes) => {io.sockets.emit("historico",historicoMensajes);historicoMensajes.push(msgs);io.sockets.emit("historico",historicoMensajes)})
       
        //console.log(msgs);
        //historicoMensajes.push(msgs);console.log(msgs)
      
        //enviar a todos
       io.sockets.emit("historico",historicoMensajes);
      
    })
  socket.on("newUser",data=>{
        console.log(data);
        myChatInstance.save({id:5,prueba:"Ariel"})
        historicoMensajes.push(data);
        //enviar a todos
        io.sockets.emit("historico",historicoMensajes);
    })
  
       
    
})