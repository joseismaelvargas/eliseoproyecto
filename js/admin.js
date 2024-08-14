class Productos{
    constructor(nombre,precio,info,foto){
         this.nombre=nombre,
        this.id=crypto.randomUUID(),
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
const array=[]

const funcioform=(e)=>{
e.preventDefault()

 const producto=new Productos(nombre.value,precio.value,info.value,foto.value)
 array.push(producto)

limpiarform()
}
const limpiarform=()=>{

 form.reset()
} 
console.log(array)

form.addEventListener("submit",funcioform)