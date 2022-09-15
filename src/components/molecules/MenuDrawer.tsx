import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
} from "@chakra-ui/react";
import React, { FC, memo } from "react";

type Props = {
  onClose: () => void;
  onClickHome: () => void;
  onClickSkill: () => void;
  onClickWork: () => void;
  onClickContact: () => void;
  isOpen: boolean;
};

const MenuDrawer: FC<Props> = memo((props) => {
  const {
    onClose,
    onClickHome,
    onClickSkill,
    onClickWork,
    onClickContact,
    isOpen,
  } = props;

  return (
    <Drawer placement="right" size="xs" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerBody p={0} bg="#FEF5ED">
            <Button
              onClick={onClickHome}
              w="100%"
              bg="#D3E4CD"
              _hover={{ bg: "#ADC2A9" }}
            >
              Home
            </Button>
            <Button
              onClick={onClickSkill}
              w="100%"
              bg="#D3E4CD"
              _hover={{ bg: "#ADC2A9" }}
            >
              Skill
            </Button>
            <Button
              onClick={onClickWork}
              w="100%"
              bg="#D3E4CD"
              _hover={{ bg: "#ADC2A9" }}
            >
              Work
            </Button>
            <Button
              onClick={onClickContact}
              w="100%"
              bg="#D3E4CD"
              _hover={{ bg: "#ADC2A9" }}
            >
              Contact
            </Button>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
});

export default MenuDrawer;
