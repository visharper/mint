import React from "react";
import { Heading, ButtonGroup, Flex, Spacer, IconButton, useColorMode, useColorModeValue, Container, Button} from '@chakra-ui/react'
import { SunIcon  } from '@chakra-ui/icons'

function MenuBar() {
    const {toggleColorMode} = useColorMode()
    const bgColor = useColorModeValue("brand.default", "whiteAlpha.50")
    const textColor = useColorModeValue("brand.default", "")
    return( 
        <ButtonGroup display={["none", "none", "flex", "flex"]} >
            <Button variant='ghost'>Sign Up</Button>
            <Button variant='ghost'>Log in</Button>
         </ButtonGroup>
        // <Flex>
        //     <Flex
        //     pos="fixed"
        //     top="1rem"
        //     right="1rem"
        //     >
        //     <Flex
        //     align="center"
        //     display={["none", 'none', 'flex', 'flex']}>
        //         <Button
        //         as="a"
        //         variat="ghost"
        //         aria-label="Home"
        //         my={5}
        //         w="100%"
        //         >
        //             Home
        //         </Button>
        //         <Button
        //         as="a"
        //         variat="ghost"
        //         aria-label="Profile"
        //         my={5}
        //         w="100%"
        //         >
        //             Profile
        //         </Button>
        //         <Button
        //         as="a"
        //         variat="ghost"
        //         aria-label="Contact"
        //         my={5}
        //         w="100%"
        //         >
        //             Contact
        //         </Button>
        //         {/* <IconButton size="sm" onClick={toggleColorMode} isRound={true} icon={<SunIcon/>}></IconButton> */}
        //     </Flex>
        //     </Flex>
        //     </Flex>
    )
}

export default MenuBar