import React from "react"
import Header from "../components/header"
import Main from "../components/main"
import { Box } from '@chakra-ui/react';
import ReactDOM from "react-dom/client";
import { useAuth0 } from "@auth0/auth0-react";


function HomePage() {
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
  <Box position="relative" h="100vh">
    <Header/>
    <Main/>
  </Box>  
)
}

export default HomePage