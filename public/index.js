console.log("javascript funcionando");

const socketClient = io();


let user;
//newUser()

async function newUser(){
Swal.fire({
    title:"Hola usuario",
    text:"bienvenido, ingresa tu usario",
    input:"text",
    allowOutsideClick:false
    }).then(respuesta=>{
    //user = respuesta.value;
  
   socketClient.emit("message",{username:"System",message:user+": se ha unido"})
  
  
  
})};
user ="System"

const campo = document.getElementById("form")

campo.addEventListener('click',(evt)=>{evt.preventDefault();
        let body={
          title:title.value,
          price:price.value,
          url:url.value};

        socketClient.emit("message",body)
})

const messageContainer = document.getElementById("messageContainer");
const borrar=document.getElementById("borrar");
borrar.addEventListener('click',(e)=>{socketClient.emit("borrar","!!**!!")})
socketClient.on("historico",(data)=>{
    let elementos=`
      <table>
        
      
      <thead>
      
    <th>ID</th>
    <th>Title</th>
    <th class="price">Price</th>
    <th class="img">Image</th>
          
  </thead>
      <tbody>`
    data.forEach(item=>{
        elementos = elementos + ` <td><a href="#">${item.id}</a></td>
      <td>${item.title}</td>
      <td class="price">${item.price}</td>
      <td class="img"><img src="${item.url}"/></td>
    </tr>`
    });
    messageContainer.innerHTML = elementos;
})

socketClient.on("newUser",(newUser)=>{
    Swal.fire({
        text:"nuevo usuario conectado: "+newUser,
        toast:true
    })
})