import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./components/pages/Contact";

import Home from "./components/pages/Home";
import Header from "./components/organisms/layout/Header";
import Skill from "./components/pages/Skill";
import Works from "./components/pages/Works";
import theme from "./theme/theme";
import Footer from "./components/organisms/layout/Footer";

function App() {
  return (
    <>
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/skill"} element={<Skill />} />
            <Route path={"/work"} element={<Works />} />
            <Route path={"/contact"} element={<Contact />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ChakraProvider>
    </>
  );
}

export default App;
