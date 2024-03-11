import { useEffect, useState } from "react";
import { Carousel } from "flowbite-react";
import React from "react";
import Course_Duration from "./Course_Duration";
import Course_Details_Accordion from "../../components/Course_Details_Accordion";
import Contact from "../../components/Contact";
import Course_Details_Timeline from "../../components/Course_Details_Timeline";
import { Accordion } from "flowbite-react";

const PLC_Networking = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    document.title = `AZtec | Services | Installation and System Setup`;
    const img = new Image();
    img.src =
      "https://www.sentec.co.uk/images/content/4_2_835x365.jpg?14:46:47&_e=.jpg";
    img.onload = () => {
      setImageLoaded(true);
    };
  }, []);
  return (
    <div>
      <div className="md:h-56 h-64 lg:h-[300px] ">
        <Carousel leftControl={true} rightControl={true} indicators={false}>
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
            className="object-cover   object-center "
            alt="..."
          />
        </Carousel>
      </div>
      <Course_Duration trainingName={"Industrial Automation Training"} />

      <section className="text-gray-100 body-font">
        <div className="container px-5 py-12 mx-auto flex flex-wrap items-center justify-center">
          <div className="lg:w-1/2 w-full lg:order-last order-first">
            {imageLoaded ? (
              <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 lg:ml-[20%] md:ml-[25%] ml-[8%]">
                <img
                  class="object-cover object-center rounded"
                  alt="hero"
                  src="https://dummyimage.com/720x600"
                />
              </div>
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                Loading...
              </div>
            )}
          </div>
          <div className="lg:w-1/2 w-full lg:pl-10 lg:mt-0 mt-10">
            <div className="sm:p-8 p-4">
              <h1 className="title-font sm:text-4xl text-3xl  mb-4 font-medium text-brown">
                PLC Networking
              </h1>
              <div className="mb-8 leading-relaxed text-black ">
                Our modeling & analytics team can help you to get actionable
                insights from your data for making better business decisions. We
                are proficient in conducting all kinds of financial modeling and
                statistical analysis in MS Excel, SPSS, Frontline or other
                software. We support our clients in developing models suitable
                for them. Not only do we manage your data in the most efficient
                manner but can also statistically analyse your data to come up
                with useful results to help you understand the dynamics of your
                business better. We are fully conversant in Econometrics /
                Business Research Methods. We are experts in use of econometric
                tools like probability distributions, regression, correlation,
                covariance, Chi-Square test, Z Test, T Test, ANOVA Analysis,
                Monte Carlo Simulation, VaR, etc.
              </div>
            </div>
          </div>
        </div>
      </section>

      <div>
        {/* <Course_Details_Accordion /> */}

        <div className="lg:px-20 md:px-20 px-4 py-10">
          <Accordion>
            <Accordion.Panel className="">
              <Accordion.Title className="">What is Flowbite?</Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Flowbite is an open-source library of interactive components
                  built on top of Tailwind CSS including buttons, dropdowns,
                  modals, navbars, and more.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Check out this guide to learn how to&nbsp;
                  <a
                    href="https://flowbite.com/docs/getting-started/introduction/"
                    className="text-cyan-600 hover:underline dark:text-cyan-500"
                  >
                    get started&nbsp;
                  </a>
                  and start developing websites even faster with components on
                  top of Tailwind CSS.
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>
                Is there a Figma file available?
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Flowbite is first conceptualized and designed using the Figma
                  software so everything you see in the library has a design
                  equivalent in our Figma file.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Check out the
                  <a
                    href="https://flowbite.com/figma/"
                    className="text-cyan-600 hover:underline dark:text-cyan-500"
                  >
                    Figma design system
                  </a>
                  based on the utility classes from Tailwind CSS and components
                  from Flowbite.
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>
                What are the differences between Flowbite and Tailwind UI?
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  The main difference is that the core components from Flowbite
                  are open source under the MIT license, whereas Tailwind UI is
                  a paid product. Another difference is that Flowbite relies on
                  smaller and standalone components, whereas Tailwind UI offers
                  sections of pages.
                </p>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  However, we actually recommend using both Flowbite, Flowbite
                  Pro, and even Tailwind UI as there is no technical reason
                  stopping you from using the best of two worlds.
                </p>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Learn more about these technologies:
                </p>
                <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
                  <li>
                    <a
                      href="https://flowbite.com/pro/"
                      className="text-cyan-600 hover:underline dark:text-cyan-500"
                    >
                      Flowbite Pro
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://tailwindui.com/"
                      rel="nofollow"
                      className="text-cyan-600 hover:underline dark:text-cyan-500"
                    >
                      Tailwind UI
                    </a>
                  </li>
                </ul>
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
        </div>
      </div>
      <div className="container  mx-auto flex flex-wrap ">
        <div>
          {/* <Course_Details_Timeline /> */}
          <div className="lg:px-20 md:px-20 px-4 py-10">
            <ol class="relative border-s border-gray-900 dark:border-gray-700">
              <li class="mb-10 ms-6">
                <span class="absolute flex items-center justify-center w-6 h-6 brown-bg rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <svg
                    class="w-2.5 h-2.5 text-white dark:text-blue-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </span>
                <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                  Flowbite Application UI v2.0.0{" "}
                  <span class="brown-bg text-white text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3">
                    We Provide Best Roadmap
                  </span>
                </h3>
                {/* <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Released on January 13th, 2022
          </time> */}
                <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                  Get access to over 20+ pages including a dashboard layout,
                  charts,
                  <br />
                  kanban board, calendar, and pre-order E-commerce & Marketing
                  pages.
                </p>
                <a
                  href="#"
                  class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                >
                  <svg
                    class="w-3.5 h-3.5 me-2.5 text-brown"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
                    <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                  </svg>{" "}
                  Download Course Content
                </a>
              </li>
              <li class="mb-10 ms-6">
                <span class="absolute flex items-center justify-center w-6 h-6 brown-bg rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <svg
                    class="w-2.5 h-2.5 text-white dark:text-blue-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </span>
                <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                  Flowbite Figma v1.3.0
                </h3>
                {/* <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Released on December 7th, 2021
          </time> */}
                <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                  All of the pages and components are first designed in Figma
                  and we <br />
                  keep a parity between the two versions even as we update the
                  project.
                </p>
              </li>
              <li class="ms-6">
                <span class="absolute flex items-center justify-center w-6 h-6 brown-bg rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <svg
                    class="w-2.5 h-2.5 text-white dark:text-blue-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                    ``
                  </svg>
                </span>
                <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                  Flowbite Library v1.2.2
                </h3>
                {/* <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Released on December 2nd, 2021
          </time> */}
                <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                  Get started with dozens of web components and interactive
                  elements <br />
                  built on top of Tailwind CSS.
                </p>
              </li>
            </ol>
          </div>
        </div>

        <div className="lg:block  hidden">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 lg:ml-[38%] md:ml-[25%] ml-[8%]">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src="https://dummyimage.com/720x600"
            />
          </div>
        </div>
      </div>

      <div>
        <Contact />
      </div>
    </div>
  );
};

export default PLC_Networking;
