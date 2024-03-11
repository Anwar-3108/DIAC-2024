import { Button, Card, Carousel } from "flowbite-react";
import React, { useEffect } from "react";
import { HiOutlineArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

// Course component
const CourseCard = ({ id, title, description, imageUrl, link }) => (
  <Card
    className="max-w-xs bg-white rounded-xl overflow-hidden shadow-lg mx-auto transform transition duration-300 hover:-translate-y-1 hover:scale-105 mt-[1%]"
    imgAlt={title}
    imgSrc={imageUrl}
  >
    <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
      {title}
    </h5>
    {/* <p className="font-normal text-gray-700 dark:text-gray-400">
      {description}
    </p> */}
    <Link to={link}>
      <Button className="text-white brown-bg rounded-3xl outline-none">
        Know More <HiOutlineArrowRight className="ml-2 h-5 w-5" />
      </Button>
    </Link>
  </Card>
);

// Courses component
const Courses = () => {
  useEffect(() => {
    document.title = "DIAC | Courses";
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const courses = [
    {
      id: 1,
      title: "Industrial Automation",
      description: "Description for Course 1",
      imageUrl:
        "https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80",
      link: "/courses/industrial-automation-training",
    },
    {
      id: 2,
      title: "Drives & Motors",
      description: "Description for Course 1",
      imageUrl:
        "https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80",
      link: "/courses/drives-and-motors",
    },
    {
      id: 3,
      title: "PLC Networking",
      description: "Description for Course 1",
      imageUrl:
        "https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80",
      link: "/courses/plc-networking",
    },
    {
      id: 4,
      title: "Simotion Training",
      description: "Description for Course 1",
      imageUrl:
        "https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80",
      link: "/courses/simotion-training",
    },
    {
      id: 5,
      title: "Industrial Training",
      description: "Description for Course 1",
      imageUrl:
        "https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80",
      link: "/courses/industrial-training",
    },
    {
      id: 6,
      title: "Process Automation",
      description: "Description for Course 1",
      imageUrl:
        "https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80",
      link: "/courses/process-instrumentation",
    },
    {
      id: 7,
      title: "Summer / Winter Training",
      description: "Description for Course 1",
      imageUrl:
        "https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80",
      link: "/courses/summer-winter-training",
    },
    {
      id: 8,
      title: "PLC Training",
      description: "Description for Course 1",
      imageUrl:
        "https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80",
      link: "/courses/plc-training",
    },
    {
      id: 9,
      title: "Panel Designing & AutoCAD",
      description: "Description for Course 1",
      imageUrl:
        "https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80",
      link: "/courses/panel-designing-and-autocad",
    },
    {
      id: 10,
      title: "Servo Motor",
      description: "Description for Course 1",
      imageUrl:
        "https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80",
      link: "/courses/servo-motor",
    },
    {
      id: 11,
      title: "SCADA & HMI",
      description: "Description for Course 1",
      imageUrl:
        "https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80",
      link: "/courses/scad-and-hmi",
    },
    {
      id: 12,
      title: "Robotics Training",
      description: "Description for Course 1",
      imageUrl:
        "https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80",
      link: "/courses/robotics-training",
    },
    {
      id: 13,
      title: "DCS Training",
      description: "Description for Course 1",
      imageUrl:
        "https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80",
      link: "/courses/dcs-training ",
    },
    // Add more courses as needed
  ];

  return (
    <>
      <div className="md:h-56 h-64 lg:h-[300px] ">
        <Carousel leftControl={true} rightControl={true} indicators={false}>
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
            className="object-cover   object-center "
            alt="..."
          />
        </Carousel>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 py-10 px-10">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            id={course.id}
            title={course.title}
            description={course.description}
            imageUrl={course.imageUrl}
            link={course.link}
          />
        ))}
      </div>
    </>
  );
};

export default Courses;
