import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
} from "@chakra-ui/react";
import React, { FC, memo } from "react";
import DrawerButton from "../../atoms/button/DrawerButton";

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
            <DrawerButton onClick={onClickHome} content="Home" />
            <DrawerButton onClick={onClickSkill} content="Skill" />
            <DrawerButton onClick={onClickWork} content="Work" />
            <DrawerButton onClick={onClickContact} content="Contact" />
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
});

export default MenuDrawer;
