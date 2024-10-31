import { useEffect } from "react";
import { IntersectionOptions, useInView } from "react-intersection-observer";

export type UseInterSectionObserverProps = {
  callback: () => void;
  intersectionOption?: IntersectionOptions;
};

export const useIntersectionObserver = ({
  callback,
  intersectionOption = { threshold: 0.3 },
}: UseInterSectionObserverProps) => {
  const { ref, inView } = useInView(intersectionOption);

  useEffect(() => {
    if (inView) {
      callback();
    }
  }, [callback, inView]);

  return { ref, inView };
};
