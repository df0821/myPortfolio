import { Box } from "@chakra-ui/layout";
import React from "react";
import ContactForm from "../molecules/form/ContactForm";

const Contact = () => {
  return (
    <Box as="main" minHeight="100vh" pt={{ base: "4.5em", md: "5em" }}>
      <ContactForm />
      <div>text</div>
    </Box>
  );
};

export default Contact;
