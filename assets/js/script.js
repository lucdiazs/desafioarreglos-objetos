const llamadoventas= document.querySelector("#indexventas2")
const llamadoalquiler= document.querySelector("#indexalquiler2")

//VENTA//

const propiedades_ventas = [
    {
    nombre: 'Apartamento de lujo en zona exclusiva',
    src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
    descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
    ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
    habitaciones: 4,
    banos: 4,
    costo: 5000,
    smoke: false,
    pets: false
    },
    {
    nombre: 'Apartamento acogedor en la montaña',
    src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
    descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
    ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
    habitaciones: 2,
    banos: 1,
    costo: 1200,
    smoke: true,
    pets: true
    },
    {
    nombre: 'Penthouse de lujo con terraza panorámica',
    src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
    descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
    ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
    habitaciones: 3,
    banos: 1,
    costo: 4500,
    smoke: false,
    pets: true
    },
    {
    nombre: 'Apartamento acogedor en la montaña',
    src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
    descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
    ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
    habitaciones: 2,
    banos: 1,
    costo: 1200,
    smoke: true,
    pets: true
    },
    {
    nombre: 'Apartamento acogedor en la montaña',
    src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
    descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
    ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
    habitaciones: 2,
    banos: 1,
    costo: 1200,
    smoke: true,
    pets: true
    },
    {
    nombre: 'Apartamento acogedor en la montaña',
    src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
    descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
    ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
    habitaciones: 2,
    banos: 1,
    costo: 1200,
    smoke: true,
    pets: true
    },
    {
    nombre: 'Apartamento acogedor en la montaña',
    src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
    descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
    ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
    habitaciones: 2,
    banos: 1,
    costo: 1200,
    smoke: true,
    pets: true
    }                 
    ]
    const indexhtml = document.querySelector("#indexventas")
    let htmlventa = ""
    function rendermain(){
   
        for (let i = 0; i < 3 && i < propiedades_ventas.length; i++) {
            let propiedadventa = propiedades_ventas[i];    
      htmlventa +=`<div class="col-md-4 mb-4">
      <div class="card">
        <img
          src="${propiedadventa.src}"
          class="card-img-top"
          alt="Imagen del departamento"
        />
        <div class="card-body">
          <h5 class="card-title">
            ${propiedadventa.nombre}
          </h5>
          <p class="card-text">
            ${propiedadventa.descripcion}
          </p>
          <p>
            <i class="fas fa-map-marker-alt"></i> 
            ${propiedadventa.ubicacion}
          </p>
          <p>
            <i class="fas fa-bed"></i> ${propiedadventa.habitaciones} Habitaciones |
            <i class="fas fa-bath"></i> ${propiedadventa.banos} Baños
          </p>
          <p><i class="fas fa-dollar-sign"></i> ${propiedadventa.costo}</p>
          <p class="${propiedadventa.smoke ? "text-success" : "text-danger"}">
            <i class="${propiedadventa.smoke ? "fas fa-smoking" : "fas fa-smoking-ban"}"></i> ${propiedadventa.smoke ? "permitido fumar" : "no se permite fumar"}
          </p>
          <p class="${propiedadventa.pets ? "text-success" : "text-danger"}">
            <i class="${propiedadventa.pets ? "fas fa-paw" : "fas fa-ban"}"></i> ${propiedadventa.pets ? "mascotas permitidas" : "no se permiten mascotas"}
          </p>
        </div>
      </div>
    </div>`
    }
    indexhtml.innerHTML = htmlventa
    const indexhtml2 = document.querySelector("#indexalquiler")
    let htmlalquiler = ""
    for (let i = 0; i < 3 && i < propiedades_alquiler.length; i++) {
        let propiedadalquiler = propiedades_alquiler[i];
      htmlalquiler +=`<div class="col-md-4 mb-4">
      <div class="card">
        <img
          src="${propiedadalquiler.src}"
          class="card-img-top"
          alt="Imagen del departamento"
        />
        <div class="card-body">
          <h5 class="card-title">
            ${propiedadalquiler.nombre}
          </h5>
          <p class="card-text">
            ${propiedadalquiler.descripcion}
          </p>
          <p>
            <i class="fas fa-map-marker-alt"></i> 
            ${propiedadalquiler.ubicacion}
          </p>
          <p>
            <i class="fas fa-bed"></i> ${propiedadalquiler.habitaciones} Habitaciones |
            <i class="fas fa-bath"></i> ${propiedadalquiler.banos} Baños
          </p>
          <p><i class="fas fa-dollar-sign"></i> ${propiedadalquiler.costo}</p>
          <p class="${propiedadalquiler.smoke ? "text-success" : "text-danger"}">
            <i class="${propiedadalquiler.smoke ? "fas fa-smoking" : "fas fa-smoking-ban"}"></i> ${propiedadalquiler.smoke ? "permitido fumar" : "no se permite fumar"}
          </p>
          <p class="${propiedadalquiler.pets ? "text-success" : "text-danger"}">
            <i class="${propiedadalquiler.pets ? "fas fa-paw" : "fas fa-ban"}"></i> ${propiedadalquiler.pets ? "mascotas permitidas" : "no se permiten mascotas"}
          </p>
        </div>
      </div>
    </div>`
    }
    indexhtml2.innerHTML = htmlalquiler
}


//ALQUILER// 

