import { Icon, IconProps, Link } from "@chakra-ui/react";
import React from "react";
import { exLinkIcon } from "../../../assets/icons/exLinkIcon";

type Props = IconProps & {
  url: string;
  icon: keyof typeof exLinkIcon;
  mr?: number;
};

const CustomIcon: React.FC<Props> = (props) => {
  const { url, icon, mr = 0 } = props;
  return (
    <Link href={url} isExternal _hover={{ opacity: 0.8 }}>
      <Icon color="#99A799" mr={mr} as={exLinkIcon[icon]} {...props} />
    </Link>
  );
};

export default CustomIcon;
