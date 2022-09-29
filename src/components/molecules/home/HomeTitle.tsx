import { Box, Flex, Text } from "@chakra-ui/layout";
import React from "react";

const HomeTitle = () => {
  return (
    <Flex
      textAlign="center"
      w="100%"
      h="100px"
      m="auto"
      alignItems="center"
      justify="center"
    >
      <Box as="h2" display="block" fontSize="lg" pt={4}>
        <Text fontStyle="oblique">Welcome to</Text>
        <Text
          fontSize={{ base: "3rem", md: "3.5rem" }}
          fontStyle="oblique"
          textShadow="0.02em 0.02em #ADC2A9"
        >
          D.F's Portfolio
        </Text>
      </Box>
    </Flex>
  );
};

export default HomeTitle;
