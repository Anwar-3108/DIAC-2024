const contentBeforeProducts =
  "Corporate Trainings – Process Automation Products";
const contentAfterProducts =
  " Liquid Analysers, Gas Analysers, Sampling System and System Conditioning";

export const links = [
  // {
  //   name: "About Us",
  //   submenu: true,
  //   sublinks: [
  //     {
  //       Head: "Know More About Us",
  //       sublink: [
  //         { name: "WHO WE ARE ?", link: "/about-us" },
  //         { name: "WHOM DO WE SERVE ?", link: "/whom-do-we-serve" },
  //         { name: "WHY CHOOSE AZTEC?", link: "/why-choose-aztec" },
  //         { name: "OUR VISION", link: "/our-vision" },
  //         { name: "OUR MISSION", link: "/our-mission" },
  //         { name: "OUR CORE VALUES", link: "/our-core-values" },
  //         { name: "OUR ETHOS", link: "/our-ehos" },
  //       ],
  //     },
  //   ],
  // },

  {
    name: "Products",
    submenu: true,
    sublinks: [
      {
        Head: "Explore Our Product Categories",
        sublink: [
          { name: "Pressure Measurment", link: "/products/pressure" },
          { name: "Temperature Measurment", link: "/products/temperature" },
          { name: "Flow Measurment", link: "/products/flow" },
          { name: "Level Measurment", link: "/products/level" },
          { name: "Density Measurment", link: "/products/density" },
          { name: "Concentration Measurment", link: "/products/concentration" },
          {
            name: "Manifolds, Fittings and Flow Elements",
            link: "/products/concentration",
          },
          { name: "IIoT and Digitisation", link: "/products/concentration" },
          { name: "Liquid Analysis", link: "/products/liquid" },
          { name: "Gas Analysis", link: "/products/gas" },
          { name: "Sample Cooler", link: "/products/gas" },
          { name: "Cation Exchange Column", link: "/products/gas" },
          { name: "High Pressure Sample Filter", link: "/products/gas" },
          { name: "Gate and Piston Valve", link: "/products/gas" },
        ],
      },
    ],
  },

  {
    name: "Solutions",
    submenu: true,
    sublinks: [
      {
        Head: "We Have Simple Solutions For You",
        sublink: [
          {
            name: "Liquid Sample Handling System",
            link: "/solutions/sample-handeling-system",
          },
          {
            name: "Gas Sample Conditioning System",
            link: "/solutions/sample-conditioning-system",
          },
          {
            name: "Level & Temperature  Controls System",
            link: "/solutions/level-and-temperature-controls-system",
          },
          { name: "Closed Loop Sampling System", link: "/products/gas" },
          { name: "Auto Blowdown System", link: "/products/gas" },
          { name: "Condensate Recovery System", link: "/products/gas" },
          { name: "Pressure Reducing Station", link: "/products/gas" }
        ],
      },
    ],
  },

  {
    name: "Services",
    submenu: true,
    sublinks: [
      {
        Head: "Service We Offer",
        sublink: [
          {
            name: "Installation and System Set-up",
            link: "/services/installation-and-system-setup",
          },
          {
            name: "On-site Application Demo",
            link: "/services/on-site-application-demo",
          },
          {
            name: "On-site Flow Verification",
            link: "/services/on-site-flow-verification",
          },
          { name: "Flow Audits", link: "/services/flow-audits" },
          { name: "Energy Audits", link: "/services/energy-audits" },
          {
            name: "Instrumentation Application Engg. Consultancy",
            link: "/services/instrumentation-application-engineering-consultancy",
          },
          {
            name: (
              <>
                {contentBeforeProducts} <br /> {contentAfterProducts}
              </>
            ),
            link: "/services/corporate-training",
          },
        ],
      },
    ],
  },
];
