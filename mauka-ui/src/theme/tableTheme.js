import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const brandTable = defineStyle({
  tr: {
    boxshadow: "lg",
    _odd: {
      bg: "brand.200",
    },
  },
  td: {
    color: "brand.200",
  },
  table: {
    colorScheme: "teal",
  },

  //   _hover: { bg: "brand.100", color: "brand.blue.800", boxShadow: "lg" },
  //   // let's also provide dark mode alternatives
  //   _dark: {
  //     bg: "brand.100",
  //     color: "brand.blue.800",
  //   },
});

export const tableTheme = defineStyleConfig({
  variants: { brandTable },
});
