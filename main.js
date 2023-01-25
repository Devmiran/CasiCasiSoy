/* class persona {
    constructor(nombre, apellido, NITCC, Direccion, Cuidad, Telefono, CupoDisponible, Estado, Acciones) {
        this.nombre = nombre
        this.apellido = apellido
        this.NITCC = NITCC
        this.Direccion=Direccion
        this.Cuidad=Cuidad
        this.Telefono=Telefono
        this.CupoDisponible=CupoDisponible
        this.Estado=Estado
        this.Acciones=Acciones

    }
}

class interfaz {
    añadirPersona(persona) {
        const lista = document.getElementById('personas-list')
        const elemento = document.createElement('div')
        elemento.innerHTML = `<div "row align-items-start text-center mb-4">
        <div class="card-body">
            <strong>Nombre</strong>: ${persona.nombre}
            <strong>Apellido</strong>: ${persona.apellido}
            <strong>NITCC</strong>:${persona.NITCC}
            <strong>Direccion</strong>: ${persona.Direccion}
            <strong>Cuidad</strong>: ${persona.Cuidad}
            <strong>Telefono</strong>: ${persona.Telefono}
            <strong>CupoDisponible</strong>: ${persona.CupoDisponible}
            <strong>Estado</strong>: ${persona.Estado}
            <strong>Acciones</strong<a href="#" class="btn btn-danger" name="eliminar">ELIMINAR</a>>: ${persona.Acciones}
           <a href="#" class="btn btn-danger" name="eliminar">ELIMINAR</a> 
        </div>
    </div>`

    lista.appendChild(elemento)
    this.dejarblanco()
    }

    document.getElementById('personas-form').addEventListener('submit',evento=>{
        evento.preventDefault()
        const nombre=document.getElementById('nombre').value
        const apellido=document.getElementById('apellido').value
        const NITCC=document.getElementById('documento').value
        const Direccion=document.getElementById('Direccion').value
        const Cuidad=document.getElementById('Cuidad').value
        const Telefono=document.getElementById('Telefono').value
        const CupoDisponible=document.getElementById('CupoDisponible').value
        const Estado=document.getElementById('Estado').value
        const Acciones=document.getElementById('Acciones').value
    
        const personas=new persona(nombre,apellido,NITCC, Direccion, Cuidad,Telefono,CupoDisponible,Estado,Acciones)
        const Interfaz=new interfaz 
        if (nombre==='' || apellido==='' || NITCC==='' || Direccion==='' || Cuidad==='' || Telefono==='' || CupoDisponible==='' || Estado==='' || Acciones=== ''){
            alert('CAMPOS VACIOS')
        }else {
          Interfaz.añadirPersona(personas)
        }
    }); */
    
/*     
    document.getElementById('personas-list').addEventListener('click', evento=>{
        const Interfaz1=new interfaz
        Interfaz1.eliminarPersonas(evento.target)
       
    
      
    }); */

    const boton=document.getElementById('botonn')
    boton.addEventListener('click', e=>
    
  /*   localStorage.token="ngrgjrijngr48teh4t514tj4t8gdbn4hdhd" */
      location="./index1.html"
    );