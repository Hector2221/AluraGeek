import { productos } from "../servicios/service-productos.js";

// imprime todos
try {
  const data = await productos.api();
  const cards = document.querySelector("[data-productos]");

  data.forEach((producto) => {
    const content = `<div class="card">
    <img class="card__img" src=".${producto.imageURL}" alt="" />
    <p class="card__title">${producto.nombre}</p>
    <p class="card__price">${producto.price}</p>
    <a href="producto.html?id=${producto.id}" class="card__ver">Ver producto</a>
    <div class="card__content">
      <button class="card__btn delete" id="${producto.id}">
        <img src="../assets/img/delete.svg" alt="" />
      </button>
      <a href="./editar.html?id=${producto.id}">
        <img src="../assets/img/edit.svg" alt="" class="edit" />
      </a>
    </div>
  </div>`;
    cards.innerHTML += content;
  });

  const deleteButtons = cards.querySelectorAll(".delete");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const id = event.target.closest(".card").querySelector(".delete").id;
      productos
        .eliminarProducto(id)
        .then(() => {
          alert("Producto Eliminado");
        })
        .catch(() => {
          alert("No se pudo eliminar");
        });
    });
  });
} catch (error) {
  console.log(error);
}
