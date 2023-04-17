import { productos } from "../servicios/service-productos.js";

const formulario = document.querySelector("[data-edit]");

const obtenerInformacion = async () => {
  const url = new URL(window.location);
  const id = url.searchParams.get("id");

  if (id === null) {
    alert("error");
  }

  const urlimage = document.querySelector("[data-url]");
  const categoría = document.querySelector("[data-categoria]");
  const producto = document.querySelector("[data-producto]");
  const precio = document.querySelector("[data-precio]");
  const descripcion = document.querySelector("[data-descripcion]");

  try {
    const perfil = await productos.detalleProducto(id);
    urlimage.value = perfil.imageURL;
    categoría.value = perfil.category;
    producto.value = perfil.name;
    precio.value = perfil.price;
    descripcion.value = perfil.describe;
  } catch (error) {}
};

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  const url = new URL(window.location);
  const id = url.searchParams.get("id");

  const urlimage = document.querySelector("[data-url]").value;
  const categoría = document.querySelector("[data-categoria]").value;
  const producto = document.querySelector("[data-producto]").value;
  const precio = document.querySelector("[data-precio]").value;
  const descripcion = document.querySelector("[data-descripcion]").value;

  productos
    .actualizar(producto, urlimage, precio, id, descripcion, categoría)
    .then(() => {
      window.location.href = "./productos.html";
    })
    .catch(() => {
      alert("No se pudo actualizar");
    });
});

obtenerInformacion();
