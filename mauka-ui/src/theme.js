import {extendTheme, withDefaultColorScheme, withDefaultVariant} from "@chakra-ui/react";

const borderRadius = {
    radii: {
      none: '0',
      sm: '0.125rem',
      base: '0.25rem',
      md: '0.375rem',
      lg: '0.5rem',
      xl: '0.75rem',
      '2xl': '1rem',
      '3xl': '1.5rem',
      full: '9999px',
    },
  }
  
const Theme = extendTheme({
    colors: {
        brand:{
            100: "#85bb65",
            200: "green.200",
            400: "green.400",
            green:{
                100: "green.100",
                200: "green.200",
                400: "green.400",
                500: "green.500",
            },
            blue:{
                100: "blue.100",
                200: "blue.300",
                300: "blue.300",
            },
            gray:{
                50: "gray.50",
                100: "gray.100",
                200: "gray.200",
                400: "gray.400",
                500: "gray.500",
            }
        }
    },
    fonts:{
        heading:  `'Open Sans', sans-serif`,
        body: `Inter`,
    },
    // components: ["Table"]
},
withDefaultColorScheme({
    colorScheme: "brand.blue"
}),
withDefaultVariant({
    variant: "filled",
    components: ["Input", "Select", "Radio"]
})
)

export default Theme