const propiedades_alquiler = [
    {
    nombre: 'Propiedades en alquiler',
    src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
    descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo',
    ubicacion: '123 Main Street, Anytown, CA 91234',
    habitaciones: 2,
    banos: 2,
    costo: 2000,
    smoke: false,
    pets: true
    },
    {
    nombre: 'Apartamento luminoso con vista al mar',
    src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
    ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
    habitaciones: 3,
    banos: 3,
    costo: 2500,
    smoke: true,
    pets: true
    },
    {
    nombre: 'Condominio moderno en zona residencial',
    src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
    descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
    ubicacion: '123 Main Street, Anytown, CA 91234',
    habitaciones: 2,
    banos: 2,
    costo: 2200,
    smoke: false,
    pets: false
    },   
    {
    nombre: 'Condominio moderno en zona residencial',
    src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
    descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
    ubicacion: '123 Main Street, Anytown, CA 91234',
    habitaciones: 2,
    banos: 2,
    costo: 2200,
    smoke: false,
    pets: false
    },  
    {
    nombre: 'Condominio moderno en zona residencial',
    src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
    descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
    ubicacion: '123 Main Street, Anytown, CA 91234',
    habitaciones: 2,
    banos: 2,
    costo: 2200,
    smoke: false,
    pets: false
    },
    {
    nombre: 'Condominio moderno en zona residencial',
    src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
    descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
    ubicacion: '123 Main Street, Anytown, CA 91234',
    habitaciones: 2,
    banos: 2,
    costo: 2200,
    smoke: false,
    pets: false
    },  
    {
    nombre: 'Condominio moderno en zona residencial',
    src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
    descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
    ubicacion: '123 Main Street, Anytown, CA 91234',
    habitaciones: 2,
    banos: 2,
    costo: 2200,
    smoke: false,
    pets: false
    }          
]

function renderventa(){  
    let htmlventa3 =""
    for (let recorrido1 of propiedades_ventas){
  htmlventa3 +=`<div class="col-md-4 mb-4">
  <div class="card">
    <img
      src="${recorrido1.src}"
      class="card-img-top"
      alt="Imagen del departamento"
    />
    <div class="card-body">
      <h5 class="card-title">
        ${recorrido1.nombre}
      </h5>
      <p class="card-text">
        ${recorrido1.descripcion}
      </p>
      <p>
        <i class="fas fa-map-marker-alt"></i> 
        ${recorrido1.ubicacion}
      </p>
      <p>
        <i class="fas fa-bed"></i> ${recorrido1.habitaciones} Habitaciones |
        <i class="fas fa-bath"></i> ${recorrido1.banos} Baños
      </p>
      <p><i class="fas fa-dollar-sign"></i> ${recorrido1.costo}</p>
      <p class="${recorrido1.smoke ? "text-success" : "text-danger"}">
        <i class="${recorrido1.smoke ? "fas fa-smoking" : "fas fa-smoking-ban"}"></i> ${recorrido1.smoke ? "permitido fumar" : "no se permite fumar"}
      </p>
      <p class="${recorrido1.pets ? "text-success" : "text-danger"}">
        <i class="${recorrido1.pets ? "fas fa-paw" : "fas fa-ban"}"></i> ${recorrido1.pets ? "mascotas permitidas" : "no se permiten mascotas"}
      </p>
    </div>
  </div>
</div>`
}
llamadoventas.innerHTML = htmlventa3
}

function renderalquiler(){
    let htmlalquiler = ""
    for (let recorrido2 of propiedades_alquiler){
      htmlalquiler +=`<div class="col-md-4 mb-4">
      <div class="card">
        <img
          src="${recorrido2.src}"
          class="card-img-top"
          alt="Imagen del departamento"
        />
        <div class="card-body">
          <h5 class="card-title">
            ${recorrido2.nombre}
          </h5>
          <p class="card-text">
            ${recorrido2.descripcion}
          </p>
          <p>
            <i class="fas fa-map-marker-alt"></i> 
            ${recorrido2.ubicacion}
          </p>
          <p>
            <i class="fas fa-bed"></i> ${recorrido2.habitaciones} Habitaciones |
            <i class="fas fa-bath"></i> ${recorrido2.banos} Baños
          </p>
          <p><i class="fas fa-dollar-sign"></i> ${recorrido2.costo}</p>
          <p class="${recorrido2.smoke ? "text-success" : "text-danger"}">
            <i class="${recorrido2.smoke ? "fas fa-smoking" : "fas fa-smoking-ban"}"></i> ${recorrido2.smoke ? "permitido fumar" : "no se permite fumar"}
          </p>
          <p class="${recorrido2.pets ? "text-success" : "text-danger"}">
            <i class="${recorrido2.pets ? "fas fa-paw" : "fas fa-ban"}"></i> ${recorrido2.pets ? "mascotas permitidas" : "no se permiten mascotas"}
          </p>
        </div>
      </div>
    </div>`
    }
    llamadoalquiler.innerHTML = htmlalquiler
}

if (document.title === "Inmobiliaria"){
    window.addEventListener("load", rendermain)
}
else if(document.title === "InmobiliariaVenta"){
    window.addEventListener("load", renderventa)
}
else if(document.title === "InmobiliariaAlquiler"){
    window.addEventListener("load", renderalquiler)
}