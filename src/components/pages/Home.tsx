import { Box, Flex, Text, VStack } from "@chakra-ui/layout";
import React, { memo } from "react";

import HomeContentList from "../atoms/content/HomeContentList";
import CustomIcon from "../atoms/icon/CustomIcon";

const Home = memo(() => {
  return (
    <Box as="main" h="100vh" pt={{ base: "4.5em", md: "5em" }}>
      <Flex
        textAlign="center"
        w="100%"
        h="100px"
        m="auto"
        alignItems="center"
        justify="center"
      >
        <Box as="h1" display="block" fontSize="lg" pt={4}>
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
      <Box
        w="80%"
        flexWrap="wrap"
        textAlign="center"
        justifyContent="space-around"
        pt="100px"
        mx="auto"
        mb="20px"
        p="auto"
      >
        <HomeContentList children="Skill" link="/skill" />
        <HomeContentList children="Work" link="/work" />
        <HomeContentList children="Contact" link="/contact" />
      </Box>
      <VStack>
        <Text mt={4}>エンジニアを目指して勉強中です。</Text>
        <Flex pt={4}>
          <CustomIcon mr={5} icon="twitter" />
          <CustomIcon mr={5} icon="github" />
          <CustomIcon icon="mail" />
        </Flex>
      </VStack>
    </Box>
  );
});
export default Home;
