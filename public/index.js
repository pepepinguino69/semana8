console.log("javascript funcionando");

const socketClient = io();




const campo = document.getElementById("form")
socketClient.emit("firstConnection",{username:"System"})  
campo.addEventListener('click',(evt)=>{evt.preventDefault();if(title.value!=""&&price.value!=""&&url.value!=""){
        let body={
          title:title.value,
          price:price.value,
          url:url.value};
          title.value="";
          price.value="" ;
          url.value=""                         
                                       

        socketClient.emit("message",body)
}})

const messageContainer = document.getElementById("messageContainer");
const borrar=document.getElementById("borrar");
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