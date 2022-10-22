console.log("javascript funcionando");
let user;
const campoMsg = document.getElementById("messageField")

campoMsg.addEventListener("keydown",(evt)=>{
    console.log(evt.key)
    if(evt.key === "Enter"){
        let msg={
            username:user,
            message:campoMsg.value
        };socketClient.emit("messageChat",msg);campoMsg.value=""
    }
})


newUser()
const socketClient = io()
const messageContainer = document.getElementById("messageContainer");
socketClient.on("historico",(data)=>{
    let elementos="";
    data.reverse().forEach(item=>{
        elementos = elementos + `<p><strong>${item.username}</strong>:${item.message}</p>`;
    });
    messageContainer.innerHTML = elementos;
})
socketClient.on("historico2",(data)=>{
    let elementos="";
    data.reverse().forEach(item=>{
        elementos = elementos + `<p><strong>POR ACA</p>`;
    });
    messageContainer.innerHTML = elementos;
})

socketClient.on("newUser",(newUser)=>{
    Swal.fire({
        text:"nuevo usuario conectado: "+newUser,
        toast:true
    })
})


const campo = document.getElementById("form")
socketClient.emit("firstConnection",{username:"System"})  


const productContainer = document.getElementById("productContainer");

socketClient.on("newUser",(newUser)=>{
    Swal.fire({
        text:"nuevo usuario conectado: "+newUser,
        toast:true
    })

})
async function newUser(){
Swal.fire({
    title:"Hola usuario",
    text:"bienvenido, ingresa tu mail",
    input:"text",
    allowOutsideClick:false
    }).then(respuesta=>{
    user = respuesta.value;
   //socketClient.emit("message",{username:"System",message:user+": se ha unido"})
   socketClient.emit("newUser",{username:"System",message:user+": se ha unido"})
  
  
  
})};
