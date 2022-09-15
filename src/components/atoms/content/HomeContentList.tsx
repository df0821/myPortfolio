import { Box, Text } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/react";
import React, { FC, memo } from "react";
import { Link } from "react-router-dom";

type Props = {
  children: string;
  link: string;
};

const HomeContentList: FC<Props> = memo((props) => {
  const { children, link } = props;
  return (
    <Link to={link}>
      <Button
        width={{ base: "80%", md: "70%" }}
        bg="#D3E4CD"
        height={{ base: "70px", md: "80px" }}
        display="flex"
        borderRadius="10px"
        fontSize={{ base: "3rem", md: "3.2rem" }}
        letterSpacing={{ base: "0.05em", md: "0.1em", lg: "0.2em" }}
        mx="auto"
        mb={{ base: 4, md: 8 }}
        shadow="sm"
        cursor="pointer"
        _hover={{
          bg: "#ADC2A9",
        }}
      >
        <Box mt={2}>
          <Text>{children}</Text>
        </Box>
      </Button>
    </Link>
  );
});

export default HomeContentList;
