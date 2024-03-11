import React, { memo } from "react";
import { stagger, useAnimate } from "framer-motion";
import classNames from "classnames";
import {
  Card1,
  Card2,
  Card3,
  Card4,
  // Team,
  // SchedulingLinks,
} from "./EthosCards";
import { FeatureTitle } from "./title";
import { MusicVisual, OtherVisual } from "./visual";
// import { Hero } from "./components/hero";
// import "./index.css";
import { useFeatureStore } from "./store";
import { useEffect } from "react";
import { useHidePageOverflow } from "./toggle-page-overflow";
import { useEscapePress } from "./use-escape-press";
import AnimatedFeaturesParagrapgh from "./AnimatedFeaturesParagrapgh";
const OurAnimatedEthos = () => {
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
      title:
        "We view failures as feedback that provide us the information, necessary to learn and succeed again.",
      discription: "Delivering Performance on Demand",
      id: "1",
      card: Card1,
      visual: OtherVisual,
    },
    {
      title:
        "We expect our work force to demonstrate their positive personal values in their actions and to be sincere and real.",
      discription: "Outstanding Quality in our Deliverables",
      id: "2",
      card: Card2,
      visual: OtherVisual,
    },
    // {
    //   title:
    //     "We inspire our work force to be motivated and committed and be willing to do things differently.",
    //   discription:
    //     "Committing what can only be Delivered and Delivering what was Committed",
    //   id: "3",
    //   card:   Card3,
      
    //   visual: OtherVisual,
    // },
    // {
    //   title:
    //     "We encourage our work force to take responsibility for their words and actions.",
    //   discription: "Taking Responsibility for Ones Actions",
    //   id: "4",
    //   card: Card4,
    //   visual: MusicVisual,
    // },
    // {
    //   title: "We align our resources to the business we focus.",
    //   discription: "Being Integral Part of Everything We Do",
    //   id: "5",
    //   card: SchedulingLinks,
    //   visual: OtherVisual,
    // },
    {
      title:
        "We follow work-life balance to make time for things those are meaningful and important to us.",
      discription: "",
      id: "6",
      card: Card4,
      visual: OtherVisual,
    },
  ];

  return (
    <>
      {/* <div className="hidden md:block lg:block"> */}
      <div className="">
      <div className=" justify-center align-middle   mt-20 ">
        <div className="">
          <h1 className="title-font sm:text-4xl text-3xl mb-12 text-center  font-medium text-gray-950">
            Our <span className="text-brown"> Ethos</span>{" "}
          </h1>
          {/* <p className="text-lg text-center font-semibold leading-relaxed">
            Our Core Values define how we treat all our stakeholders, which
            include employees, customers and principals.
          </p> */}
        </div>
      </div>
        {/* <div className="mx-auto hidden md:block lg:block   lg:-mt-[20%] -mt-[50%]  max-w-6xl  px-4"> */}
        <div className="mx-auto   lg:-mt-[20%] md:-mt-[50%] -mt-[90%]  max-w-6xl  px-4">
          {/* <Hero /> */}
          <div ref={scope}>
            {features.map((feature) => (
              <feature.visual id={feature.id} key={feature.id} />
            ))}
            {/* <button
          onClick={() => setFullscreenFeature(null)}
          className="back-to-site-btn fixed bottom-6 left-1/2 z-10 -translate-x-1/2 translate-y-[300%] rounded-full bg-black px-4 py-2 text-white opacity-0 shadow-lg"
          >
          Back to site
        </button> */}
            <div className="flex w-full items-start p-4 gap-20 ">
              <div className="sticky lg:-top-52 -top-32  lg:flex md:flex hidden  h-screen w-full items-center">
                <div className="relative  aspect-square w-full rounded-2xl bg-gray-100 [&:has(>_.active-card)]:bg-transparent">
                  {features.map((feature) => (
                    <feature.card id={feature.id} key={feature.id} />
                  ))}
                </div>
              </div>
              {/* ==== */}
              <div className="w-full py-[50vh]">
                <ul>
                  {features.map((feature) => (
                    <li
                      className={classNames(
                        "lg:pt-10  ",
                        feature.id === "6" ? "-mb-16" : "mb-1"
                      )}
                      key={feature.id}
                    >
                      <FeatureTitle
                        colorInView="black"
                        colorNotInView="gray-300"
                        id={feature.id}
                      >
                        {feature.title}
                      </FeatureTitle>
                      <br />
                      {/* <AnimatedFeaturesParagrapgh>
                    {feature.discription}
                  </AnimatedFeaturesParagrapgh> */}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {/* <div className="h-screen">More room to scroll</div> */}
        </div>
      </div>
    </>
  );
};

export default memo(OurAnimatedEthos);
