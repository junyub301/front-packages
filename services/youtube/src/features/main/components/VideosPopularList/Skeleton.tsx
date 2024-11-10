import { VideosPopularListItemSkeleton } from "./ListItem/Skeleton";
import * as s from "./style.css";
export const ViewPopularListSkeleton = () => {
  const items = Array.from({ length: 10 }, (_, i) => <VideosPopularListItemSkeleton key={i} />);
  return (
    <section data-testid="ViewPopularListSkeleton" className={s.wrapper}>
      {items}
    </section>
  );
};
