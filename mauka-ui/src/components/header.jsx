import React from "react";
import { Heading, VStack, Text, Flex, Spacer, IconButton, useColorMode, useColorModeValue} from '@chakra-ui/react'
import { SunIcon  } from '@chakra-ui/icons'

function Header() {
    const {toggleColorMode} = useColorMode()
    const bgColor = useColorModeValue("gray.50", "whiteAlpha.50")
    const textColor = useColorModeValue("gray.600", "whiteAlpha.600")
    return( 
        <Flex minWidth='max-content' alignItems='center' p="4" gap='5'>
        <VStack>
              <Heading fontWeight="extrabold" bg="gray.100" >M A U K A</Heading>
              <Text bg="gray.100" > <i> opportunities for tomorrow</i> </Text>
         </VStack>
         <Spacer />
         <IconButton size="sm" onClick={toggleColorMode} isRound={true} icon={<SunIcon/>}></IconButton>
         
        </Flex>
    )
}

export default Header