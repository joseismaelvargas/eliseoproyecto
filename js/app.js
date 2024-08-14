const padre=document.getElementById("padre")


const parrafo=document.getElementById("parrafo")

let parrafonew=document.createElement("p")
parrafonew.classList.add="parrafo"
vermas.addEventListener("click",()=>{
   if(parrafonew.style.display==="none"){
      parrafonew.innerText="Para mantener una estética uniforme y profesional en nuestra página de ventas de productos, hemos actualizado el estilo de los íconos de redes sociales a un elegante color negro. Esta modificación asegura que los íconos de Facebook, Instagram, YouTube y TikTok se presenten en negro tanto en estado normal como al pasar el cursor sobre ellos. Esta decisión de diseño se ha tomado con el objetivo de mejorar la apariencia visual de nuestra página y proporcionar una experiencia de usuario coherente y moderna, alineada con la identidad de nuestra marca."
      vermas.innerText="Ver menos..."
      parrafonew.style.display = "block";
      padre.insertBefore(parrafonew,vermas)
      
        console.log(padre.children)
  
   }else{ 
    parrafonew.style.display="none"
     vermas.innerText="ver mas..."
     padre.removeChild(parrafonew)
   }
})