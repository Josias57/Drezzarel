// --- PRODUCTOS ---
const productos = [
  {
    img: "img/1.jpg",
    titulo: "Estilo Urbano Clásico",
    desc: "Look moderno y casual ideal para el día a día con toque elegante.",
    precio: 49.99,
    categoria: "urbano"
  },
  {
    img: "img/adele-shafiee-iFCccPqshcc-unsplash.jpg",
    titulo: "Minimal Power",
    desc: "Minimalismo con fuerza, ideal para destacar sin exagerar.",
    precio: 44.00,
    categoria: "minimal"
  },
  // ...agrega los demás productos igual...
];

// --- RENDERIZAR PRODUCTOS ---
function renderProductos(lista) {
  const contenedor = document.querySelector('.productos');
  contenedor.innerHTML = '';
  lista.forEach((p, i) => {
    const div = document.createElement('div');
    div.className = 'producto';
    div.setAttribute('data-categoria', p.categoria);
    div.setAttribute('data-precio', p.precio);
    div.innerHTML = `
      <img src="${p.img}" alt="${p.titulo}" loading="lazy">
      <h3>${p.titulo}</h3>
      <p class="precio">$${p.precio.toFixed(2)}</p>
      <button class="btn-ver-mas" data-index="${i}">Ver más</button>
      <button class="btn-agregar-carrito" data-index="${i}">Agregar al carrito</button>
    `;
    contenedor.appendChild(div);
  });
}
renderProductos(productos);

// --- MODAL PRODUCTO ---
const modal = document.getElementById("modal-producto");
const modalImg = document.getElementById("modal-img");
const modalTitulo = document.getElementById("modal-titulo");
const modalDesc = document.getElementById("modal-desc");
const modalPrecio = document.getElementById("modal-precio");
const cerrarModalProducto = document.getElementById("cerrar-modal-producto");

document.addEventListener('click', e => {
  if (e.target.classList.contains('btn-ver-mas')) {
    const p = productos[e.target.dataset.index];
    modalImg.src = p.img;
    modalTitulo.textContent = p.titulo;
    modalDesc.textContent = p.desc;
    modalPrecio.textContent = `$${p.precio.toFixed(2)}`;
    modal.classList.remove('hidden');
  }
  if (e.target === cerrarModalProducto || e.target.classList.contains('modal-producto')) {
    modal.classList.add('hidden');
  }
});

// --- BUSCADOR Y FILTROS ---
document.getElementById('buscador-productos').addEventListener('input', function() {
  filtrarProductos();
});
document.getElementById('filtro-categoria').addEventListener('change', function() {
  filtrarProductos();
});
document.getElementById('filtro-precio').addEventListener('change', function() {
  filtrarProductos();
});
function filtrarProductos() {
  const texto = document.getElementById('buscador-productos').value.toLowerCase();
  const cat = document.getElementById('filtro-categoria').value;
  const precio = document.getElementById('filtro-precio').value;
  let filtrados = productos.filter(p => 
    p.titulo.toLowerCase().includes(texto) &&
    (cat === "" || p.categoria === cat) &&
    (precio === "" ||
      (precio === "menor50" && p.precio < 50) ||
      (precio === "mayor50" && p.precio >= 50))
  );
  renderProductos(filtrados);
}

// --- CARRITO ---
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
function actualizarCarrito() {
  document.getElementById('cart-count').textContent = carrito.length;
  // Renderiza el modal del carrito aquí...
  // (puedes expandir esta función para mostrar productos, total, etc)
  localStorage.setItem('carrito', JSON.stringify(carrito));
}
document.addEventListener('click', e => {
  if (e.target.classList.contains('btn-agregar-carrito')) {
    carrito.push(productos[e.target.dataset.index]);
    actualizarCarrito();
    alert('Producto agregado al carrito');
  }
  if (e.target.id === 'btn-carrito') {
    document.getElementById('modal-carrito').classList.remove('hidden');
    // Renderiza los productos del carrito aquí...
  }
  if (e.target.id === 'cerrar-modal-carrito') {
    document.getElementById('modal-carrito').classList.add('hidden');
  }
});
actualizarCarrito();

// --- MODAL REGISTRO ---
const modalRegistro = document.getElementById('modal-registro');
document.getElementById('btn-registro').addEventListener('click', e => {
  e.preventDefault();
  modalRegistro.classList.remove('hidden');
});
document.getElementById('cerrar-modal-registro').addEventListener('click', () => {
  modalRegistro.classList.add('hidden');
});

// --- ACCESIBILIDAD: cerrar modales con ESC ---
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal, .modal-producto, .modal-carrito').forEach(m => m.classList.add('hidden'));
  }
});

// --- CONTACTO (ya tienes el fetch en tu HTML, puedes dejarlo igual) ---

// --- DARK MODE (opcional) ---
/*
const darkBtn = document.getElementById('dark-mode-toggle');
darkBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});
*/
