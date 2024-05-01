import {
  SkeletonList,
  Skeleton,
} from "./../../../../components/Skeletons/Skeleton.js";

export default function PostLoader() {
  return (
    <>
      <h1 className="page-title">
        <Skeleton short inline />
      </h1>
      <span className="page-subtitle">
        By: <Skeleton short inline />
      </span>
      <div>
        <Skeleton />
        <Skeleton />
      </div>

      <h3 className="mt-4 mb-2">Comments</h3>
      <div className="card-stack">
        <SkeletonList amount={6}>
          <div className="card">
            <div className="card-body">
              <div className="text-sm mb-1">
                <Skeleton short inline />
              </div>
              <Skeleton />
              <Skeleton />
              <Skeleton />
            </div>
          </div>
        </SkeletonList>
      </div>
    </>
  );
}
