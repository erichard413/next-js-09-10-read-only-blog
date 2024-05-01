import Link from "next/link";
import wait from "../../../helpers/wait.js";
import { Suspense } from "react";
import {
  Skeleton,
  SkeletonButton,
  SkeletonList,
} from "../../../components/Skeletons/Skeleton";

async function getUsers() {
  await wait(2000);
  return fetch(`${process.env.API_URL}/users`).then(res => res.json());
}

export default async function Users() {
  return (
    <>
      <h1 className="page-title">Users</h1>
      <div className="card-grid">
        <Suspense
          fallback={
            <SkeletonList amount={6}>
              <UserCardSkeleton />
            </SkeletonList>
          }
        >
          <UsersList />
        </Suspense>
      </div>
    </>
  );
}

export async function UsersList() {
  const users = await getUsers();
  return (
    <>
      {users.map(user => (
        <UserCard user={user} />
      ))}
    </>
  );
}

export function UserCard({ user }) {
  return (
    <div key={user.id} className="card">
      <div className="card-header">{user.name}</div>
      <div className="card-body">
        <div>{user.company.name}</div>
        <div>{user.website}</div>
        <div>{user.email}</div>
      </div>
      <div className="card-footer">
        <Link className="btn" href={`users/${user.id.toString()}`}>
          View
        </Link>
      </div>
    </div>
  );
}

export function UserCardSkeleton() {
  return (
    <div className="card">
      <div className="card-header">{<Skeleton short inline />}</div>
      <div className="card-body">
        <div>
          <Skeleton short inline />
        </div>
        <div>
          <Skeleton short inline />
        </div>
        <div>
          <Skeleton short inline />
        </div>
      </div>
      <div className="card-footer">
        <SkeletonButton />
      </div>
    </div>
  );
}
