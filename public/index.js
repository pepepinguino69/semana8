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

const campo = document.getElementById("messageField")

campo.addEventListener("keydown",(evt)=>{
    console.log(evt.key)
    if(evt.key === "Enter"){
        socketClient.emit("message",{
            username:user,
            message:campo.value
    })}
})

const messageContainer = document.getElementById("messageContainer");
const borrar=document.getElementById("borrar");
borrar.addEventListener('click',(e)=>{socketClient.emit("borrar","!!**!!")})
socketClient.on("historico",(data)=>{
    let elementos=`;
      <table>
        
      
      <thead>
      
    <th>ID</th>
    <th>Title</th>
    <th class="price">Price</th>
    <th class="img">Image</th>
          
  </thead>
      <tbody>
        {{#each productos}}
    <tr>
      <td><a href="#">{{this.id}}</a></td>
      <td>{{this.title}}</td>
      <td class="price">{{this.price}}</td>
      <td class="img"><img src="{{this.url}}"/></td>
    </tr>
        {{/each}}
  </tbody>
        </table>
    </div>
    data.reverse().forEach(item=>{
        elementos = elementos + `<p><strong>${item.title}</strong>-${item.price}</p>`;
    });
    messageContainer.innerHTML = elementos;
})

socketClient.on("newUser",(newUser)=>{
    Swal.fire({
        text:"nuevo usuario conectado: "+newUser,
        toast:true
    })
})