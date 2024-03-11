import React, { useEffect, useState } from "react";

const Why_Choose_Corporate_Training = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    document.title = `AZtec | Services | Installation and System Setup`;
    const img = new Image();
    img.src =
      "https://www.sentec.co.uk/images/content/4_2_835x365.jpg?14:46:47&_e=.jpg";
    img.onload = () => {
      setImageLoaded(true);
    };
  }, []);
  return (
    <section className="text-gray-100 body-font">
      <div className="container px-5 py-12 mx-auto flex flex-wrap items-center justify-center">
        <div className="lg:w-1/2 w-full lg:order-last order-first">
          {imageLoaded ? (
            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 lg:ml-[20%] md:ml-[25%] ml-[8%]">
              <img
                class="object-cover object-center rounded"
                alt="hero"
                //   src="https://dummyimage.com/720x600"
                src="https://masai-website-images.s3.ap-south-1.amazonaws.com/web_chart_6b18afa722.png"
              />
            </div>
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              Loading...
            </div>
          )}
        </div>
        <div className="lg:w-1/2 w-full lg:pl-10 lg:mt-0 mt-10">
          <div className="sm:p-8 p-4">
            <h1 className="font-semibold text-lg text-black">
              Why you need training?
            </h1>
            <h1 className="title-font sm:text-4xl   mb-4  text-brown   text-3xl font-bold mt-4">
              The closest thing to magic in the world.
            </h1>
            <div className="mb-8 leading-relaxed text-black ">
              <div>
                <div className="flex gap-2">
                  <span>
                    <i className="fa-solid fa-circle-check text-blue-500"></i>
                  </span>{" "}
                  <h2>
                    {" "}
                    <span className="font-semibold">
                      Booming Job Market:
                    </span>{" "}
                    some text about booming Market{" "}
                  </h2>
                </div>
                <div className="flex gap-2">
                  <span>
                    <i className="fa-solid fa-circle-check text-blue-500"></i>
                  </span>{" "}
                  <h2>
                    {" "}
                    <span className="font-semibold">
                      Rapid Salary Growth:
                    </span>{" "}
                    some text about salary Growth{" "}
                  </h2>
                </div>
                <div className="flex gap-2">
                  <span>
                    <i className="fa-solid fa-circle-check text-blue-500"></i>
                  </span>{" "}
                  <h2>
                    <span className="font-semibold">
                      {" "}
                      High Entry-Level Pay:
                    </span>{" "}
                    some text about high level pay{" "}
                  </h2>
                </div>
                <div className="flex gap-2">
                  <span>
                    <i className="fa-solid fa-circle-check text-blue-500"></i>
                  </span>{" "}
                  <h2>
                    <span className="font-semibold">High Impact: </span> some
                    text about high impact{" "}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why_Choose_Corporate_Training;
