let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");
const cantidadCarrito = document.getElementById("cantidadCarrito");

//API
let dolarVenta;
obtenerDolar();

function mostrarProductos(container, productos) {
    productos.forEach((product) => {
        let content = document.createElement("div");
        content.className = "card";
        content.innerHTML = `
        <img src="${product.foto}">
        <p>${product.nombre}</p>
        <p class="precio">$ ${product.precio}</p>
        `;


        let comprar = document.createElement("button")
        comprar.innerText = "comprar";
        comprar.className = "comprar";

        content.append(comprar);

        //eventos
        comprar.addEventListener("click", () => {

            const repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id);

            if (repeat) {
                carrito.map((prod) => {
                    if (prod.id === product.id) {
                        prod.cantidad++;
                    }
                });
            } else {
                carrito.push({
                    id: product.id,
                    foto: product.foto,
                    nombre: product.nombre,
                    precio: product.precio,
                    cantidad: product.cantidad,
                });
            }
            // uso de toastify
            Toastify({
                text: `Agregaste ${product.nombre} al carrito `,
                duration: 3000,
                destination: "https://github.com/apvarun/toastify-js",
                newWindow: true,
                close: true,
                gravity: "bottom", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                    background: "linear-gradient(to right, #0074ae, #00aaff)",
                    color: "#000000",
                },
                onClick: function () { } // Callback after click
            }).showToast();


            console.log(carrito);
            carritoCounter();
            saveLocal();
        });
        container.appendChild(content);
    });
};


function filtrarMostrarmuscu() {
    const contenedorMusculosas = document.getElementById("musculosas");
    const productosFiltrado = productos.filter(p => p.categoria === 'musculosas');

    mostrarProductos(contenedorMusculosas, productosFiltrado)
}

function filtrarMostrarRemeras() {
    const contenedorRemeras = document.getElementById("remeras");
    const productosFiltrado = productos.filter(p => p.categoria === 'remeras');

    mostrarProductos(contenedorRemeras, productosFiltrado)
}
function filtrarMostrarSuplementosStar() {
    const contenedorSuplementosStar = document.getElementById("suplementosstar");
    const productosFiltrado = productos.filter(p => p.categoria === 'suplementosstar');

    mostrarProductos(contenedorSuplementosStar, productosFiltrado)
}

filtrarMostrarmuscu();
filtrarMostrarRemeras();
filtrarMostrarSuplementosStar();

//set item
const saveLocal = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
};

//get item
JSON.parse(localStorage.getItem("carrito")); 

//API
function obtenerDolar(){
    const URLDOLAR='https://api.bluelytics.com.ar/v2/latest';
    fetch(URLDOLAR)
        .then((respuesta) => respuesta.json())
        .then((datos) => {
            const dolarBlue = datos.blue;
            document.getElementById('Dollar').innerHTML += `
                <p id="dollardom" class="dollar-dom">Dolar compra: $ ${dolarBlue.value_buy} - Dolar venta: $ ${dolarBlue.value_sell}<i class="bi bi-arrow-up"></i> </p> 
            `;
            dolarVenta = dolarBlue.value_sell;
            Toastify({
                text: `El dolar sigue subiendo, pero nuestros precios se mantienen!`,
                duration: 2000,
                destination: "https://github.com/apvarun/toastify-js",
                gravity: "bottom", // `top` or `bottom`
                position: "left", // `left`, `center` or `right`

                style: {
                    background: "linear-gradient(to right, #008000, #447544)",
                    color: "#ffff",
                },
                onClick: function () { } // Callback after click
            }).showToast();
        })
}