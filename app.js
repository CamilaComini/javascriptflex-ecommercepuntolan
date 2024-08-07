// Array de productos
const productos = [
    { id: 1, nombre: 'Laptop', precio: 1000 },
    { id: 2, nombre: 'Smartphone', precio: 600 },
    { id: 3, nombre: 'Tablet', precio: 400 }
];

// Función para mostrar productos
function mostrarProductos() {
    const listaProductos = document.getElementById('lista-productos');
    productos.forEach(producto => {
        const item = document.createElement('li');
        item.textContent = `${producto.nombre} - $${producto.precio}`;
        item.addEventListener('click', () => agregarAlCarrito(producto));
        listaProductos.appendChild(item);
    });
}

// Carrito de compras
const carrito = [];

// Función para agregar productos al carrito
function agregarAlCarrito(producto) {
    carrito.push(producto);
    mostrarCarrito();
}

// Función para mostrar el carrito
function mostrarCarrito() {
    const listaCarrito = document.getElementById('lista-carrito');
    listaCarrito.innerHTML = '';
    carrito.forEach(producto => {
        const item = document.createElement('li');
        item.textContent = `${producto.nombre} - $${producto.precio}`;
        listaCarrito.appendChild(item);
    });
}

// Función para calcular el total con descuento e impuestos
function calcularTotal() {
    let total = 0;
    carrito.forEach(producto => total += producto.precio);

    // Aplicar un descuento del 10% si el total es mayor a $1000
    if (total > 1000) {
        total *= 0.9;
    }

    // Aplicar impuestos del 15%
    total *= 1.15;

    return total.toFixed(2);
}

// Evento de compra
document.getElementById('comprar').addEventListener('click', () => {
    const total = calcularTotal();
    alert(`El total de su compra es: $${total}`);
});

// Mostrar productos al cargar la página
mostrarProductos();
