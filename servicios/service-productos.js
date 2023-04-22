// CRUD   - Métodos HTTP
// Create - POST
// Read   - GET
// Update - PUT/PATCH
// Delete - DELETE

//Read
const api = async () => {
  try {
    const res = await fetch(
      "https://64431bb1466f7c2b4b4e362b.mockapi.io/api/v1/productos"
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

//create
const crearProducto = async (nombre, imageURL, price, describe, category) => {
  try {
    const res = await fetch(
      "https://64431bb1466f7c2b4b4e362b.mockapi.io/api/v1/productos",
      {
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
      }
    );
    return res;
  } catch (error) {
    console.log(error);
  }
};

// elimina producto
const eliminarProducto = async (id) => {
  try {
    const res = await fetch(
      `https://64431bb1466f7c2b4b4e362b.mockapi.io/api/v1/productos/${id}`,
      {
        method: "DELETE",
      }
    );
    return res;
  } catch (error) {
    console.log(error);
  }
};

// detalles producto
const detalleProducto = async (id) => {
  const res = await fetch(
    `https://64431bb1466f7c2b4b4e362b.mockapi.io/api/v1/productos/${id}`
  );
  const data = await res.json();
  return data;
};

//actualizar Productos
const actualizar = async (name, imageURL, price, id, describe, category) => {
  try {
    const res = await fetch(
      `https://64431bb1466f7c2b4b4e362b.mockapi.io/api/v1/productos/${id}`,
      {
        method: "PUT",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify({ name, imageURL, price, id, describe, category }),
      }
    );
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const productos = {
  api,
  crearProducto,
  eliminarProducto,
  detalleProducto,
  actualizar,
};
