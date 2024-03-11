import { useInView } from "framer-motion";
import React, { ReactNode, memo, useRef } from "react";
import classNames from "classnames";
type Props = {
  children: ReactNode;
};

const AnimationFeaturesTitle = ({ children }: Props) => {
  const ref = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(ref, { margin: "-40% 0px -50% 0px" });

  // console.log(isInView, children);
  return (
    <>
      <h2
        ref={ref}
        className={classNames(
          "feature-title py-10 font-heading text-3xl transition-colors  duration-300",
          isInView ? "text-brown font-bold" : "text-red-300"
        )}
      >
        {children}
      </h2>
    </>
  );
};
// className="text-brown text-2xl font-heading py-16"
export default memo(AnimationFeaturesTitle);
