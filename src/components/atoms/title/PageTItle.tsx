import { Heading } from "@chakra-ui/layout";
import React, { FC } from "react";

type Props = {
  title: string;
};

const PageTItle: FC<Props> = ({ title }) => {
  return (
    <>
      <Heading
        as="h2"
        fontStyle="oblique"
        borderBottom="solid 2px #899689"
        textShadow="0.02em 0.02em #ADC2A9"
        letterSpacing={{ base: "0.05em", md: "0.1em", lg: "0.2em" }}
        lineHeight={1}
        mb={4}
      >
        {title}
      </Heading>
    </>
  );
};

export default PageTItle;
