import { Box } from "@chakra-ui/layout";
import React from "react";

import HomeContentList from "../atoms/content/HomeContentList";
import HomeAbout from "../molecules/home/HomeAbout";
import HomeTitle from "../molecules/home/HomeTitle";

const Home = () => {
  return (
    <Box as="main" h="100vh" pt={{ base: "4.5em", md: "5em" }}>
      <HomeTitle />
      <Box
        w="80%"
        flexWrap="wrap"
        textAlign="center"
        justifyContent="space-around"
        pt="80px"
        mx="auto"
        mb="30px"
      >
        <HomeContentList children="Skill" link="/skill" />
        <HomeContentList children="Work" link="/work" />
        <HomeContentList children="Contact" link="/contact" />
      </Box>
      <HomeAbout />
    </Box>
  );
};
export default Home;
