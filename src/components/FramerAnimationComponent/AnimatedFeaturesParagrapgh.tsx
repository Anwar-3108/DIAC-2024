import { useInView } from "framer-motion";
import React, { ReactNode, memo, useRef } from "react";
import classNames from "classnames";
type Props = {
  children: ReactNode;
};
const AnimatedFeaturesParagrapgh = ({ children }: Props) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { margin: "-40% 0px -35% 0px" });

  // console.log(isInView, children);
  return (
    <p
      ref={ref}
      className={classNames(
        "feature-title -mt-20 text-2xl transition-colors duration-300",
        isInView ? "text-gray-900 font-semibold" : "text-gray-500"
      )}
    >
      {children}
    </p>
  );
};

export default memo(AnimatedFeaturesParagrapgh);
