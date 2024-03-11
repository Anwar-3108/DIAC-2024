import React from "react";
import Contact_Button from "../../components/Contact_Button";

const CourseDuration = ({ trainingName }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-0 justify-center items-center text-center overflow-x-auto">
      <div className="flex flex-col justify-center items-center  mx-2 my-4 p-4 bg-white  ">
        <i className="fa-solid fa-laptop-code text-4xl  text-blue-600"></i>
        <h1 className="text-xl font-medium text-gray-900 mt-4">Batch Starting</h1>
        <p className="text-gray-500">08 April, 2024</p>
      </div>
      <div className="flex flex-col justify-center items-center  mx-2 my-4 p-4 bg-white ">
        <i className="fa-solid fa-calendar-days text-4xl  text-yellow-400"></i>
        <h1 className="text-xl font-medium text-gray-900 mt-4">Duration</h1>
        <p className="text-gray-500">30 weeks</p>
        <p className="text-gray-500">(7 months)</p>
      </div>
      <div className="flex flex-col justify-center items-center  mx-2 my-4 p-4 bg-white ">
        <i className="fa-solid fa-clock text-4xl  text-green-500"></i>
        <h1 className="text-xl font-medium text-gray-900 mt-4">Timings</h1>
        <p className="text-gray-500">10 am to 6 pm</p>
        <p className="text-gray-500">Monday to Saturday</p>
      </div>
      <div className="flex flex-col justify-center items-center  mx-2 my-4 p-4 bg-white ">
        <i className="fa-solid fa-book-open text-4xl  text-purple-500"></i>
        <h1 className="text-xl font-medium text-gray-900 mt-4">Eligibility</h1>
        <div className="mt-4">
          <Contact_Button
            buttonText={"Check Eligibility"}
            trainingName={trainingName}
          />
        </div>
      </div>
    </div>
  );
};

export default CourseDuration;
