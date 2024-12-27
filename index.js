const array = [1, 2, 3, 4, 5];
const collproductos = [
   {
    nombre: "Campera",
    precio: 15000,
    imagen: "img/Indumentaria.jpeg"
    },
    {
     nombre: "Bicicleta 29" ,
     precio: 10000, 
     imagen: "img/bicicleta_grande.jpeg" 
    },
    {
     nombre: "Casco",
     precio: 18000,
     imagen: "img/Cascos.jpeg"
     },
     {
        nombre: "Bicicleta infantil" ,
        precio: 10000, 
        imagen: "img/bici_infantil.jpeg" 
       },
    {
     nombre: "Cadena" ,
     precio: 8000, 
     imagen: "img/Repuestos.jpeg" 
    },
    {
     nombre: "Luz delantera" ,
     precio: 9000, 
     imagen: "img/Accesorios.jpeg" 
    }
]


let productosHTML = "";
let ejemplo = 'hola';

console.log(productosHTML);
for (let i  = 0; i < collproductos.length; i++){
    productosHTML += `
           
    <div class="item">
                    <img src=${collproductos[i].imagen} alt="producto">
                    <div class="info-product">
                    <h2>${collproductos[i].nombre}</h2>
                    <p class="price">$${collproductos[i].precio}</p>
                    <input class="btn-add-cart" type="button" value="Agregar al carrito">
                    </div>
            </div>
    `;
}

console.log(collproductos.length);
console.log(productosHTML);
console.log(ejemplo);

const containerItems = document.getElementById("container-items");

containerItems.innerHTML = productosHTML;


/// listener de botones

const botonesAgregar = document.querySelectorAll(".btn-add-cart");
console.log(botonesAgregar);

const listaCarrito = document.querySelector("#carrito ul");
console.log(listaCarrito);

const totalCarrito = document.querySelector("#carrito p");
console.log(totalCarrito);

let totalAPagar = 0;


for (let i = 0; i < botonesAgregar.length; i++) {
    function agregarElemeCarrito(){
        console.log("clicked" + i);
        const elementoLi = document.createElement("li");
        elementoLi.innerText += `${collproductos[i].nombre} $${collproductos[i].precio}` ;
        console.log(elementoLi);
        listaCarrito.appendChild(elementoLi);
        totalAPagar += collproductos[i].precio;
        totalCarrito.innerText = "Total = $" + totalAPagar;
        mensajeCarrito.innerText = "";
    }
     botonesAgregar[i].addEventListener("click", agregarElemeCarrito);
 }

 // agrego listener boton borrar

 const bntBorrar = document.querySelector("#btnBorrar");

 const mensajeCarrito = document.querySelector("#mensajeCarrito");
 function borrarCarrito(){
    listaCarrito.innerHTML = "";
    totalCarrito.innerText = "Total = $ 0" ;
 }

 bntBorrar.addEventListener("click", borrarCarrito);


 const btnPagar = document.querySelector("#btnPagar");

 function irAPagar(){
    if (listaCarrito.innerText === ""){
       mensajeCarrito.innerText = "No tiene productos seleccionados" 
    } else {
        window.location.href = "./pagos.html";
    }
 }

 btnPagar.addEventListener("click", irAPagar);



//let carrito = {}; // Objeto para almacenar los productos en el carrito


// // Iterar sobre los botones
// for (let i = 0; i < botonesAgregar.length; i++) {
//   botonesAgregar[i].addEventListener("click", () => {
//     const producto = collproductos[i];

//     // Si el producto ya está en el carrito, aumentar la cantidad
//     if (carrito[producto.nombre]) {
//       carrito[producto.nombre].cantidad++;
//     } else {
//       // Si no está en el carrito, agregarlo con cantidad inicial 1
//       carrito[producto.nombre] = {
//         precio: producto.precio,
//         cantidad: 1
//       };
//     }

//     // Recalcular el total y actualizar la lista del carrito
//     actualizarCarrito();
//   });
// }

// // Función para actualizar la lista del carrito y el total
// function actualizarCarrito() {
//   listaCarrito.innerHTML = ""; // Limpiar la lista del carrito
//   totalAPagar = 0;

//   // Recorrer el carrito y mostrar los productos con cantidades
//   for (const [nombre, { precio, cantidad }] of Object.entries(carrito)) {
//     const elementoLi = document.createElement("li");
//     elementoLi.innerText = `${nombre} x${cantidad} = $${precio * cantidad}`;
//     listaCarrito.appendChild(elementoLi);

//     // Sumar al total
//     totalAPagar += precio * cantidad;
//   }

//   // Actualizar el total en el DOM
//   totalCarrito.innerText = "Total = $" + totalAPagar;
// }
