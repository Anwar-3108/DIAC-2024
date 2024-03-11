import coreValuesImg from "../assets/images/pages/Home/core-values-0.2.jpg";

const OurCoreValuesHome = () => {
  return (
    <div>
      <section className="text-gray-950 body-font lg:block  sm:block md:hidden">
        <div className="container mx-auto flex flex-col-reverse lg:flex-row  lg:px-24 px-5 py-10">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0   lg:order-first order-last justify-center items-center ">
            <img
              className="object-cover object-center rounded w-full ml-[10%]"
              alt="Our Core Values"
              // src={coreValuesImg}
              src="https://dummyimage.com/720x600"
            />
          </div>
          <div className="lg:w-1/2 flex flex-col justify-center p-4 lg:order-last order-first lg:ml-20 md:ml-20 ">
            <h1 className="title-font sm:text-4xl md:text-3xl text-3xl mb-6 font-medium text-gray-950">
              <h3
                className="h-4 bg-gray-200 rounded-full dark:bg-gray-700"
                style={{ width: "40%" }}
              ></h3>
            </h1>
            <p className="text-black font-semibold leading-relaxed mb-4">
              <ul className="mt-5 space-y-3">
                <li className="w-full h-4 bg-gray-200 rounded-full dark:bg-gray-700"></li>
                <li className="w-full h-4 bg-gray-200 rounded-full dark:bg-gray-700"></li>
                <li className="w-full h-4 bg-gray-200 rounded-full dark:bg-gray-700"></li>
                <li className="w-full h-4 bg-gray-200 rounded-full dark:bg-gray-700"></li>
              </ul>{" "}
            </p>
            <p className="text-black font-semibold leading-relaxed mb-4">
              <ul className="mt-5 space-y-3">
                <li className="w-full h-4 bg-gray-200 rounded-full dark:bg-gray-700"></li>
                <li className="w-full h-4 bg-gray-200 rounded-full dark:bg-gray-700"></li>
                <li className="w-full h-4 bg-gray-200 rounded-full dark:bg-gray-700"></li>
                <li className="w-full h-4 bg-gray-200 rounded-full dark:bg-gray-700"></li>
              </ul>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurCoreValuesHome;
