import customerSatisfactionImg from "../assets/images/pages/Home/customer-satisfaction.png";

const CustomerSatisfaction = () => {
  return (
    <section className="text-gray-950 body-font lg:block sm:block md:hidden">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center px-5 py-10">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 justify-center items-center order-first">
          <img
            className="object-cover object-center rounded w-full"
            alt="Customer Satisfaction"
            // src={customerSatisfactionImg}
            src="https://dummyimage.com/720x600"
          />
        </div>

        <div className="lg:w-1/2 md:w-1/2 flex flex-col justify-center items-start p-4 md:ml-10">
          <h1 className="title-font sm:text-3xl text-2xl mb-2 font-medium text-gray-950 lg:whitespace-nowrap lg:p-16 p-0 text-left">
            Customer <span className="text-brown">Satisfaction</span>
          </h1>
          <p className="mb-2 text-black font-semibold leading-relaxed lg:p-16 p-0 lg:-mt-28 mt-6 text-left">
            Customer satisfaction is at the heart of everything we do. We
            prioritize{" "}
            <span className="text-brown font-bold italic">
              open communication
            </span>
            ,{" "}
            <span className="text-brown font-bold italic">transparency</span>,
            and a{" "}
            <span className="text-brown font-bold italic">
              collaborative approach
            </span>{" "}
            to ensure that our customers are not only satisfied but delighted
            with the outcome of the discussion. Our commitment to excellence in
            our business process has resulted in enduring business relationships
            and a{" "}
            <span className="text-brown font-bold italic">high rate</span> of{" "}
            <span className="text-brown font-bold italic">
              customer retention
            </span>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default CustomerSatisfaction;
