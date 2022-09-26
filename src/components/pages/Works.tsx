import { VStack, Wrap, WrapItem } from "@chakra-ui/layout";
import React, { memo } from "react";
import PageTItle from "../atoms/title/PageTItle";
import WorkCard from "../organisms/layout/work/WorkCard";
import { WorkList } from "../organisms/layout/work/WorkList";

const Works = memo(() => {
  return (
    <VStack as="main" pt={{ base: "4.5em", md: "5em" }} minHeight="100vh">
      <PageTItle title="Work" />

      <Wrap as="main" p={{ base: 4, md: 10 }} justify="space-around">
        {WorkList.map((work) => (
          <WrapItem key={work.id}>
            <WorkCard
              imageSrc={work.imageSrc}
              imageTitle={work.imageTitle}
              workText={work.text}
            />
          </WrapItem>
        ))}
      </Wrap>
    </VStack>
  );
});

export default Works;
