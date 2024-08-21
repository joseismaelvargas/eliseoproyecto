

console.log(window.location.search)
const parametro= new URLSearchParams(window.location.search).get('id')
console.log(parametro)
const array=JSON.parse(localStorage.getItem('producto')) 

const container=document.getElementById("Productos")
const buscar=array.find((element)=>element.id==parametro)
console.log(buscar)

  container.innerHTML=` <div class="caja">
      <div id="carouselExucto=buscar.map((element)=>ampleCaptions${buscar.id}" class="carousel slide">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions${buscar.id}" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions${buscar.id}" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="imgproductos carousel-inner">
          <div class="carousel-item active">
            <img src="${buscar.foto}" class="img-producto d-block w-100" alt="...">
            
          </div>
          <div class="carousel-item">
            <img src="${buscar.foto}" class="img-producto d-block w-100" alt="...">
           
          </div>
          <div class="carousel-item">
            <img src="${buscar.foto}" class="img-producto d-block w-100" alt="...">
            
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions${buscar.id}" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions${buscar.id}" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <hr>

      <div class="info" >
       <p class="nameproducto">${buscar.nombre}</p>
       <div>
         <p class="carasteristicas" id="padre">${buscar.info}</p>
         
       </div>
      
       <p class="precio">$${buscar.precio}</p>
       <button class="btn btn-primary" onclick=verproducto(${buscar.id})>Ver</button>
       <a href="" class="WhatsApp">
        <i class="WhatsApp bi bi-whatsapp"></i>
       </a>
      </div>
    </div>`
 


