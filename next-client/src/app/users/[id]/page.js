import PostCard from "@/app/posts/PostCard";
import { TodoItem } from "@/app/todos/page";
import wait from "../../../../helpers/wait.js";

async function getUserData(id) {
  await wait(2000);
  return fetch(`${process.env.API_URL}/users/${id}`).then(res => res.json());
}

async function getTodos(id) {
  return fetch(`${process.env.API_URL}/todos?userId=${id}`).then(res =>
    res.json()
  );
}

async function getPosts(id) {
  return fetch(`${process.env.API_URL}/posts?userId=${id}`).then(res =>
    res.json()
  );
}

export default async function User({ params }) {
  const { id } = params;
  const user = await getUserData(id);
  const todos = await getTodos(id);
  const posts = await getPosts(id);
  return (
    <>
      <h1 className="page-title">{user.name}</h1>
      <div className="page-subtitle">{user.email}</div>
      <div>
        <b>Company:</b> {user.company.name}
      </div>
      <div>
        <b>Website:</b> {user.website}
      </div>
      <div>
        <b>Address:</b>{" "}
        {`${user.address.street} ${user.address.suite}
    ${user.address.city} ${user.address.zipcode}`}
      </div>

      <h3 className="mt-4 mb-2">Posts</h3>
      <div className="card-grid">
        {posts.map(post => (
          <PostCard key={post.id} {...post} />
        ))}
      </div>
      <h3 className="mt-4 mb-2">Todos</h3>
      <ul>
        {todos.map(todo => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </ul>
    </>
  );
}
