import {extendTheme, withDefaultColorScheme, withDefaultVariant} from "@chakra-ui/react";

const Theme = extendTheme({
    colors: {
        brand:{
            50: "gray.50",
            100: "gray.100",
            200: "gray.200",
            400: "gray.400",
            5000: "gray.500"
        }
    },
    fonts:{
        heading:  `'Open Sans', sans-serif`,
        body: `Inter`,
    },
    
},
withDefaultColorScheme({
}),
// withDefaultVariant({
//     variant: "filled",
//     components: ["Input", "Select", "Radio"]
// })
)

export default Theme