import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import CommonBanner from "../../components/CommonBanner";
import Contact from "../../components/Contact";

const vacancies = [
  {
    title: "Software Engineer",
    qualifications:
      "Bachelor’s degree in Computer Science or equivalent experience",
    location: "Remote",
    type: "Fresher",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    postedDate: new Date("2024-01-01"), // Replace with actual posted date
  },
  {
    title: "Marketing Manager",
    qualifications: "Bachelor’s degree in Marketing or related field",
    location: "New York, NY",
    type: "Experience",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    postedDate: new Date("2023-01-02"), // Replace with actual posted date
  },
  // Add more job vacancies as needed
];

const getPostedDaysText = (postedDate) => {
  const currentDate = new Date();
  const differenceInTime = currentDate.getTime() - postedDate.getTime();
  const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));

  if (differenceInDays === 1) {
    return "1 day ago";
  } else {
    return `${differenceInDays} days ago`;
  }
};

const truncateDescription = (description) => {
  if (description.length > 40) {
    return description.slice(0, 40) + "...";
  } else {
    return description;
  }
};

const Careers = () => {
  useEffect(() => {
    document.title = "AZtec | Home";
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div>
      <CommonBanner
        text="Careers"
        imageUrl="https://www.trendmicro.com/content/dam/trendmicro/global/en/ciso/thumbnails/23/cyber-threat-landscape-2023.png"
      />
      <section className="bg-gray-100 py-8 lg:py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <h2 className="text-4xl font-bold mb-4">Join Our Team</h2>
            <p className="text-lg">
              We are always keen to hire talented individuals with extraordinary
              proportions of domain expertise, problem solving ability and
              passion.{" "}
              <span className="text-black font-bold italic">Interested</span>{" "}
              <span className="text-red-600 text-lg italic ">
                {" "}
                <i className="fa-solid italic fa-question"></i>
              </span>
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vacancies.map((job, index) => (
              <div
                key={index}
                className="relative bg-gray-950 rounded-lg shadow-lg overflow-hidden transition duration-300 ease-in-out transform hover:scale-105 text-white"
              >
                <span className="absolute top-2 right-2 bg-blue-500 text-white py-1 px-2 rounded-full text-xs">
                  {getPostedDaysText(job.postedDate)}
                </span>
                <div className="p-4 md:p-6">
                  <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                  <p className="text-gray-300 mb-2">
                    {" "}
                    <span>
                      <i className="fa-solid fa-graduation-cap"></i>{" "}
                    </span>{" "}
                    {job.qualifications}
                  </p>
                  <p className="text-gray-300 mt-2">
                    {truncateDescription(job.description)}
                  </p>
                  <div className="flex gap-6">
                    <p className="text-gray-400">
                      {" "}
                      <span>
                        <i className="fa-solid fa-user-tie"></i>{" "}
                      </span>{" "}
                      {job.type}
                    </p>
                    <p className="text-gray-400">
                      {" "}
                      <span>
                        <i className="fa-solid fa-location-dot"></i>{" "}
                      </span>{" "}
                      {job.location}
                    </p>
                  </div>
                  <div className="">
                    <Link
                      to={`/careers/job/details/${index}`} // Replace with the appropriate route
                      className="mt-4 py-1 px-4 bg-white text-black rounded-full  transition duration-300 ease-in-out inline-block"
                    >
                      Apply Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Contact />
    </div>
  );
};

export default Careers;
