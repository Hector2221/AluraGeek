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
    tittle.textContent = perfil.nombre;
    price.textContent = perfil.price;
    describe.textContent = perfil.describe;

    const data = await productos.api();
    const cards = document.querySelector("[data-productos]");
    const randomSubset = data.sort(() => 0.5 - Math.random()).slice(0, 6);
    randomSubset.forEach((data) => {
      const content = `<div class="card">
  <img class="card__img" src=".${data.imageURL}" alt="" />
  <p class="card__title">${data.nombre}</p>
  <p class="card__price">${data.price}</p>
  <a href="producto.html?id=${data.id}" class="card__ver">Ver producto</a>
</div>`;
      cards.innerHTML += content;
    });
  } catch (error) {
    console.log(error);
  }
};

obtenerInformacion();
