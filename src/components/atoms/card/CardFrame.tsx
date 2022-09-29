import { Box } from "@chakra-ui/layout";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const CardFrame: React.FC<Props> = ({ children }) => {
  return (
    <Box
      w={{ base: "320px", md: "640px" }}
      h={{ base: "300px", md: "280px" }}
      bg="#D3E4CD"
      borderRadius="10px"
      shadow="sm"
      p={4}
      mb={8}
    >
      {children}
    </Box>
  );
};

export default CardFrame;
