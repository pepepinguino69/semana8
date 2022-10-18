const express = require("express");
const {Server} = require("socket.io");



const app = express();

const PORT = process.env.PORT || 8080;

//servidor de express
const server = app.listen(PORT, ()=>console.log(`listening on port ${PORT}`));

//servidor de websocket y lo conectamos con el servidor de express
const io = new Server(server);

app.use(express.static(__dirname+"/public"));

const historicoMensajes = [];

io.on("connection",(socket)=>{
    console.log("nuevo usuario conectado", socket.id);
    //enviar a todos menos al socket conectado
    //io.sockets.emit("newUser","a new user has joined");
    socket.emit("historico",historicoMensajes)
    socket.on("borrar",data=>{
      historicoMensajes.length=0;
      historicoMensajes.push(data);
      io.sockets.emit("historico",historicoMensajes)})
    socket.on("message",data=>{
        console.log(data);
        historicoMensajes.push(data.p));
        //enviar a todos
        io.sockets.emit("historico",historicoMensajes);
    })
})