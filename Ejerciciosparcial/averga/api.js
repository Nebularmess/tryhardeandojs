const BASE_URL = "https://jsonplaceholder.typicode.com";

async function fetchData(endpoint) {
  try {
    const res = await fetch(`${BASE_URL}/${endpoint}`);
    if (!res.ok) throw new Error(`Error en la red: ${res.status}`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Error fetching data:", err.message);
    return [];
  }
}

function validateUser(user) {
  return user.id && user.name && user.username && user.email && user.address?.city;
}

function validatePost(post) {
  return post.userId && post.id && post.title && post.body;
}

export { fetchData, validateUser, validatePost };