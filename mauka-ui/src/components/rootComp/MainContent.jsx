import React, { useState } from "react"
import { Box, TabList, TabPanel, TabPanels, Tabs , Tab} from '@chakra-ui/react';
import WatchList from "./WatchList"
import BackTest from "./BackTest";
import SignalComp from "./SignalComp";
import { useSelector, useDispatch } from 'react-redux'

const tabListMap =  {
  "Signals" : (active)=><SignalComp Index={0} Active={active}/>,
  "WatchList": (active)=><WatchList Index={1}  Active={active}/>,
  "BackTest" : (active)=><BackTest Index={2} Active={active}/>,
}


function MainContent() {
  const [tabIndex, setTabIndex] = useState(0)
  const tabComps = Object.keys(tabListMap).map(key => <Tab ActiveTabIdx={tabIndex}>  {key} </Tab>)
  const tabPanelComps = Object.values(tabListMap).map(value => <TabPanel>  {value(tabIndex)} </TabPanel>)
  
  const onTabClicked = (e) => setTabIndex(e) 

  return(
    <Box position="relative" h="100vh">
      <Tabs  onChange={onTabClicked} align="center">
        <TabList >
      {tabComps}
        </TabList>
        <TabPanels>
        {tabPanelComps}
        </TabPanels>
      </Tabs>
    </Box>  
  )
}

export default MainContent