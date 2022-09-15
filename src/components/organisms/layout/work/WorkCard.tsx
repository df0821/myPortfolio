import { Box, Stack, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import React, { memo } from "react";

const WorkCard = memo(() => {
  return (
    <Box
      w={{ base: "320px", md: "640px" }}
      h={{ base: "320px", md: "320px" }}
      bg="#D3E4CD"
      borderRadius="10px"
      shadow="md"
      p={4}
      mb={8}
    >
      <Stack textAlign="center">
        <Image boxSize="160px" src="" alt="work1" m="auto" />
        <Box borderTop="2px" borderColor="#ADC2A9" pt={4}>
          <Text>work1です</Text>
        </Box>
      </Stack>
    </Box>
  );
});

export default WorkCard;
