import Link from "next/link";
import wait from "../../../../helpers/wait.js";

async function getPost(id) {
  await wait(2000);
  return fetch(`${process.env.API_URL}/posts/${id}`).then(res => res.json());
}

async function getComments(id) {
  return fetch(`${process.env.API_URL}/posts/${id}/comments`).then(res =>
    res.json()
  );
}

async function getUserData(id) {
  return fetch(`${process.env.API_URL}/users/${id}`).then(res => res.json());
}

async function getData(id) {
  const post = await getPost(id);
  const comments = await getComments(id);
  const user = await getUserData(post.userId);
  return { post, comments, user };
}

export default async function Post({ params }) {
  const id = params.id;
  const { post, comments, user } = await getData(id);
  return (
    <>
      <h1 className="page-title">{post.title}</h1>
      <span className="page-subtitle">
        By: {<Link href={`/users/${user.id}`}>{user.name}</Link>}
      </span>
      <div>{post.body}</div>

      <h3 className="mt-4 mb-2">Comments</h3>
      <div className="card-stack">
        {comments.map(comment => (
          <div key={comment.id} className="card">
            <div className="card-body">
              <div className="text-sm mb-1">{comment.email}</div>
              {comment.body}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
