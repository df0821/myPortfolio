import { Wrap, WrapItem } from "@chakra-ui/layout";
import React from "react";
import SkillCard from "../organisms/layout/skill/SkillCard";
import { SkillList } from "../organisms/layout/skill/SkillList";

const Skill = () => {
  return (
    <Wrap
      as="main"
      minHeight="100vh"
      p={{ base: 4, md: 10 }}
      justify="space-around"
      pt={{ base: "4.5em", md: "5em" }}
    >
      {SkillList.map((skill) => (
        <WrapItem key={skill.id}>
          <SkillCard
            imageUrl={skill.imageUrl}
            imageTitle={skill.imageTitle}
            skillText={skill.text}
          />
        </WrapItem>
      ))}
    </Wrap>
  );
};

export default Skill;
