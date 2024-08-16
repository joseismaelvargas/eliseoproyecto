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
                    <td>${element.nombre}</td>
                    <td>${element.nombre}</td>
                    <td>
                        <button class="btn btn-primary">Ver</button>
                        <button class="btn btn-warning">Editar</button>
                        <button class="btn btn-danger" onclick="borrarElemento(${element.id})">Borrar</button>
                    </td>  
                </tr>`

    window.borrarElemento = (id) => {
      const index = array.findIndex(element => element.id === id);
      if (index !== -1) {
          array.splice(index, 1);
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
