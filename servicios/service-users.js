//Read
const user = async () => {
  try {
    const res = await fetch(
      "https://64431bb1466f7c2b4b4e362b.mockapi.io/api/v1/usuarios"
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const users = {
  user,
};
