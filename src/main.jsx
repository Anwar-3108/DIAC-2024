import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import { BrowserRouter } from "react-router-dom";
import ShimmerUI from "./components/ShimmerUI";

const App = lazy(() => import("./App"));

const rootElement = document.getElementById("root");

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<ShimmerUI/>}>
        <App />
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
);
