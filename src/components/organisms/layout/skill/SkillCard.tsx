import { Box, Stack, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import React, { FC, memo } from "react";

import { CardProps } from "../../../../types/CardType";
import CardFrame from "../../../atoms/card/CardFrame";

const SkillCard: FC<CardProps> = memo((props) => {
  const { imageSrc, imageTitle, skillText } = props;
  return (
    <CardFrame>
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
    </CardFrame>
  );
});

export default SkillCard;
