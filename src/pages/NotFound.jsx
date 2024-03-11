import { Link } from "react-router-dom";
import "../styles/NotFound.css";
import { useEffect } from "react";

const NotFound = () => {
  useEffect(() => {
    document.title = `AZtec | Not Found`;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <section className="page_404">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 ">
            <div className="col-sm-10 col-sm-offset-1 text-center">
              <div className="four_zero_four_bg">
                <h1 className="text-center">404</h1>
              </div>

              <div className="contant_box_404">
                <h3 className="h2">Look like you&apos;re lost</h3>

                <p>The page you are looking for is not available!</p>

                <Link
                  to="/"
                  className="text-white font-bold  bg-red-600 border-0 py-1 px-4 focus:outline-none hover:bg-red-500 rounded-2xl text-lg  link_404"
                >
                  Go to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
