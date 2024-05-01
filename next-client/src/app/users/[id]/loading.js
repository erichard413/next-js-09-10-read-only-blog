import {
  SkeletonList,
  Skeleton,
} from "./../../../../components/Skeletons/Skeleton.js";
import { SkeletonPostCard } from "../../posts/PostCard.js";

export default function UsersPageLoading() {
  return (
    <>
      <h1 className="page-title">
        <Skeleton short inline />
      </h1>
      <div className="page-subtitle">
        <Skeleton short inline />
      </div>
      <div>
        <b>Company:</b> <Skeleton short inline />
      </div>
      <div>
        <b>Website:</b> <Skeleton short inline />
      </div>
      <div>
        <b>Address:</b> <Skeleton short inline />
      </div>

      <h3 className="mt-4 mb-2">Posts</h3>
      <div className="card-grid">
        <SkeletonList amount={6}>
          <SkeletonPostCard />
        </SkeletonList>
      </div>
      <h3 className="mt-4 mb-2">Todos</h3>
      <ul>
        <SkeletonList amount={10}>
          <li>
            <Skeleton short />
          </li>
        </SkeletonList>
      </ul>
    </>
  );
}
