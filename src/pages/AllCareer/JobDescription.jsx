import React, { useEffect, useState } from "react";
import { useParams,  Navigate } from "react-router-dom";
import CommonBanner from "../../components/CommonBanner";
import Contact from "../../components/Contact";
import ErrorBoundary from "../ErrorBoundary"; // Import your ErrorPage component
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

const JobDescription = () => {
  useEffect(() => {
    document.title = "AZtec | Home";
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const { id } = useParams();
  const jobId = parseInt(id); // Convert id to integer
  const job = vacancies.find((vacancy, index) => index === jobId);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      resume: file,
    }));
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    setFormData((prevData) => ({
      ...prevData,
      resume: file,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted with data:", formData);
    // You can add additional logic to handle form submission, such as sending data to a server
  };

  // Redirect to error page if job id is invalid
  if (!job) {
    return <Navigate to="/404" />;
  }
  return (
    <div>
      {/* <CommonBanner
        text="Job Description"
        imageUrl="https://www.example.com/banner-image.jpg"
      /> */}
      <section className="py-8 lg:py-12">
        <div className="container mx-auto px-4 flex flex-wrap">
          {job && (
            <>
              {/* Job Details */}
              <div className="w-full lg:w-1/2 lg:pr-8 mb-8 lg:mb-0">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h2 className="text-3xl font-bold mb-4">{job.title}</h2>
                  <p className="text-lg text-gray-700 mb-4">
                    {job.description}
                  </p>
                  <div className="flex justify-between text-gray-600 mb-4">
                    <p>{job.qualifications}</p>
                    <p>{job.location}</p>
                  </div>
                  <p className="text-sm text-gray-500">
                    Posted: {job.postedDate.toDateString()}
                  </p>
                </div>
              </div>
              {/* Application Form */}
              <div className="w-full lg:w-1/2 lg:pl-8">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h2 className="text-2xl font-bold mb-4">Apply Now</h2>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-red-500 focus:border-red-500"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-red-500 focus:border-red-500"
                      />
                    </div>
                    <div
                      className="mb-4 border-dashed border-2 border-gray-300 rounded-lg p-6"
                      onDrop={handleDrop}
                      onDragOver={(e) => e.preventDefault()}
                    >
                      <label
                        htmlFor="resume"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Drag and drop your resume here or{" "}
                        <span className="text-blue-500 cursor-pointer">
                          browse
                        </span>{" "}
                        to upload
                      </label>
                      <input
                        type="file"
                        id="resume"
                        name="resume"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                      {formData.resume ? (
                        <p className="mt-2 text-gray-500">
                          {formData.resume.name}
                        </p>
                      ) : null}
                    </div>
                    <button
                      type="submit"
                      className="inline-flex items-center px-4 py-2 border border-transparent rounded-3xl shadow-sm text-sm font-medium text-white brown-bg  f"
                    >
                      Submit Application
                    </button>
                  </form>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
      <Contact />
    </div>
  );
};

export default JobDescription;
