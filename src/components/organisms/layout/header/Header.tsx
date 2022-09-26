import { Box, Flex, Heading, useDisclosure } from "@chakra-ui/react";
import React, { FC, memo, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import MenuIconButton from "../../../atoms/button/MenuIconButton";
import MenuDrawer from "../../../molecules/drawer/MenuDrawer";
import HeaderMenu from "./HeaderMenu";

const Header: FC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  const onClickHome = useCallback(() => {
    navigate("/");
    onClose();
  }, [navigate, onClose]);
  const onClickSkill = useCallback(() => {
    navigate("/skill");
    onClose();
  }, [navigate, onClose]);
  const onClickWork = useCallback(() => {
    navigate("/work");
    onClose();
  }, [navigate, onClose]);
  const onClickContact = useCallback(() => {
    navigate("/contact");
    onClose();
  }, [navigate, onClose]);

  return (
    <Box as="header">
      <Flex
        as="nav"
        w="100%"
        bg="#D3E4CD"
        align="center"
        justify="space-between"
        position="fixed"
        padding={{ base: 3, md: 5 }}
        height={{ base: "2.5em", md: "3em" }}
      >
        <Flex
          align="center"
          as="a"
          mr={8}
          _hover={{ cursor: "pointer" }}
          onClick={onClickHome}
        >
          <Heading as="h1" fontSize={{ base: "lg", md: "xl" }} ml={2}>
            D.F's Portfolio
          </Heading>
        </Flex>
        <HeaderMenu />
        <MenuIconButton onOpen={onOpen} />
      </Flex>
      <MenuDrawer
        onClose={onClose}
        isOpen={isOpen}
        onClickHome={onClickHome}
        onClickSkill={onClickSkill}
        onClickWork={onClickWork}
        onClickContact={onClickContact}
      />
    </Box>
  );
});

export default Header;
