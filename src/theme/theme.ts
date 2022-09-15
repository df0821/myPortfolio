import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        fontFamily: "Noto Sans JP, sans-serif;",
        backgroundColor: "#FEF5ED",
        color: "#899689",
        fontSize: "1rem",
      },
    },
  },
});

export default theme;
