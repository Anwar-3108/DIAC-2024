import { useState } from "react";
// import { API } from "../../API";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Contact = () => {
  const notify = () => toast("Message Sent Successfully!");

  const [data, setData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const { name, email, number, message } = data;

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://v1.nocodeapi.com/diac/google_sheets/ADHDUXLWjmYmIVAN?tabId=Page01",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify([
            [
              name,
              email,
              number,
              message,
              new Date().toLocaleString(),
            ],
          ]),
        }
      );
      await response.json();
      setData({
        ...data,
        name: "",
        email: "",
        number: "",
        message: "",
      });
      notify();
    } catch (error) {
      console.error("Error:", error);
    }
  };


{/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d448451.46444387414!2d77.314468!3d28.583961!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ceff3918de479%3A0x6cef78b480045724!2sDIAC-%20PLC%20SCADA%20AUTOMATION%20TRAINING%20INSTITUTE%20in%20NOIDA%2C%20CORPORATE%20TRAINING%2C%20IIOT%20TRAINING!5e0!3m2!1sen!2sus!4v1709972087024!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}















  return (
    <>
      <section id="contact" className="text-gray-600 body-font relative">
        <div className="container px-5 pt-[2%] pb-8 mx-auto flex sm:flex-nowrap flex-wrap">

          <div className="lg:w-2/3 md:w-full bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              className="w-full h-full absolute inset-0"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d448451.46444387414!2d77.314468!3d28.583961!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ceff3918de479%3A0x6cef78b480045724!2sDIAC-%20PLC%20SCADA%20AUTOMATION%20TRAINING%20INSTITUTE%20in%20NOIDA%2C%20CORPORATE%20TRAINING%2C%20IIOT%20TRAINING!5e0!3m2!1sen!2sus!4v1709972087024!5m2!1sen!2sus"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            {/* from here */}
            <div className="mt-8 bg-white relative flex lg:-ml-7 -ml-7   flex-wrap py-6 rounded shadow-md w-full">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-lg">
                  <span className="text-brown">
                    <i className="fa-solid fa-phone"></i>
                  </span>{" "}
                  PHONE
                </h2>
                <p className="leading-relaxed text-sm">
                  <a href="tel:+919319018881">(+91) 97112 87737</a> <br />
                  <a href="tel:+919319018882">(+91) 99534 89988</a>
                </p>
              </div>
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-lg">
                  <span className="text-brown">
                    <i className="fa-solid fa-envelope"></i>
                  </span>{" "}
                  EMAIL
                </h2>
                <a
                  href="mailto:info@aztec-automation.com"
                  className="leading-relaxed text-sm"
                >
                  training@diac.co.in
                </a>{" "}
                <br />
                <a
                  href="mailto:sales@aztec-automation.com"
                  className="leading-relaxed text-sm"
                >
                  sales@aztec-automation.com
                </a>
              </div>
              <div className=" lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-lg">
                  <span className="text-brown">
                    <i className="fa-solid fa-location-dot"></i>
                  </span>{" "}
                  ADDRESS
                </h2>
                <p className="mt-1 text-sm">
                 C-65, Second Floor, Sector
                  2,
                  <br />
                  Noida - 201301 INDIA
                </p>
              </div>
            </div>

            {/* to here */}
          </div>

          <div className="   lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 className="text-black title-font sm:text-4xl text-3xl mb-4 font-medium">
              <span className="text-brown">Get in touch </span>with us
            </h2>
            <p className="leading-relaxed mb-5 text-gray-950 font-semibold">
              Feel free to get in touch with us to share your
              <br className="lg:block hidden" /> process automation
              requirements.
            </p>
            <form className="form+" onSubmit={handleSubmit}>
              <div className="relative mb-4">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-gray-600"
                >
                  Name<span className="text-brown text-xl ">*</span>
                </label>
                <input
                  required
                  placeholder="Your Full Name"
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={handleChange}
                  className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="number"
                  className="leading-7 text-sm text-gray-600"
                >
                  Phone Number<span className="text-brown text-xl ">*</span>
                </label>
                <input
                  required
                  placeholder="Your Phone Number"
                  type="number"
                  id="number"
                  name="number"
                  value={number}
                  onChange={handleChange}
                  className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-600"
                >
                  Email<span className="text-brown text-xl ">*</span>
                </label>
                <input
                  required
                  placeholder="Your Work Email"
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
          
          
              <div className="relative mb-4">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-gray-600"
                >
                  Message<span className="text-brown text-xl ">*</span>
                </label>
                <textarea
                  required
                  placeholder="Your Message..."
                  id="message"
                  name="message"
                  value={message}
                  onChange={handleChange}
                  className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  data-gramm="false"
                ></textarea>
                <label>
                  {" "}
                  <span className="text-brown text-xl ">*</span> Mandatory
                </label>
              </div>

              <button
                type="submit"
                className="text-white font-bold w-full brown-bg border-0 py-2 px-6 focus:outline-none hover:bg-red-500 rounded-3xl text-lg"
              >
                SUBMIT
              </button>
              <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                e
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
              />
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
