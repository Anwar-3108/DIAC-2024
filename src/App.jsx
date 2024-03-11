import Footer from "./components/Footer";
import GoToTop from "./components/GoToTop";
import Navbar from "./components/Navbar/Navbar";
import WhatsAppButton from "./components/WhatsAppButton";
import AllRoutes from "./routes/AllRoutes";
import "./styles/App.css";
// import { ContextAPI } from "./context/ContextAPI";

const App = () => {
  return (
    <>
      {/* // <ContextAPI> */}
      <Navbar />
      <div className="">
        <AllRoutes />
      </div>
      <Footer />
      <GoToTop />
      <WhatsAppButton />

      {/* // </ContextAPI> */}
    </>
  );
};

export default App;
