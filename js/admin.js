class Productos{
    constructor(nombre,precio,info,foto){
         this.nombre=nombre,
        this.id= Date.now(),
        this.precio=precio,
        this.info=info,
        this.foto=foto
       
    }
}





// capturar
const form=document.getElementById("form")
const nombre=document.getElementById("nombre")
const precio=document.getElementById("precio")
const foto=document.getElementById("foto")
const info=document.getElementById("info")
// 
const array=JSON.parse(localStorage.getItem('producto',))||[]

const funcioform=(e)=>{
e.preventDefault()

 const producto=new Productos(nombre.value,precio.value,info.value,foto.value)
 array.push(producto)

limpiarform()
guardar()//npmbre nnunca tiene que llamarse localstorage

location.reload()


}
const buscarlocal=()=>{
  if(array.length!==0){
    array.map((element)=>dibujar(element))
  }
    
}
const dibujar=(element)=>{
    let tabla=document.querySelector("tbody")
    tabla.innerHTML+=`   <tr data-id="${element.id}">
                    <td>$${element.precio}</td>
                    <td>${element.nombre}</td>
                    <td>
                         
                       <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal1" onclick="ver(${element.id})">Ver</button>
                        <button class="btn btn-warning" onclick="editar(${element.id})">Editar</button>
                        <button class="btn btn-danger" onclick="borrarElemento(${element.id})">Borrar</button>
                    </td>  
                </tr>`
 
    
       window.editar=(id)=>{
       const index=array.findIndex(element=>element.id===id)
       
       if(index!==-1){ 
        
        let newname=prompt("Actualize nombre del producto")
        let newinfo=prompt("Actualize info")
        let newfoto=prompt("Actualize imagen del Producto")
        let newprecio=prompt("Actualize Precio")
        array[index].nombre=newname;
        array[index].info=newinfo;
        array[index].foto=newfoto;
        array[index].precio=newprecio
       

       
         


        document.querySelector(`tr[data-id="${id}"]`)
        location.reload()
        guardar()
        Swal.fire("Se edito el Producto "+array[index].nombre);

        
         
       }
      
       }
      window.ver=(id)=>{
  
        const index=array.findIndex(element=>element.id===id)
        if(index!==-1){
            let modal=document.getElementById("producto-modal") 
            modal.innerHTML=`   <div class="caja">
        <img src="${array[index].foto}" id="img">
        <hr>
        <div class="info">
          <p class="nameproducto" id="producto-nombre">${array[index].nombre}</p>
          <div>
            <p class="carasteristicas" id="Producto-info">${array[index].info}</p>
          </div>
         
          <p class="precio"id="producto-precio">$${array[index].precio}</p>
         
         </div>
      </div>`
        }

        }

    window.borrarElemento = (id) => {
      const index = array.findIndex(element => element.id === id);
      if (index !== -1) {
        Swal.fire({
          title: "Estas seguro de Borrar este Producto",
          text: `El Producto que intenta eliminar es ${array[index].nombre}`,
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Si"
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              title:"Producto Borrado",
              text: "!Borrado con Exito!",
              icon: "success"
              
            }); 
            array.splice(index, 1);
          }
        });
         
          guardar();
         
          document.querySelector(`tr[data-id="${id}"]`).remove();
      }
  };
}


const limpiarform=()=>{

 form.reset()
} 
const guardar=()=>{
localStorage.setItem('producto',JSON.stringify(array))
}
console.log(array)

form.addEventListener("submit",funcioform)
buscarlocal()//render va al final del codigo
