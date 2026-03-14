export function SkeletonBox({ className = "" }) {
  return <div className={`animate-pulse bg-gray-200 rounded-xl ${className}`} />;
}

export function AppCardSkeleton() {
  return (
    <div className="bg-white rounded-2xl p-5 border border-gray-100">
      <div className="flex items-center gap-3 mb-3">
        <SkeletonBox className="w-11 h-11 rounded-xl" />
        <div className="flex-1">
          <SkeletonBox className="w-24 h-4 mb-1.5 rounded" />
          <SkeletonBox className="w-16 h-3 rounded" />
        </div>
      </div>
      <SkeletonBox className="w-full h-4 mb-2 rounded" />
      <SkeletonBox className="w-3/4 h-4 rounded" />
    </div>
  );
}

export function BlogCardSkeleton() {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-gray-100">
      <SkeletonBox className="w-full h-48 rounded-none" />
      <div className="p-5">
        <SkeletonBox className="w-20 h-5 mb-3 rounded-full" />
        <SkeletonBox className="w-full h-5 mb-2 rounded" />
        <SkeletonBox className="w-3/4 h-5 mb-3 rounded" />
        <SkeletonBox className="w-full h-4 mb-1 rounded" />
        <SkeletonBox className="w-2/3 h-4 rounded" />
      </div>
    </div>
  );
}

export function AppDetailSkeleton() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <SkeletonBox className="w-48 h-4 mb-8 rounded" />
      <div className="flex items-center gap-5 mb-8">
        <SkeletonBox className="w-16 h-16 rounded-2xl" />
        <div>
          <SkeletonBox className="w-40 h-7 mb-2 rounded" />
          <SkeletonBox className="w-64 h-4 rounded" />
        </div>
      </div>
      <SkeletonBox className="w-full h-64 mb-8 rounded-2xl" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[...Array(8)].map((_, i) => (
          <SkeletonBox key={i} className="h-12 rounded-xl" />
        ))}
      </div>
    </div>
  );
}

export function AppGridSkeleton({ count = 8 }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
      {[...Array(count)].map((_, i) => (
        <AppCardSkeleton key={i} />
      ))}
    </div>
  );
}

export function BlogGridSkeleton({ count = 6 }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(count)].map((_, i) => (
        <BlogCardSkeleton key={i} />
      ))}
    </div>
  );
}
