import React, { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import ErrorBoundary from "../pages/ErrorBoundary";
import NotFound from "../pages/NotFound";

const Home = lazy(() => import("../pages/Home"));
const AboutUs = lazy(() => import("../pages/AllAboutUs/AboutUs"));
const Careers = lazy(() => import("../pages/AllCareer/Careers"));
const JobDescription = lazy(() => import("../pages/AllCareer/JobDescription"));
const Courses = lazy(() => import("../pages/AllCourses/Courses"));
const Industrial_Automation_Training = lazy(() =>
  import("../pages/AllCourses/Industrial_Automation_Training")
);
const Drives_and_Motors = lazy(() =>
  import("../pages/AllCourses/Drives_and_Motors")
);
const PLC_Training = lazy(() => import("../pages/AllCourses/PLC_Training"));
const Simotion_Training = lazy(() =>
  import("../pages/AllCourses/Simotion_Training")
);
const Industrial_Training = lazy(() =>
  import("../pages/AllCourses/Industrial_Training")
);
const Process_Instrumentation = lazy(() =>
  import("../pages/AllCourses/Process_Instrumentation")
);
const Summer_Winter_Training = lazy(() =>
  import("../pages/AllCourses/Summer_Winter_Training")
);
const PLC_Networking = lazy(() => import("../pages/AllCourses/PLC_Networking"));
const Panel_Designing_and_AutoCAD = lazy(() =>
  import("../pages/AllCourses/Panel_Designing_and_AutoCAD")
);
const Servo_Motor = lazy(() => import("../pages/AllCourses/Servo_Motor"));
const SCADA_and_HMI = lazy(() => import("../pages/AllCourses/SCADA_and_HMI"));
const Robotics_Training = lazy(() =>
  import("../pages/AllCourses/Robotics_Training")
);
const DCS_Training = lazy(() => import("../pages/AllCourses/DCS_Training"));
const Corporate_Training = lazy(() =>
  import("../pages/AllCorporateTrainings/Corporate_Training")
);
const Placement = lazy(() => import("../pages/AllPlacement/Placement"));

const FallbackLoader = () => <p>This component is loading</p>;

const AllRoutes = () => {
  return (
    <Routes>
      {/*=================== home routes start ================== */}

      <Route
        path="/"
        element={
          <Suspense fallback={<FallbackLoader />}>
            <Home />
          </Suspense>
        }
        errorElement={<ErrorBoundary />}
      />

      {/*=================== home routes end ========================*/}

      {/* ===============about routes start======================== */}

      <Route
        path="/about-us"
        element={
          <Suspense fallback={<FallbackLoader />}>
            <AboutUs />
          </Suspense>
        }
        errorElement={<ErrorBoundary />}
      />

      {/*===================== about routes  end================ */}

      {/*===================== courses routes start==================== */}

      <Route
        path="/courses"
        element={
          <Suspense fallback={<FallbackLoader />}>
            <Courses />
          </Suspense>
        }
        errorElement={<ErrorBoundary />}
      />

      <Route
        path="/courses/industrial-automation-training"
        element={
          <Suspense fallback={<FallbackLoader />}>
            <Industrial_Automation_Training />
          </Suspense>
        }
        errorElement={<ErrorBoundary />}
      />
      <Route
        path="/courses/drives-and-motors"
        element={
          <Suspense fallback={<FallbackLoader />}>
            <Drives_and_Motors />
          </Suspense>
        }
        errorElement={<ErrorBoundary />}
      />
      <Route
        path="/courses/plc-networking"
        element={
          <Suspense fallback={<FallbackLoader />}>
            {/* < /> */}
            <PLC_Networking />
          </Suspense>
        }
        errorElement={<ErrorBoundary />}
      />
      <Route
        path="/courses/simotion-training"
        element={
          <Suspense fallback={<FallbackLoader />}>
            {/* < /> */}
            <Simotion_Training />
          </Suspense>
        }
        errorElement={<ErrorBoundary />}
      />
      <Route
        path="/courses/industrial-training"
        element={
          <Suspense fallback={<FallbackLoader />}>
            {/* < /> */}
            <Industrial_Training />
          </Suspense>
        }
        errorElement={<ErrorBoundary />}
      />
      <Route
        path="/courses/process-instrumentation"
        element={
          <Suspense fallback={<FallbackLoader />}>
            {/* < /> */}
            <Process_Instrumentation />
          </Suspense>
        }
        errorElement={<ErrorBoundary />}
      />
      <Route
        path="/courses/summer-winter-training"
        element={
          <Suspense fallback={<FallbackLoader />}>
            {/* < /> */}
            <Summer_Winter_Training />
          </Suspense>
        }
        errorElement={<ErrorBoundary />}
      />
      <Route
        path="/courses/plc-training"
        element={
          <Suspense fallback={<FallbackLoader />}>
            {/* < /> */}
            <PLC_Training />
          </Suspense>
        }
        errorElement={<ErrorBoundary />}
      />
      <Route
        path="/courses/panel-designing-and-autocad"
        element={
          <Suspense fallback={<FallbackLoader />}>
            {/* < /> */}
            <Panel_Designing_and_AutoCAD />
          </Suspense>
        }
        errorElement={<ErrorBoundary />}
      />
      <Route
        path="/courses/servo-motor"
        element={
          <Suspense fallback={<FallbackLoader />}>
            {/* < /> */}
            <Servo_Motor />
          </Suspense>
        }
        errorElement={<ErrorBoundary />}
      />
      <Route
        path="/courses/scad-and-hmi"
        element={
          <Suspense fallback={<FallbackLoader />}>
            {/* < /> */}
            <SCADA_and_HMI />
          </Suspense>
        }
        errorElement={<ErrorBoundary />}
      />
      <Route
        path="/courses/robotics-training"
        element={
          <Suspense fallback={<FallbackLoader />}>
            {/* < /> */}
            <Robotics_Training />
          </Suspense>
        }
        errorElement={<ErrorBoundary />}
      />
      <Route
        path="/courses/dcs-training"
        element={
          <Suspense fallback={<FallbackLoader />}>
            {/* < /> */}
            <DCS_Training />
          </Suspense>
        }
        errorElement={<ErrorBoundary />}
      />

      {/*===================== courses routes end ====================*/}

      {/*====================== corporate routes start=============== */}

      <Route
        path="/corporate-training"
        element={
          <Suspense fallback={<FallbackLoader />}>
            <Corporate_Training />
          </Suspense>
        }
        errorElement={<ErrorBoundary />}
      />
      {/*========================= corporate  routes end=================== */}

      {/*====================== placement  cell route  start=============== */}

      <Route
        path="/placement"
        element={
          <Suspense fallback={<FallbackLoader />}>
            <Placement />
          </Suspense>
        }
        errorElement={<ErrorBoundary />}
      />

      {/*====================== placement  cell route end =============== */}

      {/*===================== careers routes start ===================*/}
      <Route
        path="/careers"
        element={
          <Suspense fallback={<FallbackLoader />}>
            <Careers />
          </Suspense>
        }
        errorElement={<ErrorBoundary />}
      />
      <Route
        path="/careers/job/details/:id"
        element={
          <Suspense fallback={<FallbackLoader />}>
            <JobDescription />
          </Suspense>
        }
        errorElement={<ErrorBoundary />}
      />

      {/*========================= careers routes end =================*/}

      {/*========================== error routes start=================*/}

      <Route path="/*" element={<Navigate to="/404" />} />
      <Route
        path="/404"
        element={
          <Suspense fallback={<FallbackLoader />}>
            <NotFound />
          </Suspense>
        }
        errorElement={<ErrorBoundary />}
      />

      {/*================= error  routes end===========================*/}
    </Routes>
  );
};

export default AllRoutes;
