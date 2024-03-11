import React, { memo } from "react";
import { stagger, useAnimate } from "framer-motion";
import classNames from "classnames";
import {
  Excellence,
  Commitment,
  Ownership,
  Intrigity,
  Agility,
  Team,
} from "./CoreValuesCard";
import { FeatureTitle } from "./title";
import { MusicVisual, OtherVisual } from "./visual";
// import { Hero } from "./components/hero";
// import "./index.css";
import { useFeatureStore } from "./store";
import { useEffect } from "react";
import { useHidePageOverflow } from "./toggle-page-overflow";
import { useEscapePress } from "./use-escape-press";
import AnimatedFeaturesParagrapgh from "./AnimatedFeaturesParagrapgh";
const OurAnimatedCoreValues = () => {
  const [scope, animate] = useAnimate();
  const fullscreenFeature = useFeatureStore((state) => state.fullscreenFeature);
  const lastFullscreenFeature = useFeatureStore(
    (state) => state.lastFullscreenFeature
  );
  const setFullscreenFeature = useFeatureStore(
    (state) => state.setFullscreenFeature
  );

  const onEscapePress = () => {
    if (fullscreenFeature) setFullscreenFeature(null);
  };

  useEscapePress(onEscapePress);
  useHidePageOverflow(!!fullscreenFeature);

  useEffect(() => {
    if (fullscreenFeature) {
      animate([
        [
          ".feature-title",
          { opacity: 0, x: "-200px" },
          { duration: 0.3, delay: stagger(0.05) },
        ],
        [
          `.visual-${lastFullscreenFeature}`,
          { opacity: 1, scale: 1, pointerEvents: "auto" },
          { at: "<" },
        ],
        [".active-card .gradient", { opacity: 0, scale: 0 }, { at: "<" }],
        [".active-card .show-me-btn", { opacity: 0 }, { at: "<" }],
        [
          ".back-to-site-btn",
          { opacity: 1, y: "0px" },
          { at: "<", duration: 0.3 },
        ],
      ]);
    } else {
      animate([
        [
          ".feature-title",
          { opacity: 1, x: "0px" },
          { duration: 0.3, delay: stagger(0.05) },
        ],
        [
          `.visual-${lastFullscreenFeature}`,
          { opacity: 0, scale: 0.75, pointerEvents: "none" },
          { at: "<" },
        ],
        [".active-card .gradient", { opacity: 1, scale: 1 }, { at: "<" }],
        [
          ".back-to-site-btn",
          { opacity: 0, y: "300px" },
          { at: "<", duration: 0.3 },
        ],
        [".active-card .show-me-btn", { opacity: 1 }],
      ]);
    }
  }, [animate, fullscreenFeature, lastFullscreenFeature]);

  const features = [
    {
      title: "Excellence",
      discription: "Outstanding Quality in our Deliverables",
      id: "Excellence",
      card: Excellence,
      visual: OtherVisual,
    },

    {
      title: "Commitment",
      discription:
        "Committing what can only be Delivered and Delivering what was Committed",
      id: "Commitment",
      card: Commitment,
      visual: OtherVisual,
    },

    {
      title: "Ownership",
      discription: "Taking Responsibility for Ones Actions",
      id: "Ownership",
      card: Ownership,
      visual: MusicVisual,
    },

    {
      title: "Integrity",
      discription: "Being Integral Part of Everything We Do",
      id: "integrity",
      card: Intrigity,
      visual: OtherVisual,
    },
    {
      title: "Agility",
      discription: "Delivering Performance on Demand",
      id: "agility",
      card: Agility,
      visual: OtherVisual,
    },
  ];

  return (
    <>
      <div className="">
        <div className=" justify-center align-middle   mt-20 ">
          <div className="p-4">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 text-center  font-medium text-gray-950  -ml-20 md:-ml-0 lg:-ml-0 lg:p-16 p-0">
              Our <span className="text-brown">Core Values</span>{" "}
            </h1>
            <p className="text-lg  font-semibold leading-relaxed text-left md:text-center lg:text-center p-4 md:p-0 lg:p-0 lg:-mt-10 mt-6">
              Our Core Values define how we treat all our stakeholders, which
              include employees, customers and principals.
            </p>
          </div>
        </div>
        <div className="mx-auto    lg:-mt-[20%] md:-mt-[50%] -mt-[90%] max-w-6xl  px-4">
          {/* <Hero /> */}

          <div ref={scope}>
            {features.map((feature) => (
              <feature.visual id={feature.id} key={feature.id} />
            ))}

            <div className="flex w-full items-start p-4 gap-20">
              <div className="w-full py-[50vh]">
                <ul>
                  {features.map((feature) => (
                    <li
                      className={classNames(
                        "lg:pt-20 ",
                        feature.id === "agility" ? "-mb-20" : "mb-10"
                      )}
                      key={feature.id}
                    >
                      <FeatureTitle
                        colorInView="red-600"
                        colorNotInView="red-300"
                        id={feature.id}
                      >
                        {feature.title}
                      </FeatureTitle>
                      <br />
                      <AnimatedFeaturesParagrapgh>
                        {feature.discription}
                      </AnimatedFeaturesParagrapgh>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="sticky lg:flex md:flex hidden lg:-top-52 -top-32   h-screen w-full items-center">
                <div className="relative aspect-square w-full rounded-2xl bg-gray-100 [&:has(>_.active-card)]:bg-transparent">
                  {features.map((feature) => (
                    <feature.card id={feature.id} key={feature.id} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* <div className="h-screen">More room to scroll</div> */}
        </div>
      </div>
    </>
  );
};

export default memo(OurAnimatedCoreValues);
