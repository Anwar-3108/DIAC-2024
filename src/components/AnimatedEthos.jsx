import { stagger, useAnimate } from "framer-motion";
import AnimationFeatures from "./FramerAnimationComponent/AnimationFeaturesTitle";
import AnimationFeaturesTitle from "./FramerAnimationComponent/AnimationFeaturesTitle";
import AnimatedFeaturesParagrapgh from "./FramerAnimationComponent/AnimatedFeaturesParagrapgh";
import AnimatedFeaturesCard from "./FramerAnimationComponent/AnimatedFeaturesCard";
import {
  otherCard1,
  otherCard2,
  otherCard3,
} from "./FramerAnimationComponent/AnimatedFeaturesCard";

const AnimatedEthos = () => {
  const features = [
    {
      title: "Agility",
      description: "Delivering Performance on Demand.",
      id: "todo-list",
      card: otherCard1,
      //   visual: OtherVisual,
    },
    {
      title: "Excellence",
      description: "Outstanding Quality in our Deliverables",
      id: "colors",
      card: otherCard2,
      //   visual: OtherVisual,
    },
    {
      title: "Commitment",
      description:
        "Committing what can only be Delivered and Delivering what was Committed.",
      id: "availability",
      card: otherCard3,
      //   visual: OtherVisual,
    },
    {
      title: "Ownership",
      description: "Taking Responsibility for Ones Actions.",
      id: "music",
      card: otherCard1,
      //   visual: MusicVisual,
    },
    {
      title: "Integrity",
      description: "Being Integral Part of Everything We Do.",
      id: "scheduling-links",
      card: otherCard2,
      //   visual: OtherVisual,
    },
    {
      // title: "Always know what your team is up to",
      // description:"" ,
      // id: "team",
      //   card: Team,
      //   visual: OtherVisual,
    },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 -mt-20">
      <div className="flex w-full items-start gap-20">
        <div className="w-full py-[50vh]   overflow-hidden">
          <h1 className="font-heading font-bold text-3xl">
            OUR <span className="text-brown font-bold">ETHOS</span>{" "}
          </h1>{" "}
          <hr className="block bg-brown h-1 lg:w-16  w-24 -mt-0 rounded mr-0 mb-7 lg:ml-1  sm:ml-2 border-none " />
          <ul>
            {features.map((features) => {
              return (
                <li className="py-10" key={features.id}>
                  <AnimationFeaturesTitle>
                    {features.title}
                  </AnimationFeaturesTitle>
                  {/* <br/> */}
                  <AnimatedFeaturesParagrapgh>
                    {features.description}
                  </AnimatedFeaturesParagrapgh>
                </li>
              );
            })}
          </ul>{" "}
        </div>
        <div className="sticky top-0 flex h-screen w-full items-center">
          <div className="relative aspect-square w-full rounded-2xl bg-gray-100 [&:has(>_.active-card)]:bg-transparent ">
           {/* {
            features.map(()=>{
              return(
                <features.card key={features.id}/>
              )
            })
           } */}

            <AnimatedFeaturesCard 
            gradient="from-[#f7f0ff] to-[#a78afe]">
              Hey! card this side
            </AnimatedFeaturesCard>
          </div>
        </div>
      </div>
      <div className="">More room to scroll</div>
    </div>
  );
};

export default AnimatedEthos;
