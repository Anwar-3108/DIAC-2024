import React from "react";
import ReactCircleModal from "react-circle-modal";
import ContactPopup from "./ContactPopup";

const KnowMoreButton = ({NameOfProduct}) => {
  return (
    <div className="w-full">
      <ReactCircleModal
        backgroundColor="white"
        toogleComponent={(onClick) => (
          <button
            className=" font-bold h-10 lg:w-1/2 w-full justify-center text-center items-center rounded-3xl flex  text-white bg-red-700 border-0 mt-7 px-6 focus:outline-none   hover:bg-gray-800 duration-500 "
            onClick={onClick}
          >
            {" "}
            <i className="text-xl mr-2 fa-regular fa-envelope"></i>Send Enquiry
          </button>
        )}
        // Optional fields and their default values
        offsetX={0}
        offsetY={0}
      >
        {(onClick) => (
          <div className="bg-white">
            {/* <p>Content inside of modal</p> */}
            {/* <button onClick={onClick}>Click here to close modal</button> */}
            {/* <ContactPopup/> */}

            {/*  */}

            <div className="flex justify-center align-middle">
              <div className="lg:-mt-[3%] mt-0  lg:w-auto md:w-auto w-full">
                <div
                  id="authentication-modal"
                  tabindex="-1"
                  aria-hidden="true"
                  className="   z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
                >
                  <div className="relative p-4 w-full max-w-md max-h-full">
                    {/* <!-- Modal content --> */}
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-950">
                      {/* <!-- Modal header --> */}
                      <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h2 className="text-white mr-3 mt-3 title-font sm:text-2xl text-1xl mb-4 font-medium">
                          <span className="text-brown">GET IN TOUCH </span>
                          WITH US
                        </h2>
                        <button
                          onClick={onClick}
                          type="button"
                          className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                          data-modal-hide="authentication-modal"
                        >
                          <svg
                            className="w-3 h-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 14"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                            />
                          </svg>
                          <span className="sr-only">Close modal</span>
                        </button>
                      </div>
                      {/* <!-- Modal body --> */}
                      <div className="p-4 md:p-5">
                        <form className="space-y-4" action="#">
                          <div>
                            <label
                              for="email"
                              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                              Your Name
                            </label>
                            <input
                              type="text"
                              name="name"
                              id="name"
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                              placeholder="Your Full Name"
                              required
                            />
                          </div>
                          <div>
                            <label
                              for="phone"
                              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                              Your Phone Number
                            </label>
                            <input
                              type="number"
                              name="numper"
                              id="email"
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                              placeholder="Your Official Phone Number"
                              // style={{ MozAppearance: 'textfield', appearance:'none' }}
                              required
                            />
                          </div>
                          <div>
                            <label
                              for="email"
                              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                              Your email
                            </label>
                            <input
                              type="email"
                              name="email"
                              id="email"
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                              placeholder="name@company.com"
                              required
                            />
                          </div>
                          <div>
                            <label
                              for="company"
                              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                              Your Company Name
                            </label>
                            <input
                              type="text"
                              name="company"
                              id="compnay"
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                              placeholder="Your Company Name"
                              required
                            />
                          </div>
                          <div>
                            <label
                              for="company"
                              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                              Designation
                            </label>
                            <input
                              type="text"
                              name="designation"
                              id="designation"
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                              placeholder="Your Official Designation"
                              required
                            />
                          </div>
                          <div>
                            <label
                              for="message"
                              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                              Your Message
                            </label>
                            <textarea
                              required
                              placeholder="Your Message..."
                              id="message"
                              value={`I want to Know More About ${NameOfProduct}`}
                              name="message"
                              className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            ></textarea>
                          </div>
                          {/* <div>
                <label
                  for="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required
                />
              </div> */}
                          {/* <div className="flex justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                      required
                    />
                  </div>
                  <label
                    for="remember"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Remember me
                  </label>
                </div>
                <a
                  href="#"
                  className="text-sm text-blue-700 hover:underline dark:text-blue-500"
                >
                  Lost Password?
                </a>
              </div> */}
                          <button
                            type="submit"
                            className="w-full text-white font-bold bg-brown hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-red-300  rounded-3xl text-sm px-5 py-2.5 text-center dark:bg-brown dark:hover:bg-red-700 dark:focus:ring-white"
                          >
                            SUBMIT
                          </button>
                          {/* <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                Not registered?{" "}
                <a
                  href="#"
                  className="text-blue-700 hover:underline dark:text-blue-500"
                >
                  Create account
                </a>
              </div> */}
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*  */}
          </div>
        )}
      </ReactCircleModal>
    </div>
  );
};

export default KnowMoreButton;
