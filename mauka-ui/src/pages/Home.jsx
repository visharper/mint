import React from "react"
import { Flex, Box, Spacer, Heading , Tab, Grid, GridItem, Divider} from '@chakra-ui/react';
import { useAuth0 } from "@auth0/auth0-react";
import MainContent from "../components/rootComp/MainContent";
import SideBar from "../components/rootComp/SideBar";
import Header from "../components/rootComp/Header";

function HomePage() {
  // const {toggleColorMode} = useColorMode()
  //   const bgColor = useColorModeValue("gray.50", "whiteAlpha.50")
  //   const textColor = useColorModeValue("gray.600", "whiteAlpha.600")

  const {loginWithPopup, loginWithRedirect, logout, user, isAuthenticated} = useAuth0()
  console.log("Login: ", isAuthenticated)
  React.useEffect(()=>{
    console.log("------- Authenticated -----", isAuthenticated)
    if (!isAuthenticated){
      loginWithPopup()
    }
    else{
      JSON.stringify(user , null , 2)
    }
     console.log("Logged In User: ", JSON.stringify(user , null , 2))
    },[isAuthenticated])
 return(
  <Box>
  <Flex direction="column">
    <Flex
    boxSize="full"
    bg="blackAlpha.700"
    position="static"
    mb="1rem">
        <Box p='1rem'>
        <Heading textAlign="left" >M A U K A</Heading>
        </Box>
        <Spacer />
          <Header/>
    </Flex>
  </Flex>
      <Box p="0.5rem">
        <MainContent/>
        </Box>
        </Box>
)
}

export default HomePage