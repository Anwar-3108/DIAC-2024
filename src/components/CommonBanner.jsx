
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import Breadcrumbs from "./Breadcrumbs";

const CommonBanner = ({ text, imageUrl }) => {
  const location = useLocation();

  const generateBreadcrumbs = () => {
    const pathnames = location.pathname.split("/").filter((x) => x);

    const breadcrumbs = pathnames.map((_, index) => {
      const url = `/${pathnames.slice(0, index + 1).join("/")}`;
      return { label: pathnames[index], link: url };
    });

    return [
      { label: <i className="fa-solid fa-house"></i>, link: "/" },
      ...breadcrumbs,
    ];
  };

  const breadcrumbs = generateBreadcrumbs();

  return (
    <div className="relative hidden lg:block bg-gray-900 text-white">
      {/* <img
        src={imageUrl}
        alt="Banner"
        className="w-full h-auto max-h-64 object-cover filter blur-5"
      /> */}
      {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h2 className="text-4xl lg:text-6xl font-bold leading-tight mb-4">
          {text}
        </h2>
      </div> */}
      {/* <div className="absolute mt-8 top-full left-1/2 transform -translate-x-1/2 text-center w-full">
      </div> */}
        <Breadcrumbs breadcrumbs={breadcrumbs} />
    </div>
  );
};

CommonBanner.propTypes = {
  text: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default CommonBanner;
