import whome_do_we_serve_img  from "../assets/images/pages/About/whome-do-we-serve-0.1.png";


const WhomeDoWeServe = () => {
  return (
    <div>
      <section className="text-gray-950 body-font lg:block sm:block md:hidden ">
        <div className="container mx-auto flex px-5 py-20 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              // src="https://dummyimage.com/720x600"
              src={whome_do_we_serve_img}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center ">
            <h1 className="title-font sm:text-4xl text-3xl mb-8 font-medium text-gray-950 -ml-10 sm:-ml-0">
              Whom do we  <span className="text-brown">serve ?</span>{" "}
            </h1>
            {/* <hr className="block bg-brown h-1 lg:w-28 rounded  w-24 -mt-3 mr-0 mb-7 lg:ml-1  sm:ml-2 border-none " /> */}

            <p className="mb-6 -mt-4 text-black font-semibold leading-relaxed">
              Presently, we offer Products, Solutions and our Services to the
              following industry segments -
            </p>

            <div className="flex   flex-wrap -mt-3 -mx-2">
              {/* List items */}
              <div id="1" className="p-2 -mt-2 sm:w-1/2 w-full">
                <div className="bg-gray-900 rounded flex py-2 px-4 h-full items-center">
                  <svg
                    fill="none"
                    stroke="red" // Change the stroke color to red
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>

                  <span className="title-font text-white font-medium">
                    Oil and Gas
                  </span>
                </div>
              </div>
              <div id="2" className="p-2 -mt-2 sm:w-1/2 w-full">
                <div className="bg-gray-900 rounded flex py-2 px-4 h-full items-center">
                  <svg
                    fill="none"
                    stroke="red" // Change the stroke color to red
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>

                  <span className="title-font text-white font-medium">
                    Power
                  </span>
                </div>
              </div>
              <div id="8" className="p-2 -mt-2 sm:w-1/2 w-full">
                <div className="bg-gray-900 rounded flex py-2 px-4 h-full items-center">
                  <svg
                    fill="none"
                    stroke="red" // Change the stroke color to red
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>

                  <span className="title-font text-white font-medium">
                    Chemical and Fertiliser
                  </span>
                </div>
              </div>
              <div id="7" className="p-2 -mt-2 sm:w-1/2 w-full">
                <div className="bg-gray-900 rounded flex py-2 px-4 h-full items-center">
                  <svg
                    fill="none"
                    stroke="red" // Change the stroke color to red
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>

                  <span className="title-font text-white font-medium">
                    Petrochemical
                  </span>
                </div>
              </div>

              <div id="5" className="p-2 -mt-2 sm:w-1/2 w-full">
                <div className="bg-gray-900 rounded flex py-2 px-4 h-full items-center">
                  <svg
                    fill="none"
                    stroke="red" // Change the stroke color to red
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  .
                  <span className="title-font text-white font-medium">
                    Life Sciences
                  </span>
                </div>
              </div>

              <div id="10" className="p-2 -mt-2 sm:w-1/2 w-full">
                <div className="bg-gray-900 rounded flex py-2 px-4 h-full items-center">
                  <svg
                    fill="none"
                    stroke="red" // Change the stroke color to red
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>

                  <span className="title-font text-white font-medium">
                    Food and Beverages
                  </span>
                </div>
              </div>

              <div id="6" className="p-2 -mt-2 sm:w-1/2 w-full">
                <div className="bg-gray-900 rounded flex py-2 px-4 h-full items-center">
                  <svg
                    fill="none"
                    stroke="red" // Change the stroke color to red
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>

                  <span className="title-font text-white font-medium">
                    Dairy
                  </span>
                </div>
              </div>

              <div id="9" className="p-2 -mt-2 sm:w-1/2 w-full">
                <div className="bg-gray-900 rounded flex py-2 px-4 h-full items-center">
                  <svg
                    fill="none"
                    stroke="red" // Change the stroke color to red
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>

                  <span className="title-font text-white font-medium">
                    Water and Waste Water
                  </span>
                </div>
              </div>

              <div id="4" className="p-2 -mt-2 sm:w-1/2 w-full">
                <div className="bg-gray-900 rounded flex py-2 px-4 h-full items-center">
                  <svg
                    fill="none"
                    stroke="red" // Change the stroke color to red
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    className="text-indigo-500 22w-6 h-6 flex-shrink-0 mr-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>

                  <span className="title-font text-white font-medium">
                    Metals and Minerals
                  </span>
                </div>
              </div>

              <div id="3" className="p-2 -mt-2 sm:w-1/2 w-full">
                <div className="bg-gray-900 rounded flex py-2 px-4 h-full items-center">
                  <svg
                    fill="none"
                    stroke="red" // Change the stroke color to red
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>

                  <span className="title-font text-white font-medium">
                    Cement
                  </span>
                </div>
              </div>

              <div id="3" className="p-2 -mt-2 sm:w-1/2 w-full">
                <div className="bg-gray-900 rounded flex py-2 px-4 h-full items-center">
                  <svg
                    fill="none"
                    stroke="red" // Change the stroke color to red
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>

                  <span className="title-font text-white font-medium">
                    Sugar
                  </span>
                </div>
              </div>

              <div id="3" className="p-2 -mt-2 sm:w-1/2 w-full">
                <div className="bg-gray-900 rounded flex py-2 px-4 h-full items-center">
                  <svg
                    fill="none"
                    stroke="red" // Change the stroke color to red
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>

                  <span className="title-font text-white font-medium">
                    Pulp and Paper
                  </span>
                </div>
              </div>

              <div id="3" className="p-2 -mt-2 sm:w-1/2 w-full">
                <div className="bg-gray-900 rounded flex py-2 px-4 h-full items-center">
                  <svg
                    fill="none"
                    stroke="red" // Change the stroke color to red
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>

                  <span className="title-font text-white font-medium">
                    Glass
                  </span>
                </div>
              </div>

              <div id="3" className="p-2 -mt-2 sm:w-1/2 w-full">
                <div className="bg-gray-900 rounded flex py-2 px-4 h-full items-center">
                  <svg
                    fill="none"
                    stroke="red" // Change the stroke color to red
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>

                  <span className="title-font text-white font-medium">
                    and more...
                  </span>
                </div>
              </div>

              {/* Repeat this block for other items */}
            </div>

            {/* <p className="mb-8 text-black font-semibold leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
              voluptate consequuntur tempora repudiandae, fugiat temporibus
              porro esse totam ipsum optio tempore? Unde beatae esse
              perferendis, tempora quaerat alias ratione eligendi odio adipisci
              dolorum dolor in! Rem consequatur corrupti eius laboriosam aperiam
              obcaecati, necessitatibus blanditiis minima corporis eligendi,
              repellendus deserunt itaque.
            </p> */}
            {/* <p className="mb-8 text-black font-semibold leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              praesentium aliquid harum, eveniet libero nam temporibus voluptas
              cum consequuntur ex dicta neque quam quidem possimus. Inventore
              soluta neque, voluptate quae voluptates ad quas recusandae,
              sapiente eaque repellendus et. Quaerat reiciendis a beatae harum
              dolor provident corporis doloribus aspernatur consequatur
              explicabo?.
            </p> */}
            {/* <div className="flex w-full md:justify-start justify-center items-end">
        <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4">
          <label htmlFor="hero-field" className="leading-7 text-sm text-gray-600">Placeholder</label>
          <input type="text" id="hero-field" name="hero-field" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
        </div>
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
      </div> */}
            {/* <p className="text-sm mt-2 text-gray-500 mb-8 w-full">Neutra shabby chic ramps, viral fixie.</p> */}
            {/* <div className="flex lg:flex-row md:flex-col">
              <button className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none"></button>
              <button className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center lg:ml-4 md:ml-0 ml-4 md:mt-4 mt-0 lg:mt-0 hover:bg-gray-200 focus:outline-none">
              </button>
            </div> */}
                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 305 305">
            <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z"></path>
            <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z"></path>
          </svg> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhomeDoWeServe;
