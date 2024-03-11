import "../styles/OurClients.css";
import ntpcImage from "../assets/images/clientsaz/ntpc.png";
import ntpcSailImage from "../assets/images/clientsaz/ntpc-sail-power.jpeg";
import npcil from "../assets/images/clientsaz/npcil.jpeg";
import reliencePower from "../assets/images/clientsaz/relience-power.png";
import jindalPower from "../assets/images/clientsaz/jindal-power.jpeg";
import dbPower from "../assets/images/clientsaz/db-power.jpeg";
import indianOil from "../assets/images/clientsaz/indian-oil.png";
import gail from "../assets/images/clientsaz/gail.png";
import vedanta from "../assets/images/clientsaz/vedanta.png";
import hbl from "../assets/images/clientsaz/hbl.jpeg";
import tataSteel from "../assets/images/clientsaz/tata-steel.jpg";
import nmdc from "../assets/images/clientsaz/nmdc.jpeg";
import adityaBirla from "../assets/images/clientsaz/aditya-birla.jpeg";
import toshiba from "../assets/images/clientsaz/toshiba.jpeg";
import bimalWater from "../assets/images/clientsaz/bimal-water.jpeg";
import yara from "../assets/images/clientsaz/Yara.svg";
import jm from "../assets/images/clientsaz/jm.png";
import ilfs from "../assets/images/clientsaz/ilfs.png";
import bira from "../assets/images/clientsaz/bira.png";
import haryanaLiquor from "../assets/images/clientsaz/haryana-liquor.jpeg";
import century from "../assets/images/clientsaz/century.jpeg";
import goldPlus from "../assets/images/clientsaz/gold-plus.jpeg";
// import  goldPlus from "../assets/images/clientsaz/ntpc.png";

const OurClients = () => {
  const clients = [
    // List of client image paths
    ntpcImage,
    ntpcSailImage,
    npcil,
    reliencePower,
    jindalPower,
    dbPower,
    indianOil,
    gail,
    vedanta,
    hbl,
    tataSteel,
    nmdc,
    adityaBirla,
    toshiba,
    bimalWater,
    yara,
    jm,
    ilfs,
    bira,
    haryanaLiquor,
    century,
    goldPlus,
    ntpcImage,
    ntpcSailImage,
    reliencePower,
    jindalPower,
    dbPower,
    indianOil,
    gail,
    vedanta,
    hbl,
    tataSteel,
  ];

  return (
    <div className="mt-12 overflow-hidden z-[-50]" id="our-clients">
      <div className="sm:text-4xl text-3xl font-medium title-font text-black m-auto p-3 mb-1 rounded-lg flex justify-center">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-center mt-8 mb-4">
            Meet Our <span className="text-brown"> Hiring Partners</span>
          </h1>
        </div>
      </div>
      <div className="slider1  inline-flex flex-nowrap z-[-50]">
        <div className="flex animate-infinite-scroll   infinite-scroll hover:animate-paused">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-white  px-[4px] overflow-hidden mx-[8px] md:mx-[16px] w-[80px] h-[80px] md:w-[112px] md:h-[112px] rounded-[24px] flex items-center justify-center"
              style={{ boxShadow: "0px 0px 7px #540000" }}
            >
              <img
                loading="lazy"
                src={client}
                height={50}
                width={250}
                alt={`client-${index}`}
              />
            </div>
          ))}
        </div>
        <div className="flex animate-infinite-scroll">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-white px-[4px] overflow-hidden mx-[8px] md:mx-[16px] w-[80px] h-[80px] md:w-[112px] md:h-[112px] rounded-[24px] flex items-center justify-center"
              style={{ boxShadow: "0px 0px 7px #540000" }}
            >
              <img
                src={client}
                height={50}
                width={250}
                alt={`client-${index}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurClients;
