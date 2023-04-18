import { productos } from "../servicios/service-productos.js";

const obtenerInformacion = async () => {
  const url = new URL(window.location);
  const id = url.searchParams.get("id");

  if (id === null) {
    alert("error");
  }

  const img = document.querySelector("[data-img]");
  const tittle = document.querySelector("[data-tittle]");
  const price = document.querySelector("[data-price]");
  const describe = document.querySelector("[data-describe]");

  try {
    const perfil = await productos.detalleProducto(id);
    img.src = "." + perfil.imageURL;
    tittle.textContent = perfil.name;
    price.textContent = perfil.price;
    describe.textContent = perfil.describe;

    const data = await productos.api();
    const cards = document.querySelector("[data-productos]");
    const randomSubset = data.sort(() => 0.5 - Math.random()).slice(0, 6);
    randomSubset.forEach((producto) => {
      const content = `<div class="card">
  <img class="card__img" src=".${producto.imageURL}" alt="" />
  <p class="card__title">${producto.name}</p>
  <p class="card__price">${producto.price}</p>
  <a href="producto.html?id=${producto.id}" class="card__ver">Ver producto</a>
</div>`;
      cards.innerHTML += content;
    });
  } catch (error) {
    console.log(error);
  }
};

obtenerInformacion();
