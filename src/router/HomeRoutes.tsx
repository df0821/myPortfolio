import React from "react";
import Contact from "../components/pages/Contact";
import Home from "../components/pages/Home";
import Skill from "../components/pages/Skill";
import Works from "../components/pages/Works";

const HomeRoutes = [
  {
    path: "/",
    children: <Home />,
  },
  {
    path: "/skill",
    children: <Skill />,
  },
  {
    path: "/work",
    children: <Works />,
  },
  {
    path: "/contact",
    children: <Contact />,
  },
];

export default HomeRoutes;
