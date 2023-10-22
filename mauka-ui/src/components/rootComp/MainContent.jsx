import React from "react"
import { Box, TabList, TabPanel, TabPanels, Tabs , Tab} from '@chakra-ui/react';
import WatchList from "./WatchList"
import BackTest from "./BackTest";
import SignalComp from "./SignalComp";


function MainContent() {
 return(
  <Box position="relative" h="100vh">
    <Tabs>
      <TabList>
        {/* <Tab _selected={{color: 'white', bg: 'purple.400'}}> Signals </Tab> */}
        <Tab _selected={{color: 'white', bg: '#85bb65'}}> Signals </Tab>
        <Tab _selected={{color: 'white', bg: '#85bb65'}}> BackTest </Tab>
        <Tab _selected={{color: 'white', bg: '#85bb65'}}> WatchList </Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <SignalComp/>
        </TabPanel>
        <TabPanel>
          <BackTest/>
        </TabPanel>
        <TabPanel>
          <WatchList/>
        </TabPanel>
      </TabPanels>
    </Tabs>
  </Box>  
)
}

export default MainContent