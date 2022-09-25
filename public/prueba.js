
          const hora=document.querySelector("#time");
          const fecha = Date.now()
          const UTC =fecha/365/24/3600/1000
          const ano =parseInt(UTC)+1970
          const mes = UTC-fecha.getFullYear()
          hora.innerHTML+=` ${ano}`