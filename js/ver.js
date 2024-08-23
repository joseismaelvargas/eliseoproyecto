

console.log(window.location.search)
const parametro= new URLSearchParams(window.location.search).get('id')
console.log(parametro)
const array=JSON.parse(localStorage.getItem('producto')) 

const container=document.getElementById("Productos")
const buscar=array.find((element)=>element.id==parametro)
console.log(buscar)

  container.innerHTML=` <div class="row">
            <div class="col-12 col-md-6">
                <div id="carouselExampleIndicators" class="carousel slide">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="${buscar.foto}" class="img-carousel" alt="img">
                        </div>
                        <div class="carousel-item">
                            <img src="${buscar.foto}" class="img-carousel" alt="img">
                        </div>
                        <div class="carousel-item">
                            <img src="${buscar.foto}" class="img-carousel" alt="img">
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

            <div class="col-12 col-md-6 d-flex ">
              <div class="Carasteristicas">
                <h2  class="nombre">${buscar.nombre}</h2>
                <h1 class="precio">$${buscar.precio}</h1>
                <p class="info">${buscar.info}</p>  
                <a href="" class="WhatsApp">
               <i class="WhatsApp bi bi-whatsapp"></i>
                </a>
              </div>
           

            
             </div>
               
            </div>
        </div>`
 


