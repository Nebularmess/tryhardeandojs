// URLs de la API pública
const USERS_URL = "https://jsonplaceholder.typicode.com/users";
const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";

// Traer usuarios desde la API
async function getUsers() {
  console.log("Conectando a la API de usuarios...");
  const response = await fetch(USERS_URL);   // aquí se hace la conexión HTTP
  const data = await response.json();        // convertimos la respuesta en JSON
  return data;                               // devolvemos el array de usuarios
}

// Traer publicaciones desde la API
async function getPosts() {
  console.log("Conectando a la API de publicaciones...");
  const response = await fetch(POSTS_URL);
  const data = await response.json();
  return data;
}

// Programa principal
async function run() {
  try {
    // Paso 1: Cargar datos
    const users = await getUsers();
    const posts = await getPosts();

    console.log("Usuarios cargados:", users.length);
    console.log("Posts cargados:", posts.length);

    // Paso 2: Ejemplo de análisis
    // Ciudad con más usuarios
    const cities = {};
    for (let user of users) {
      if (!cities[user.address.city]) {
        cities[user.address.city] = 0;
      }
      cities[user.address.city]++;
    }
    console.log("Usuarios por ciudad:", cities);

    // Top 5 publicadores
    const postsPerUser = {};
    for (let post of posts) {
      if (!postsPerUser[post.userId]) {
        postsPerUser[post.userId] = 0;
      }
      postsPerUser[post.userId]++;
    }
    console.log("Posts por usuario:", postsPerUser);

  } catch (error) {
    console.log("Ocurrió un error:", error.message);
  }
}

// Ejecutar
run();
