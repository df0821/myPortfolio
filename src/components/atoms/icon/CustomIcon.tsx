import { Icon, IconProps } from "@chakra-ui/react";
import React from "react";
import { exLinkIcon } from "../../../assets/icons/exLinkIcon";

type Props = IconProps & {
  icon: keyof typeof exLinkIcon;
  mr?: number;
};

const CustomIcon: React.FC<Props> = (props) => {
  const { icon, mr = 0 } = props;
  return <Icon color="#99A799" mr={mr} as={exLinkIcon[icon]} {...props} />;
};

export default CustomIcon;
