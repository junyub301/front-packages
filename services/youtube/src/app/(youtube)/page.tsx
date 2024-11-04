import { VideosPopularList } from "@/src/features/main/components/VideosPopularList";
import { ViewPopularListSkeleton } from "@/src/features/main/components/VideosPopularList/Skeleton";
import { Suspense } from "react";
export default function Home() {
  return (
    <main>
      <Suspense fallback={<ViewPopularListSkeleton />}>
        <VideosPopularList />
      </Suspense>
    </main>
  );
}
