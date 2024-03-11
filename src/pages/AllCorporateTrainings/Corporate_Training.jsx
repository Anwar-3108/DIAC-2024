import React from "react";
import Stats from "../../components/Stats";
import { Accordion, Carousel } from "flowbite-react";
import Contact_Button from "../../components/Contact_Button";
import Why_Choose_Corporate_Training from "./Why_Choose_Corporate_Training";
import Corporate_Placement_Assistance from "./Corporate_Placement_Assistance";
import Contact from "../../components/Contact";
import OurClients from "../../components/OurClients";

const Corporate_Training = ({}) => {
  return (
    <div className="">
      <div className="md:h-56 h-64 lg:h-[300px] ">
        <Carousel leftCont rol={true} rightControl={true} indicators={false}>
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
            className="object-cover   object-center "
            alt="..."
          />
        </Carousel>
      </div>

      <div>
        <Stats />
      </div>

      <div className="mt-[5%] lg:px-10 md:px-10 px-0">
        <h1 class="text-3xl font-bold text-center mt-8 mb-4">
          Skill Up with Practical Learning and Personal Guidance!
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-0 justify-center items-center text-center overflow-x-auto">
          <div className="flex flex-col justify-center items-center  mx-2 my-4 p-4 bg-white  ">
            <i className="fa-solid fa-ranking-star text-4xl text-yellow-400"></i>
            <h1 className="text-xl font-medium text-gray-900 mt-4">
              Industry Relevant Skills
            </h1>
            <p className="text-gray-500 lg:p-2 md:p-2 p-2">
              Level up your skills to industry standards and become a pro!
            </p>
          </div>
          <div className="flex flex-col justify-center items-center  mx-2 my-4 p-4 bg-white ">
            <i class="fa-solid fa-laptop-code text-4xl text-blue-600"></i>
            <h1 className="text-xl font-medium text-gray-900 mt-4">
              Practice-Based Learning
            </h1>
            <p className="text-gray-500 lg:p-2 md:p-2 p-2">
              Gain practical knowledge through our hands-on projects and
              assignments.
            </p>
            {/* <p className="text-gray-500">(7 months)</p> */}
          </div>
          <div className="flex flex-col justify-center items-center  mx-2 my-4 p-4 bg-white ">
            <i class="fa-solid fa-circle-check text-4xl text-green-500"></i>
            <h1 className="text-xl font-medium text-gray-900 mt-4">
              1:1 Mentor Support
            </h1>
            <p className="text-gray-500 lg:p-2 md:p-2 p-2">
              Master concepts through one-on-one mentoring with our experts.
            </p>
            {/* <p className="text-gray-500">Monday to Saturday</p> */}
          </div>
          <div className="flex flex-col justify-center items-center  mx-2 my-4 p-4 bg-white ">
            <i className="fa-solid fa-book-open text-4xl  text-purple-500"></i>
            <h1 className="text-xl font-medium text-gray-900 mt-4">
              Eligibility
            </h1>
            <div className="mt-4">
              <Contact_Button buttonText={"Check Eligibility"} />
            </div>
          </div>
        </div>
      </div>

      <div>
        <Why_Choose_Corporate_Training />
      </div>

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

      <div>
        <Corporate_Placement_Assistance />
      </div>
      <div>
        <OurClients />
      </div>

      <div>
        <Contact />
      </div>
    </div>
  );
};

export default Corporate_Training;
