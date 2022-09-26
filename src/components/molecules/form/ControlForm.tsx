import { FormControl, FormErrorMessage } from "@chakra-ui/react";
import React from "react";

type Props = {
  isInvalid: boolean;
  children: React.ReactNode;
  message: React.ReactNode;
};

const ControlForm = (props: Props) => {
  const { children, message, isInvalid } = props;
  return (
    <FormControl isInvalid={isInvalid} borderColor="#899689">
      {children}
      <FormErrorMessage>{message}</FormErrorMessage>
    </FormControl>
  );
};

export default ControlForm;
