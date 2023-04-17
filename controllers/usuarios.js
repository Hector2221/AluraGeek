import { users } from "../servicios/service-users.js";

try {
  const usuarios = await users.user();
  const correos = usuarios.map((usuario) => usuario.correo);
  const contrasña = usuarios.map((usuario) => usuario.password);
  console.log(correos);
  const form = document.querySelector("[form-user]");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.querySelector("#email").value;
    const pass = document.querySelector("#password").value;
    console.log(email + " " + pass);
    if (email == correos && pass == contrasña) {
      window.location.href = "./productos.html";
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  });
} catch (error) {
  console.log(error);
}
