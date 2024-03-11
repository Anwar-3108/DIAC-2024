import React from "react";
import { Carousel } from "flowbite-react";
import { Avatar, Blockquote, Rating } from "flowbite-react";
const Testimonials = () => {


  return (
    <div>
      <div className="align-middle justify-center text-center mt-10">
        <h1 className="title-font text-xl md:text-2xl lg:text-3xl mb-12 font-medium text-gray-950">
          Our Students are Creating Impact
        </h1>
      </div>

      <div
        className="grid  lg:grid-cols-2 md:grid-cols-1 grid-flow-row gap-4 h-96 md:h-80 lg:h-96"
      
      >
        <Carousel>
          <div className="justify-center align-middle ml-[2%] h-96 md:h-80 lg:h-96">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/VQLxGt2FxUk?si=BQC9J-VizdAAaccd"
              title="YouTube video player"
              allow="accelerometer; autoplay;  encrypted-media;   web-share"
              allowFullScreen
            ></iframe>
          </div>
        </Carousel>

        <Carousel  indicators={false} className="mr-[-2%] p-4" slideInterval={5000}>
          <figure className="max-w-screen-md">
            <div className="mb-4 flex items-center">
              <Rating size="md">
                <Rating.Star />
                <Rating.Star />
                <Rating.Star />
                <Rating.Star />
                <Rating.Star />
              </Rating>
            </div>
            <Blockquote>
              <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                "Flowbite is just awesome. It contains tons of predesigned
                components and pages starting from login screen to complex
                dashboard. Perfect choice for your next SaaS application."
              </p>
            </Blockquote>
            <figcaption className="mt-6 flex items-center space-x-3">
              <Avatar
                rounded
                size="xs"
                img="/images/people/profile-picture-3.jpg"
                alt="profile picture"
              />
              <div className="flex items-center divide-x-2 divide-gray-300 dark:divide-gray-700">
                <cite className="pr-3 font-medium text-gray-900 dark:text-white">
                  Bonnie Green
                </cite>
                <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">
                  CTO at Flowbite
                </cite>
              </div>
            </figcaption>
          </figure>
          <figure className="max-w-screen-md">
            <div className="mb-4 flex items-center">
              <Rating size="md">
                <Rating.Star />
                <Rating.Star />
                <Rating.Star />
                <Rating.Star />
                <Rating.Star />
              </Rating>
            </div>
            <Blockquote>
              <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                "Flowbite is just awesome. It contains tons of predesigned
                components and pages starting from login screen to complex
                dashboard. Perfect choice for your next SaaS application."
              </p>
            </Blockquote>
            <figcaption className="mt-6 flex items-center space-x-3">
              <Avatar
                rounded
                size="xs"
                img="/images/people/profile-picture-3.jpg"
                alt="profile picture"
              />
              <div className="flex items-center divide-x-2 divide-gray-300 dark:divide-gray-700">
                <cite className="pr-3 font-medium text-gray-900 dark:text-white">
                  Bonnie Green
                </cite>
                <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">
                  CTO at Flowbite
                </cite>
              </div>
            </figcaption>
          </figure>
          <figure className="max-w-screen-md">
            <div className="mb-4 flex items-center">
              <Rating size="md">
                <Rating.Star />
                <Rating.Star />
                <Rating.Star />
                <Rating.Star />
                <Rating.Star />
              </Rating>
            </div>
            <Blockquote>
              <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                "Flowbite is just awesome. It contains tons of predesigned
                components and pages starting from login screen to complex
                dashboard. Perfect choice for your next SaaS application."
              </p>
            </Blockquote>
            <figcaption className="mt-6 flex items-center space-x-3">
              <Avatar
                rounded
                size="xs"
                img="/images/people/profile-picture-3.jpg"
                alt="profile picture"
              />
              <div className="flex items-center divide-x-2 divide-gray-300 dark:divide-gray-700">
                <cite className="pr-3 font-medium text-gray-900 dark:text-white">
                  Bonnie Green
                </cite>
                <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">
                  CTO at Flowbite
                </cite>
              </div>
            </figcaption>
          </figure>
          <figure className="max-w-screen-md">
            <div className="mb-4 flex items-center">
              <Rating size="md">
                <Rating.Star />
                <Rating.Star />
                <Rating.Star />
                <Rating.Star />
                <Rating.Star />
              </Rating>
            </div>
            <Blockquote>
              <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                "Flowbite is just awesome. It contains tons of predesigned
                components and pages starting from login screen to complex
                dashboard. Perfect choice for your next SaaS application."
              </p>
            </Blockquote>
            <figcaption className="mt-6 flex items-center space-x-3">
              <Avatar
                rounded
                size="xs"
                img="/images/people/profile-picture-3.jpg"
                alt="profile picture"
              />
              <div className="flex items-center divide-x-2 divide-gray-300 dark:divide-gray-700">
                <cite className="pr-3 font-medium text-gray-900 dark:text-white">
                  Bonnie Green
                </cite>
                <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">
                  CTO at Flowbite
                </cite>
              </div>
            </figcaption>
          </figure>
          <figure className="max-w-screen-md">
            <div className="mb-4 flex items-center">
              <Rating size="md">
                <Rating.Star />
                <Rating.Star />
                <Rating.Star />
                <Rating.Star />
                <Rating.Star />
              </Rating>
            </div>
            <Blockquote>
              <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                "lorem50"
              </p>
            </Blockquote>
            <figcaption className="mt-6 flex items-center space-x-3">
              <Avatar
                rounded
                size="xs"
                img="/images/people/profile-picture-3.jpg"
                alt="profile picture"
              />
              <div className="flex items-center divide-x-2 divide-gray-300 dark:divide-gray-700">
                <cite className="pr-3 font-medium text-gray-900 dark:text-white">
                  Bonnie Green
                </cite>
                <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">
                  CTO at Flowbite
                </cite>
              </div>
            </figcaption>
          </figure>
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonials;
