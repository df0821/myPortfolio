import React, { memo } from "react";

import HomeRoutes from "../../router/HomeRoutes";
import Footer from "../organisms/layout/footer/Footer";
import Header from "../organisms/layout/header/Header";

const PageLayout = memo(() => {
  return (
    <>
      <Header />
      <HomeRoutes />
      <Footer />
    </>
  );
});

export default PageLayout;
