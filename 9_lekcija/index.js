const postsWrapper = document.querySelector("div.wrapper");

// Atļauts izmantot vārdu await
async function getPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

    return data;
  } catch (e) {
    // Ja kļūda, tad izvadīt kļūdas paziņojumu
    console.error(e);
    return [];
  }
}

async function renderPosts() {
  const posts = await getPosts();

  const postsHtml = new Array(posts.length);

  posts.forEach((post, idx) => {
    postsHtml[idx] = `
        <div class="post">
            <h2 class="post__title">${post.title}</h2>
            <p class="post__body">${post.body}</p>
        </div>
    `;
  });

  postsWrapper.innerHTML = postsHtml.join("");
}

renderPosts();

// async function getPost(id) {
//   const response = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${id}`
//   );
//   const data = await response.json();

//   console.log(data);
// }

async function createPost(payload) {
  await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

createPost({
  title: "My new post",
  body: "This is my new post",
  userId: 1,
});

async function updatePost(id, payload) {
  await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: "PATCH",
    body: JSON.stringify(payload),
  });
}

updatePost(1, {
  title: "New title",
  body: "New body",
});

async function overridePost(id, payload) {
  await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: "PUT",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
    },
  });
}

overridePost(1, {
  title: "New title",
  body: "New body",
});

async function deletePost(id) {
  await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: "DELETE",
  });
}

deletePost(1);
