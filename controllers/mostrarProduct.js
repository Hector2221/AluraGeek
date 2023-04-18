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
  } catch (error) {
    console.log(error);
  }
};

obtenerInformacion();
