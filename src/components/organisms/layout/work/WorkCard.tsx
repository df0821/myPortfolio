import { Box, Stack, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import React, { memo, FC } from "react";

type Props = {
  imageSrc: string;
  imageTitle: string;
  workText: string;
};

const WorkCard: FC<Props> = memo((props) => {
  const { imageSrc, imageTitle, workText } = props;

  return (
    <Box
      w={{ base: "320px", md: "640px" }}
      h={{ base: "300px", md: "280px" }}
      bg="#D3E4CD"
      borderRadius="10px"
      shadow="md"
      p={4}
      mb={8}
    >
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
    </Box>
  );
});

export default WorkCard;
