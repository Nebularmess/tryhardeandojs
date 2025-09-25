/*
 social-analyzer.js
 Versión sin menú: ejecuta todos los requerimientos secuencialmente al correr el script.
*/

const USERS_URL = 'https://jsonplaceholder.typicode.com/users';
const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';


function fetchWithTimeout(url, options = {}, timeout = 10000) {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);
  options.signal = controller.signal;
  return fetch(url, options)
    .then(res => {
      clearTimeout(id);
      return res;
    })
    .catch(err => {
      clearTimeout(id);
      throw err;
    });
}

function isValidUser(u) {
  return u && typeof u.id === 'number' && typeof u.name === 'string' && typeof u.username === 'string' && typeof u.email === 'string' && u.address && typeof u.address.city === 'string';
}

function isValidPost(p) {
  return p && typeof p.id === 'number' && typeof p.userId === 'number' && typeof p.title === 'string' && typeof p.body === 'string';
}

function User(obj) {
  this.id = obj.id;
  this.name = obj.name;
  this.username = obj.username;
  this.email = obj.email;
  this.city = obj.address && obj.address.city ? obj.address.city : null;
}
User.prototype.summary = function () {
  return `User(${this.id}): ${this.name} (@${this.username}) — ${this.email} — ${this.city}`;
};

function Post(obj) {
  this.id = obj.id;
  this.userId = obj.userId;
  this.title = obj.title;
  this.body = obj.body;
}
Post.prototype.summary = function () {
  return `Post(${this.id}) by ${this.userId}: ${this.title}`;
};

async function fetchJSON(url) {
  const res = await fetchWithTimeout(url);
  if (!res.ok) throw new Error(`HTTP ${res.status} para ${url}`);
  return res.json();
}

async function getUsers() {
  const raw = await fetchJSON(USERS_URL);
  return raw.filter(isValidUser).map(u => new User(u));
}

async function getPosts() {
  const raw = await fetchJSON(POSTS_URL);
  return raw.filter(isValidPost).map(p => new Post(p));
}

function cityWithMostUsers(users) {
  const map = {};
  for (const u of users) map[u.city] = (map[u.city] || 0) + 1;
  return Object.entries(map).reduce((a, b) => (b[1] > a[1] ? b : a));
}

function postsByUser(posts, userId) {
  return posts.filter(p => p.userId == userId);
}

function topPublishers(users, posts, n = 5) {
  const counts = {};
  for (const p of posts) counts[p.userId] = (counts[p.userId] || 0) + 1;
  return Object.entries(counts)
    .map(([userId, count]) => ({ user: users.find(u => u.id == userId), count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, n);
}

function findPostsByKeyword(posts, keyword) {
  const k = keyword.toLowerCase();
  return posts.filter(p => p.title.toLowerCase().includes(k) || p.body.toLowerCase().includes(k));
}

function usersWithNoPosts(users, posts) {
  const idsWithPosts = new Set(posts.map(p => p.userId));
  return users.filter(u => !idsWithPosts.has(u.id));
}

function postsProportion(posts, userId) {
  const total = posts.length;
  const count = postsByUser(posts, userId).length;
  return ((count / total) * 100).toFixed(2);
}

function cityAveragePostsReport(users, posts) {
  const cityBuckets = {};
  for (const u of users) {
    if (!cityBuckets[u.city]) cityBuckets[u.city] = { users: [], total: 0 };
    cityBuckets[u.city].users.push(u);
  }
  for (const city of Object.keys(cityBuckets)) {
    let tot = 0;
    for (const u of cityBuckets[city].users) tot += postsByUser(posts, u.id).length;
    cityBuckets[city].total = tot;
    cityBuckets[city].avg = tot / cityBuckets[city].users.length;
  }
  return Object.entries(cityBuckets).reduce((a, [city, data]) => (data.avg > a[1].avg ? [city, data] : a));
}

(async function run() {
  try {
    console.log('Cargando datos...');
    const users = await getUsers();
    const posts = await getPosts();
    console.log(`Usuarios cargados: ${users.length}`);
    console.log(`Posts cargados: ${posts.length}`);

    console.log('\nCiudad con más usuarios:');
    console.log(cityWithMostUsers(users));

    console.log('\nTop 5 publicadores:');
    console.log(topPublishers(users, posts, 5));

    console.log('\nUsuarios sin publicaciones:');
    console.log(usersWithNoPosts(users, posts));

    console.log('\nProporción de posts por usuario (primeros 3 usuarios):');
    users.slice(0, 3).forEach(u => console.log(`${u.name}: ${postsProportion(posts, u.id)}%`));

    console.log('\nPosts con palabra clave "qui":');
    console.log(findPostsByKeyword(posts, 'qui').slice(0, 3).map(p => p.summary()));

    console.log('\nCiudad cuyo promedio de posts por usuario es mayor:');
    console.log(cityAveragePostsReport(users, posts));
  } catch (err) {
    console.error('Error:', err.message);
  }
})();
