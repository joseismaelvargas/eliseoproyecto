class producto{
    constructor(nombre,precio,info,foto){
       this.id=crypto.randomUUID(),
       this.nombre=nombre,
       this.precio=precio,
       this.info=info,
       this.foto=foto
    }
}
