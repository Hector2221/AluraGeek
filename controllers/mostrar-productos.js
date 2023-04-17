import { productos } from "../servicios/service-productos.js";

// imprime todos
try {
  const data = await productos.api();
  const cards = document.querySelector("[data-productos]");

  data.forEach((producto) => {
    const content = `<div class="card">
    <img class="card__img" src=".${producto.imageURL}" alt="" />
    <p class="card__title">${producto.name}</p>
    <p class="card__price">${producto.price}</p>
    <a href="" class="card__ver">Ver producto</a>
    <div class="card__content">
      <button class="card__btn delete" id="${producto.id}">
        <img src="../assets/img/delete.svg" alt="" />
      </button>
      <button class="card__btn edit">
        <img src="../assets/img/edit.svg" alt="" class="edit" />
      </button>
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
        .then((res) => {
          alert("Producto Eliminado");
        })
        .catch((err) => {
          alert("No se pudo eliminar");
        });
    });
  });
} catch (error) {
  console.log(error);
}

// // // categoria starwars
// try {
//   const data = await productos.api();
//   const cards = document.querySelector("[date-starwars]");
//   const categoria = "star wars";

//   const productosFiltrados = data.filter(
//     (producto) => producto.category === categoria
//   );

//   productosFiltrados.forEach((producto) => {
//     const content = `<div class="card">
//         <img class="card__img" src=${producto.imageURL} alt="" />
//         <p class="card__title">${producto.name}</p>
//         <p class="card__price">${producto.price}</p>
//         <a href="" class="card__ver">Ver producto</a>
//       </div>`;
//     cards.innerHTML += content;
//   });
// } catch (error) {
//   console.log(error);
// }

// // categoria consolas
// try {
//   const data = await productos.api();
//   const cards = document.querySelector("[date-consolas]");
//   const categoria = "consolas";

//   const productosFiltrados = data.filter(
//     (producto) => producto.category === categoria
//   );

//   productosFiltrados.forEach((producto) => {
//     const content = `<div class="card">
//               <img class="card__img" src=${producto.imageURL} alt="" />
//               <p class="card__title">${producto.name}</p>
//               <p class="card__price">${producto.price}</p>
//               <a href="" class="card__ver">Ver producto</a>
//             </div>`;
//     cards.innerHTML += content;
//   });
// } catch (error) {
//   console.log(error);
// }

// // diversos consolas
// try {
//   const data = await productos.api();
//   const cards = document.querySelector("[date-diversos]");
//   const categoria = "diversos";

//   const productosFiltrados = data.filter(
//     (producto) => producto.category === categoria
//   );

//   productosFiltrados.forEach((producto) => {
//     const content = `<div class="card">
//                 <img class="card__img" src=${producto.imageURL} alt="" />
//                 <p class="card__title">${producto.name}</p>
//                 <p class="card__price">${producto.price}</p>
//                 <a href="" class="card__ver">Ver producto</a>
//               </div>`;
//     cards.innerHTML += content;
//   });
// } catch (error) {
//   console.log(error);
// }
