import { Box, Stack, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import React, { memo, FC } from "react";

import { CardProps } from "../../../../types/CardType";
import CardFrame from "../../../atoms/card/CardFrame";

const WorkCard: FC<CardProps> = memo((props) => {
  const { imageSrc, imageTitle, workText } = props;

  return (
    <CardFrame>
      <Stack textAlign="left">
        <Image
          src={imageSrc}
          alt={imageTitle}
          m="auto"
          h="160px"
          mb={3}
          border="2px solid #ADC2A9"
        />
        <Box
          borderTop="2px"
          borderColor="#ADC2A9"
          pt={2}
          letterSpacing="0.05em"
          wordBreak="break-all"
        >
          <Text whiteSpace="pre-wrap" overflowWrap="normal">
            {workText}
          </Text>
        </Box>
      </Stack>
    </CardFrame>
  );
});

export default WorkCard;
