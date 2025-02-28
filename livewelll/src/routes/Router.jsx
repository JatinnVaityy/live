import { lazy } from "react";
import { Navigate } from "react-router-dom";
import PrivateRoute from "./PrivateRoute.jsx"; 

const FullLayout = lazy(() => import("../layouts/FullLayout.jsx"));
const Starter = lazy(() => import("../views/Starter.jsx"));
const About = lazy(() => import("../views/About.jsx"));
const GPSlocation = lazy(() => import("../views/GPSlocation.jsx"));
const Signin = lazy(() => import("../views/Signin.jsx"));
const Signup = lazy(() => import("../views/Signup.jsx"));
const Profile = lazy(() => import("../views/Profile.jsx"));
const Alerts = lazy(() => import("../views/Alert.jsx"));
const SymptomChecker = lazy(()=> import("../views/Symptom.jsx"));

const ThemeRoutes = [
  { path: "/signin", element: <Signin /> },
  { path: "/signup", element: <Signup /> },
  {
    path: "/",
    element: <PrivateRoute element={<FullLayout />} />, // Protect FullLayout
    children: [
      { path: "/", element: <Navigate to="/signin" replace /> },
      { path: "/dashboard", exact: true, element: <Starter /> },
      { path: "/Smartpill", exact: true, element: <About /> },
      { path: "/symptom", exact: true, element: <SymptomChecker /> },
      { path: "/gps-location", exact: true, element: <GPSlocation /> },
      { path: "/profile", exact: true, element: <Profile /> },
      { path: "/alert", exact: true, element: <Alerts /> }

    ],
  },
];

export default ThemeRoutes;
