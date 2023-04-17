//Read
const user = async () => {
  try {
    const res = await fetch("http://localhost:3000/usuarios");
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const users = {
  user,
};
