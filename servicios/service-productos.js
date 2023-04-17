// CRUD   - Métodos HTTP
// Create - POST
// Read   - GET
// Update - PUT/PATCH
// Delete - DELETE

//Read
const api = async () => {
  try {
    const res = await fetch("http://localhost:3000/productos");
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

//create
const crearProducto = async (nombre, imageURL, price, describe, category) => {
  try {
    const res = await fetch("http://localhost:3000/productos", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        nombre,
        imageURL,
        price,
        describe,
        category,
      }),
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};

// elimina clientes
const eliminarProducto = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/productos/${id}`, {
      method: "DELETE",
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const productos = {
  api,
  crearProducto,
  eliminarProducto,
};
