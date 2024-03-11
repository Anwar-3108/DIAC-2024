import React, { ReactNode } from "react";
import classNames from "classnames";
type AnimatedFeaturesCardProps = {
  gradient: string;
  children: ReactNode;
};

const AnimatedFeaturesCard = ({
  gradient,
  children,
}: AnimatedFeaturesCardProps) => {
  return (
    <div
      className={classNames(
        "absolute inset-0 h-full text-center w-full rounded-2xl  bg-gradient-to-br",
        gradient
      )}
    >
      {children}
    </div>
  );
};

export default AnimatedFeaturesCard;

export const otherCard1 = () => {
  return (
    <AnimatedFeaturesCard gradient=" from-[#f7f0ff] to-[#a78afe]">
      <span />
    </AnimatedFeaturesCard>
  );
};
export const otherCard2 = () => {
  return (
    <AnimatedFeaturesCard gradient=" from-[#d4428b] to-[#ef4444]">
      <span />
    </AnimatedFeaturesCard>
  );
};
export const otherCard3 = () => {
  return (
    <AnimatedFeaturesCard gradient=" from-[#86efac] to-[#3b82f6]">
      <span />
    </AnimatedFeaturesCard>
  );
};
