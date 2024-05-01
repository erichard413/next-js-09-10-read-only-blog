import Link from "next/link";
import PostCard, { SkeletonPostCard } from "./PostCard";
import { SkeletonList } from "../../../components/Skeletons/Skeleton";
import { Suspense } from "react";

async function getPosts() {
  await wait(2000);
  return fetch(`${process.env.API_URL}/posts`).then(res => res.json());
}

export default function Posts() {
  return (
    <>
      <h1 className="page-title">Posts</h1>
      <div className="card-grid">
        <Suspense
          fallback={
            <SkeletonList amount={6}>
              <SkeletonPostCard />
            </SkeletonList>
          }
        >
          <PostList />
        </Suspense>
      </div>
    </>
  );
}

async function PostList() {
  const posts = await getPosts();
  return (
    <>
      {posts.map(post => (
        <PostCard key={post.id} {...post} />
      ))}
    </>
  );
}

function wait(duration) {
  return new Promise(resolve => {
    setTimeout(resolve, duration);
  });
}
