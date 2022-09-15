import { Wrap, WrapItem } from "@chakra-ui/layout";
import React, { memo } from "react";
import WorkCard from "../organisms/layout/work/WorkCard";

const Works = memo(() => {
  return (
    <Wrap
      as="main"
      minHeight="100vh"
      p={{ base: 4, md: 10 }}
      justify="space-around"
      pt={{ base: "4.5em", md: "5em" }}
    >
      <WrapItem>
        <WorkCard />
      </WrapItem>
    </Wrap>
  );
});

export default Works;
