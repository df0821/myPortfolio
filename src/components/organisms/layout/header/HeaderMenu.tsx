import { Box, Flex } from "@chakra-ui/layout";
import React from "react";
import { Link } from "react-router-dom";
import ContentRoutes from "../../../../router/ContentRoutes";

const HeaderMenu = () => {
  return (
    <Flex
      align="center"
      fontSize="md"
      pr={4}
      flexGrow={2}
      display={{ base: "none", md: "flex" }}
      justify="flex-end"
    >
      {ContentRoutes.map(
        (route) =>
          route.id < 4 && (
            <Box pr={4} key={route.path}>
              <Link to={route.path}>{route.content}</Link>
            </Box>
          )
      )}
    </Flex>
  );
};

export default HeaderMenu;
