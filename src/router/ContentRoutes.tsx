import React from "react";
import Contact from "../components/pages/Contact";
import Home from "../components/pages/Home";
import Page404 from "../components/pages/Page404";
import Skill from "../components/pages/Skill";
import Works from "../components/pages/Works";

const ContentRoutes = [
  {
    id: 0,
    content: "Home",
    path: "/",
    children: <Home />,
  },
  {
    id: 1,
    content: "Skill",
    path: "/skill",
    children: <Skill />,
  },
  {
    id: 2,
    content: "Work",
    path: "/work",
    children: <Works />,
  },
  {
    id: 3,
    content: "Contact",
    path: "/contact",
    children: <Contact />,
  },
  {
    id: 4,
    content: "Page404",
    path: "*",
    children: <Page404 />,
  },
];

export default ContentRoutes;
