import { Flex, Text, VStack } from "@chakra-ui/layout";
import React from "react";
import CustomIcon from "../../atoms/icon/CustomIcon";

const HomeAbout = () => {
  return (
    <VStack>
      <Text mt={4}>エンジニアを目指して勉強中です。</Text>
      <Flex pt={4}>
        <CustomIcon mr={5} icon="twitter" url="https://twitter.com/fanalvn16" />
        <CustomIcon icon="github" url="https://github.com/df0821" />
      </Flex>
    </VStack>
  );
};

export default HomeAbout;
