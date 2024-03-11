import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Breadcrumbs = ({ breadcrumbs }) => (
  <nav className="text-lg lg:text-xl inline-block p-2 rounded">
    <ul className="flex flex-wrap justify-start gap-2 text-white">
      {breadcrumbs.map((item, index) => (
        <li key={index}>
          {index === breadcrumbs.length - 1 ? (
            <span>{item.label}</span>
          ) : (
            <span>
              <Link to={item.link}>{item.label}</Link>{" "}
              <i className="fa-solid fa-angle-right"></i>
            </span>
          )}
        </li>
      ))}
    </ul>
  </nav>
);

Breadcrumbs.propTypes = {
  breadcrumbs: PropTypes.array.isRequired,
};

export default Breadcrumbs;
