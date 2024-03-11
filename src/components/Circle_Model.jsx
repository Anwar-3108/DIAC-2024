import React from "react";
import ReactCircleModal from "react-circle-modal";
import ContactPopup from "./ContactPopup";

const Circle_Model = () => {
  return (
    <div
      className="bg-white text-brown sm:px-2 md:px-2 px-6 py-3 md:py-1   rounded-full"
      style={{
        boxShadow:
          "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
      }}
    >
      <ReactCircleModal
        backgroundColor="white "
        toogleComponent={(onClick) => (
          <button onClick={onClick} className="font-lg text-lg">
            REACH US
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
              <div className="lg:-mt-[2%] mt-0  lg:w-auto md:w-auto w-full">
                <div
                  id="authentication-modal"
                  tabIndex="-1"
                  aria-hidden="true"
                  className="   z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
                >
                  <div className="relative p-4 w-full max-w-md max-h-full">
                    {/* <!-- Modal content --> */}
                    <div className="relative shadow-xl  dark:bg-gray-950 rounded-3xl"  style={{
      boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'
    }}>
                      {/* <!-- Modal header --> */}
                      <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 brown-bg" style={{borderTopLeftRadius:"25px", borderTopRightRadius:"25px"}}>
                        <h2 className="text-white mr-3 mt-3 title-font sm:text-2xl text-1xl mb-4 font-medium">
                          <span className="text-white">Get in touch </span>with
                          us
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
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
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
                              for="message"
                              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                              Your Message
                            </label>
                            <textarea
                              required
                              placeholder="Your Message..."
                              id="message"
                              name="message"
                              className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            ></textarea>
                          </div>
              
                          <button
                            type="submit"
                            className="w-full text-white font-bold brown-bg hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-red-300  rounded-3xl text-sm px-5 py-2.5 text-center dark:bg-brown dark:hover:bg-red-700 dark:focus:ring-white"
                          >
                            SUBMIT
                          </button>
                   
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

export default Circle_Model;
