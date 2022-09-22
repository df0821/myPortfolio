import { VStack, Wrap, WrapItem } from "@chakra-ui/layout";
import React from "react";
import PageTItle from "../atoms/title/PageTItle";
import SkillCard from "../organisms/layout/skill/SkillCard";
import { SkillList } from "../organisms/layout/skill/SkillList";

const Skill = () => {
  return (
    <VStack as="main" pt={{ base: "4.5em", md: "5em" }}>
      <PageTItle title="Skill" />

      <Wrap
        as="section"
        minHeight="100vh"
        p={{ base: 4, md: 10 }}
        justify="space-around"
      >
        {SkillList.map((skill) => (
          <WrapItem key={skill.id}>
            <SkillCard
              imageSrc={skill.imageUrl}
              imageTitle={skill.imageTitle}
              skillText={skill.text}
            />
          </WrapItem>
        ))}
      </Wrap>
    </VStack>
  );
};

export default Skill;
