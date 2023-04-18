import { productos } from "../servicios/service-productos.js";

// categoria starwars
try {
  const data = await productos.api();
  const cards = document.querySelector("[date-starwars]");
  const categoria = "star wars";

  const productosFiltrados = data.filter(
    (producto) => producto.category === categoria
  );

  productosFiltrados.forEach((producto) => {
    const content = `<div class="card">
        <img class="card__img" src=${producto.imageURL} alt="" />
        <p class="card__title">${producto.name}</p>
        <p class="card__price">${producto.price}</p>
        <a href="./pages/producto.html?id=${producto.id}" class="card__ver">Ver producto</a>
      </div>`;
    cards.innerHTML += content;
  });
} catch (error) {
  console.log(error);
}

// categoria consolas
try {
  const data = await productos.api();
  const cards = document.querySelector("[date-consolas]");
  const categoria = "consolas";

  const productosFiltrados = data.filter(
    (producto) => producto.category === categoria
  );

  productosFiltrados.forEach((producto) => {
    const content = `<div class="card">
              <img class="card__img" src=${producto.imageURL} alt="" />
              <p class="card__title">${producto.name}</p>
              <p class="card__price">${producto.price}</p>
              <a href="./pages/producto.html?id=${producto.id}" class="card__ver">Ver producto</a>
            </div>`;
    cards.innerHTML += content;
  });
} catch (error) {
  console.log(error);
}

// diversos consolas
try {
  const data = await productos.api();
  const cards = document.querySelector("[date-diversos]");
  const categoria = "diversos";

  const productosFiltrados = data.filter(
    (producto) => producto.category === categoria
  );

  productosFiltrados.forEach((producto) => {
    const content = `<div class="card">
                <img class="card__img" src=${producto.imageURL} alt="" />
                <p class="card__title">${producto.name}</p>
                <p class="card__price">${producto.price}</p>
                <a href="./pages/producto.html?id=${producto.id}" class="card__ver">Ver producto</a>
              </div>`;
    cards.innerHTML += content;
  });
} catch (error) {
  console.log(error);
}
