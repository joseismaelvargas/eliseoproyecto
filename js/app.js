// const padre=document.getElementById("padre")

// const vermas=document.getElementById("vermas")


// let parrafonew=document.createElement("p")
// parrafonew.classList.add="parrafo"
// vermas.addEventListener("click",()=>{
//    if(parrafonew.style.display==="none"){
//       parrafonew.innerText="Para mantener una estética uniforme y profesional en nuestra página de ventas de productos, hemos actualizado el estilo de los íconos de redes sociales a un elegante color negro. Esta modificación asegura que los íconos de Facebook, Instagram, YouTube y TikTok se presenten en negro tanto en estado normal como al pasar el cursor sobre ellos. Esta decisión de diseño se ha tomado con el objetivo de mejorar la apariencia visual de nuestra página y proporcionar una experiencia de usuario coherente y moderna, alineada con la identidad de nuestra marca."
//       vermas.innerText="Ver menos..."
//       parrafonew.style.display = "block";
//       console.log(padre)
//       padre.insertBefore(parrafonew,vermas)
      
//         console.log(padre.children)
  
//    }else{ 
//     parrafonew.style.display="none"
//      vermas.innerText="ver mas..."
//      padre.removeChild(parrafonew)
//    }
// })

const publicar=()=>{
  
  const array=JSON.parse(localStorage.getItem('producto')) 
  console.log(array)
  let div=document.getElementById("Productos")
  let producto=array.map(element=>` <div class="caja">
      <div>
      <img src="${element.foto}" alt="img" class="img-producto d-block w-100">
      </div>
      <hr>

      <div class="info" >
       <p class="nameproducto">${element.nombre}</p>
       <div>
         <p class="carasteristicas" id="padre">${element.info}</p>
         
       </div>
      
       <p class="precio btn btn-primary">$${element.precio}</p>
       <button class="btn btn-primary" onclick=verproducto(${element.id})>Ver detalles</button><br>

       <a href="" class="WhatsApp">
        <i class="WhatsApp bi bi-whatsapp"></i>
       </a>
      </div>
    </div>`)
  div.innerHTML=producto
window.verproducto=(id)=>{
  window.location.href='/page/detalles.html?id='+id

}

}
publicar()
