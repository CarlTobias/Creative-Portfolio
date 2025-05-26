import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "#000",
        color: "#FFF",
      },
      "::-webkit-scrollbar": {
        width: "8px",
        height: "8px",
      },
      "::-webkit-scrollbar-track": {
        background: "transparent",
      },
      "::-webkit-scrollbar-thumb": {
        background: "#888",
        borderRadius: "8px",
      },
      "::-webkit-scrollbar-thumb:hover": {
        background: "#555",
      },

      "*": {
        scrollbarWidth: "thin",
        scrollbarColor: "#888 transparent",
      },
    },
  },
  fonts: {
    heading: "'Baskerville', serif",
    body: "'Inter', sans-serif",
  },
});

export default theme;
