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
      <div id="carouselExampleCaptions${element.id}" class="carousel slide">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions${element.id}" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions${element.id}" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="imgproductos carousel-inner">
          <div class="carousel-item active">
            <img src="${element.foto}" class="img-producto d-block w-100" alt="...">
            
          </div>
          <div class="carousel-item">
            <img src="${element.foto}" class="img-producto d-block w-100" alt="...">
           
          </div>
          <div class="carousel-item">
            <img src="${element.foto}" class="img-producto d-block w-100" alt="...">
            
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions${element.id}" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions${element.id}" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <hr>

      <div class="info" >
       <p class="nameproducto">${element.nombre}</p>
       <div>
         <p class="carasteristicas" id="padre">${element.info}</p>
         
       </div>
      
       <p class="precio">$${element.precio}</p>
       <a href="" class="WhatsApp">
        <i class="WhatsApp bi bi-whatsapp"></i>
       </a>
      </div>
    </div>`)
  div.innerHTML=producto


}
publicar()
