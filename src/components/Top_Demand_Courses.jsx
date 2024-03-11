import React from "react";
import "../styles/Common.css";
const coursesData = [
    {
      title: "Course 1",
      instructor: "Instructor 1",
      image: "https://dummyimage.com/80x80"
    },
    {
      title: "Course 2",
      instructor: "Instructor 2",
      image: "https://dummyimage.com/80x80"
    },
    {
      title: "Course 2",
      instructor: "Instructor 2",
      image: "https://dummyimage.com/80x80"
    },
    {
      title: "Course 2",
      instructor: "Instructor 2",
      image: "https://dummyimage.com/80x80"
    },
    {
      title: "Course 2",
      instructor: "Instructor 2",
      image: "https://dummyimage.com/80x80"
    },
    {
      title: "Course 2",
      instructor: "Instructor 2",
      image: "https://dummyimage.com/80x80"
    },
    {
      title: "Course 2",
      instructor: "Instructor 2",
      image: "https://dummyimage.com/80x80"
    },
    {
      title: "Course 2",
      instructor: "Instructor 2",
      image: "https://dummyimage.com/80x80"
    },
    {
      title: "Course 2",
      instructor: "Instructor 2",
      image: "https://dummyimage.com/80x80"
    },
    {
      title: "Course 2",
      instructor: "Instructor 2",
      image: "https://dummyimage.com/80x80"
    },
    {
      title: "Course 2",
      instructor: "Instructor 2",
      image: "https://dummyimage.com/80x80"
    },
    {
      title: "Course 2",
      instructor: "Instructor 2",
      image: "https://dummyimage.com/80x80"
    },
    // Add more course objects as needed
  ];
const Top_Demand_Courses = ({ courses }) => {
  return (
    <div>
      <section className="text-black  body-font">
        <div className="container lg:px-14 md:px-14 px-5 py-5 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-0 text-black">
              Our Top Demand Courses
            </h1>
            {/* <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              haven't heard of them.
            </p> */}
          </div>
          <div className="flex flex-wrap -m-2">
            {coursesData.map((course, index) => (
              <div className="p-2 lg:w-1/4 md:w-1/2 w-full" key={index} >
                <div className="h-full flex brown-bg items-center  border p-4 rounded-2xl" style={{
      boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'
    }}>
                  <img
                    alt="course"
                    className="w-16 h-16  object-cover object-center flex-shrink-0 rounded-full mr-4"
                    src={course.image}
                  />
                  <div className="flex-grow">
                    <h2 className="text-white title-font font-medium">
                      {course.title}
                    </h2>
                  
                    {/* Add more details as needed */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Top_Demand_Courses;
