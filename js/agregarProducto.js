const producto = [{
    id: 1,
    nombre: "Tapiz Mohana",
    precio: 12000,
    img: "../imgs/productos/tapices/tapiz.jpeg",
    tipo: "tapiz"
},
{
  id: 2,
  nombre: "Tapiz Pilucha",
  precio: 12000,
  img: "../imgs/productos/tapices/tapiz2.jpeg",
  tipo: "tapiz"
},
{
  id: 3,
  nombre: "Colgante Kuan",
  precio: 12000,
  img: "../imgs/productos/colgantes/colgante1.jpeg",
  tipo: "colgante"
},
{
  id: 4,
  nombre: "Tapiz Marilau",
  precio: 12000,
  img: "../imgs/productos/tapices/tapiz3.jpeg",
  tipo: "tapiz"
},]

const tapices = document.getElementById("productos__card-tapices")
const colgantes = document.getElementById("productos__card-colgantes")


function agregarProducto (producto){

  const carta = document.createElement("div")
  carta.className = "card"

  const imgProducto = document.createElement("img")
  imgProducto.src = producto.img

  const titulo = document.createElement("h6")
  titulo.innerText = producto.nombre
  
  const precio = document.createElement("p")
  precio.innerText = `$${producto.precio}`

  const botonAgregar = document.createElement("button")
  botonAgregar.innerText = "Agregar al carrito"

  if (producto.tipo === "tapiz") {
    carta.appendChild(imgProducto)
    carta.appendChild(titulo)
    carta.appendChild(precio)
    carta.appendChild(botonAgregar)
    tapices.appendChild(carta)
  }else if (producto.tipo === "colgante"){    //IF ELSE precario, cuando tenga defenido los tipos de productos uso switch je
    carta.appendChild(imgProducto)
    carta.appendChild(titulo)
    carta.appendChild(precio)
    carta.appendChild(botonAgregar)
    colgantes.appendChild(carta)
  }  
}

producto.forEach(el =>{
    agregarProducto(el)
})



