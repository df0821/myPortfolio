import { Box, Stack, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import React, { FC, memo } from "react";

type Props = {
  imageSrc: string;
  imageTitle: string;
  skillText: string;
};

const SkillCard: FC<Props> = memo((props) => {
  const { imageSrc, imageTitle, skillText } = props;
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
      <Stack textAlign="left">
        <Image boxSize="160px" src={imageSrc} alt={imageTitle} m="auto" />
        <Box
          borderTop="2px"
          borderColor="#ADC2A9"
          pt={2}
          letterSpacing="0.05em"
          wordBreak="break-all"
        >
          <Text whiteSpace="pre-wrap">{skillText}</Text>
        </Box>
      </Stack>
    </Box>
  );
});

export default SkillCard;
