import React from "react";
import { Route, Routes } from "react-router-dom";
import ContentRoutes from "./ContentRoutes";

const HomeRoutes = () => {
  return (
    <Routes>
      {ContentRoutes.map((route) => (
        <Route key={route.id} path={route.path} element={route.children} />
      ))}
    </Routes>
  );
};

export default HomeRoutes;
