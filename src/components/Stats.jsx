import React from "react";
import "../styles/Common.css";
const Stats = () => {
  return (
    <div>
      <section className="text-black  body-font">
        <div className="container lg:px-14 md:px-14 px-5 py-0 mx-auto hidden  md:block lg:block">
          <div className="flex flex-col text-center w-full mb-20"></div>
          <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full ">
              <div
                className="border-2 border-brown  px-4 py-6 rounded-2xl"
                style={{
                  boxShadow:
                    "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
                }}
              >
                <i class="fa-solid fa-users text-4xl text-red-900"></i>
                <h2 className="title-font font-medium text-3xl text-black">
                  5000+
                </h2>
                <p className="leading-relaxed">Trained & Placed</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div
                className="border-2 border-brown px-4 py-6 rounded-2xl"
                style={{
                  boxShadow:
                    "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
                }}
              >
                <i class="fa-solid fa-handshake text-4xl text-brown"></i>
                <h2 className="title-font font-medium text-3xl text-black">
                  4000+
                </h2>
                <p className="leading-relaxed">Hiring Partners</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div
                className="border-2 border-brown px-4 py-6 rounded-2xl"
                style={{
                  boxShadow:
                    "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
                }}
              >
                <i class="fa-solid fa-bolt  text-4xl text-brown"></i>
                <h2 className="title-font font-medium text-3xl text-black">
                  ₹36LPA
                </h2>
                <p className="leading-relaxed">Highest CTC</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div
                className="border-2 border-brown px-4 py-6 rounded-2xl"
                style={{
                  boxShadow:
                    "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
                }}
              >
                <i class="fa-solid fa-medal text-4xl text-brown"></i>
                <h2 className="title-font font-medium text-3xl text-black">
                ₹6.9 LPA
                </h2>
                <p className="leading-relaxed">Average CTC</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};


export default Stats;
