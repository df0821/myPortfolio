import { Box } from "@chakra-ui/layout";
import React, { memo } from "react";

const Footer = memo(() => {
  return (
    <Box
      as="footer"
      w="100%"
      bottom="0"
      position="absolute"
      textAlign="center"
      bg="#D3E4CD"
      fontSize="sm"
    >
      &copy; 2022 D.F's Portfolio
    </Box>
  );
});

export default Footer;
