import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";

import theme from "./theme/theme";
import PageLayout from "./components/templates/PageLayout";

function App() {
  return (
    <>
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <PageLayout />
        </BrowserRouter>
      </ChakraProvider>
    </>
  );
}

export default App;
