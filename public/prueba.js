
          const hora=document.querySelector("#time");
          const fecha = new Date
          const ano = fecha.getFullYear()
          const mes = fecha.getMonth()+1
          const dia = fecha.getDate()
          hora.innerHTML+=` al:  ${dia}-${mes}- ${ano}`