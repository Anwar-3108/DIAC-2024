import React from "react"; // Add this line
import Delivering_Performance_on_Demand_Img from "../../assets/images/pages/About/Animated_Ethos/Delivering-Performance-on-Demand.jpg" ;
import We_inspire_our_work_force_Img from "../../assets/images/pages/About/Animated_Ethos/we-inspire-our-work-force.jpg" ;
import Work_Life_Img from "../../assets/images/pages/About/Animated_Ethos/work-life.jpg" ;
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

export const Card1 = ({ id }: CardProps) => {
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
            "w-full left-[10%] top-[10%] -[]   lg:h-auto h-64 object-cover object-center rounded-xl shadow-lg transition-transform",
            isFullscreen ? "scale-0" : "scale-100"
          )}
          src={Delivering_Performance_on_Demand_Img}
        />

        {/* <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400"></img> */}
      </div>
    </FeatureCard>
  );
};

export const Card2 = ({ id }: CardProps) => {
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
          "w-full left-[10%] top-[10%] -[]   lg:h-auto h-64 object-cover object-center rounded-xl shadow-lg transition-transform",
          isFullscreen ? "scale-0" : "scale-100"
        )}
        src={We_inspire_our_work_force_Img}
      />
    </FeatureCard>
  );
};

export const Card3 = ({ id }: CardProps) => {
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
          "w-full left-[10%] top-[10%] -[]   lg:h-auto h-64 object-cover object-center rounded-xl shadow-lg transition-transform",
          isFullscreen ? "scale-0" : "scale-100"
        )}
        src={We_inspire_our_work_force_Img}
      />
    </FeatureCard>
  );
};

export const Card4 = ({ id }: CardProps) => {
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
          "w-full left-[10%] top-[10%] font-extrabold  lg:h-auto h-64 object-cover object-center rounded-xl shadow-lg transition-transform",
          isFullscreen ? "scale-0" : "scale-100"
        )}
        src={Work_Life_Img}
      />
    </FeatureCard>
  );
};

export const SchedulingLinks = ({ id }: CardProps) => {
  const fullscreenFeature = useFeatureStore((store) => store.fullscreenFeature);
  const isFullscreen = fullscreenFeature === id;
  const inViewFeature = useFeatureStore((state) => state.inViewFeature);
  const setFullscreenFeature = useFeatureStore(
    (state) => state.setFullscreenFeature
  );
  return (
    <FeatureCard id={id} gradient="from-[#fff7f5] to-[#ffd8ad]">
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
