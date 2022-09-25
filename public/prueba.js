
          const hora=document.querySelector("h1");
          const fecha = Date.now()
          const UTC =parseInt((fecha/365/24/3600/1000))+1970
          const mes=UTC

          hora.innerHTML+=`${mes}`