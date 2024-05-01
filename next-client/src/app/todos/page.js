import { Suspense } from "react";
import {
  SkeletonList,
  Skeleton,
} from "../../../components/Skeletons/Skeleton.js";
import wait from "../../../helpers/wait.js";

async function getTodos() {
  await wait(2000);
  return fetch(`${process.env.API_URL}/todos`).then(res => res.json());
}

export default async function Todos() {
  return (
    <>
      <h1 className="page-title">Todos</h1>
      <ul>
        <Suspense
          fallback={
            <SkeletonList amount={10}>
              <li>
                <Skeleton short />
              </li>
            </SkeletonList>
          }
        >
          <TodoList />
        </Suspense>
      </ul>
    </>
  );
}

export function TodoItem({ completed, title }) {
  return <li className={completed ? "strike-through" : undefined}>{title}</li>;
}

export async function TodoList() {
  const todos = await getTodos();
  return (
    <>
      {todos.map(todo => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </>
  );
}
