import { Box } from "@chakra-ui/layout";
import React, { memo } from "react";

import ContactForm from "../organisms/layout/form/ContactForm";

const Contact = memo(() => {
  return (
    <Box as="main" minHeight="100vh" pt={{ base: "4.5em", md: "5em" }}>
      <ContactForm />
    </Box>
  );
});

export default Contact;
