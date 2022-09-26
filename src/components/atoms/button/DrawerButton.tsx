import { Button } from "@chakra-ui/react";
import React from "react";

type Props = {
  onClick: () => void;
  content: string;
};

const DrawerButton: React.FC<Props> = (props) => {
  const { onClick, content } = props;
  return (
    <Button onClick={onClick} w="100%" bg="#D3E4CD" _hover={{ bg: "#ADC2A9" }}>
      {content}
    </Button>
  );
};

export default DrawerButton;
