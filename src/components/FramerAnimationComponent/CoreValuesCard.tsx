import React from "react";

import Excellence_Img from "../../assets/images/pages/About/Animated_Core_Values/excellence.jpg";
import Commitment_Img from "../../assets/images/pages/About/Animated_Core_Values/commitment.jpg";
import Ownership_Img from "../../assets/images/pages/About/Animated_Core_Values/ownership-0.1.jpg";
import Intrigity_Img from "../../assets/images/pages/About/Animated_Core_Values/intrigity.jpg";
import Agility_Img from "../../assets/images/pages/About/Animated_Core_Values/agility.jpg";

import classNames from "classnames";
import { useFeatureStore } from "./store";
import { motion } from "framer-motion";

type FeatureCardProps = {
  gradient: string;
  children: React.ReactNode;
} & CardProps;

type CardProps = {
  id: string;
};

const FeatureCard = ({ gradient, children, id }: FeatureCardProps) => {
  const inViewFeature = useFeatureStore((state) => state.inViewFeature);

  const setFullscreenFeature = useFeatureStore(
    (state) => state.setFullscreenFeature
  );

  return (
    <div
      className={classNames(
        "absolute inset-0 h-full w-full rounded-2xl transition-opacity",
        inViewFeature === id
          ? "active-card opacity-100"
          : "pointer-events-none opacity-0"
      )}
    >
      <div
        className={classNames(
          "gradient absolute inset-0 origin-bottom-left rounded-2xl bg-gradient-to-br",
          gradient
        )}
      />
      {children}
    </div>
  );
};

export const Excellence = ({ id }: CardProps) => {
  const fullscreenFeature = useFeatureStore((store) => store.fullscreenFeature);
  const isFullscreen = fullscreenFeature === id;
  const inViewFeature = useFeatureStore((state) => state.inViewFeature);
  const setFullscreenFeature = useFeatureStore(
    (state) => state.setFullscreenFeature
  );

  return (
    <FeatureCard id={id} gradient="from-[#f7f0ff] to-[#a78afe]">
      <div className="mb-[50%]">
        <img
          className={classNames(
            "w-full left-[10%] top-[10%]   lg:h-auto h-64 object-cover object-center rounded-xl shadow-lg transition-transform",
            isFullscreen ? "scale-0" : "scale-100"
          )}
          src={Excellence_Img}
        />

        {/* <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400"></img> */}
      </div>
    </FeatureCard>
  );
};

export const Commitment = ({ id }: CardProps) => {
  const fullscreenFeature = useFeatureStore((store) => store.fullscreenFeature);
  const isFullscreen = fullscreenFeature === id;
  const inViewFeature = useFeatureStore((state) => state.inViewFeature);
  const setFullscreenFeature = useFeatureStore(
    (state) => state.setFullscreenFeature
  );
  return (
    <FeatureCard id={id} gradient="from-[#f5fbff] to-[#addeff]">
      <img
        className={classNames(
          "w-full left-[10%] top-[10%]    lg:h-auto h-64 object-cover object-center rounded-xl shadow-lg transition-transform",
          isFullscreen ? "scale-0" : "scale-100"
        )}
        src={Commitment_Img}
      />
    </FeatureCard>
  );
};

export const Ownership = ({ id }: CardProps) => {
  const fullscreenFeature = useFeatureStore((store) => store.fullscreenFeature);
  const isFullscreen = fullscreenFeature === id;
  const inViewFeature = useFeatureStore((state) => state.inViewFeature);
  const setFullscreenFeature = useFeatureStore(
    (state) => state.setFullscreenFeature
  );
  return (
    <FeatureCard id={id} gradient="from-[#f5fff7] to-[#adf8ff]">
      <img
        className={classNames(
          "w-full left-[10%] top-[10%]    lg:h-auto h-64 object-cover object-center rounded-xl shadow-lg transition-transform",
          isFullscreen ? "scale-0" : "scale-100"
        )}
        src={Ownership_Img}
      />
    </FeatureCard>
  );
};

export const Intrigity = ({ id }: CardProps) => {
  const fullscreenFeature = useFeatureStore((store) => store.fullscreenFeature);
  const isFullscreen = fullscreenFeature === id;
  const inViewFeature = useFeatureStore((state) => state.inViewFeature);
  const setFullscreenFeature = useFeatureStore(
    (state) => state.setFullscreenFeature
  );

  return (
    <FeatureCard id={id} gradient="from-[#f5fbff] to-[#addeff]">
      <img
        className={classNames(
          "w-full left-[10%] top-[10%] -[] font-extrabold  lg:h-auto h-64 object-cover object-center rounded-xl shadow-lg transition-transform",
          isFullscreen ? "scale-0" : "scale-100"
        )}
        src={Intrigity_Img}
      />
    </FeatureCard>
  );
};

export const Agility = ({ id }: CardProps) => {
  const fullscreenFeature = useFeatureStore((store) => store.fullscreenFeature);
  const isFullscreen = fullscreenFeature === id;
  const inViewFeature = useFeatureStore((state) => state.inViewFeature);
  const setFullscreenFeature = useFeatureStore(
    (state) => state.setFullscreenFeature
  );

  return (
    <FeatureCard id={id} gradient="from-[#f5fbff] to-[#addeff]">
      <img
        className={classNames(
          "w-full left-[10%] top-[10%] -[] font-extrabold  lg:h-auto h-64 object-cover object-center rounded-xl shadow-lg transition-transform",
          isFullscreen ? "scale-0" : "scale-100"
        )}
        src={Agility_Img}
      />
    </FeatureCard>
  );
};

export const Team = ({ id }: CardProps) => {
  const fullscreenFeature = useFeatureStore((store) => store.fullscreenFeature);
  const isFullscreen = fullscreenFeature === id;
  const inViewFeature = useFeatureStore((state) => state.inViewFeature);
  const setFullscreenFeature = useFeatureStore(
    (state) => state.setFullscreenFeature
  );
  return (
    <FeatureCard id={id} gradient="from-[#fef5ff] to-[#ffade1]">
      <img
        className={classNames(
          "w-full left-[10%] top-[10%] -[]   lg:h-auto h-64 object-cover object-center rounded-xl shadow-lg transition-transform",
          isFullscreen ? "scale-0" : "scale-100"
        )}
        src="https://dummyimage.com/720x600"
      />
    </FeatureCard>
  );
};
