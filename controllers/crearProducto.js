import { productos } from "../servicios/service-productos.js";
try {
  const form = document.querySelector("[data-agregar]");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const url = document.querySelector("[data-url]").value;
    const categoria = document.querySelector("[data-categoria]").value;
    const producto = document.querySelector("[data-producto]").value;
    const precio = document.querySelector("[data-precio]").value;
    const descripcion = document.querySelector("[data-descripcion]").value;

    console.log(producto);
    productos
      .crearProducto(producto, url, precio, descripcion, categoria)
      .then(() => {
        alert("agregado");
      })
      .catch((error) => {
        console.log(error);
      });
  });
} catch (error) {
  console.log(error);
}
