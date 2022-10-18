console.log("javascript funcionando");

const socketClient = io();


let user;
newUser()

async function newUser(){
Swal.fire({
    title:"Hola usuario",
    text:"bienvenido, ingresa tu usario",
    input:"text",
    allowOutsideClick:false
    }).then(respuesta=>{
    user = respuesta.value;
   socketClient.emit("message",{username:"System",message:user+": se ha unido"})
  
  
  
})};

const campo = document.getElementById("messageField")

campo.addEventListener("keydown",(evt)=>{
    console.log(evt.key)
    if(evt.key === "Enter"){
        socketClient.emit("message",{
            username:user+"-"+socketClient.id,
            message:{t:campo.value,p:1}
        });campo.value=""
    }
})

const messageContainer = document.getElementById("messageContainer");
const borrar=document.getElementById("borrar");
borrar.addEventListener('click',(e)=>{socketClient.emit("borrar","!!**!!")})
socketClient.on("historico",(data)=>{
    let elementos="";
    data.reverse().forEach(item=>{
        elementos = elementos + `<p><strong>${item.username}</strong>:${item.message}</p>`;
    });
    messageContainer.innerHTML = elementos;
})

socketClient.on("newUser",(newUser)=>{
    Swal.fire({
        text:"nuevo usuario conectado: "+newUser,
        toast:true
    })
})