import React, { useEffect, useState } from "react";
import { Box, TabList, TabPanel, TabPanels, Tabs, Tab } from "@chakra-ui/react";
import WatchList from "./WatchList";
import BackTest from "./BackTest";
import SignalComp from "./SignalComp";
import { useSelector, useDispatch } from "react-redux";

function MainContent() {
  const [tabIndex, setTabIndex] = useState(0);
  const [defaultIndex, setDefaultIndex] = useState(0);

  const tabListMap = {
    Signals: (active) => (
      <SignalComp Index={0} Active={active} ChangeTab={changeTab} />
    ),
    WatchList: (active) => <WatchList Index={1} Active={active} />,
    BackTest: (active) => <BackTest Index={2} Active={active} />,
  };

  useEffect(() => {
    console.log("Rerendring on Tabe", defaultIndex);
  }, [defaultIndex]);
  const changeTab = (e) => setDefaultIndex(e.target.value);

  const tabComps = Object.keys(tabListMap).map((key) => (
    <Tab ActiveTabIdx={tabIndex}> {key} </Tab>
  ));
  const tabPanelComps = Object.values(tabListMap).map((value) => (
    <TabPanel> {value(tabIndex)} </TabPanel>
  ));

  const onTabClicked = (e) => setTabIndex(e);

  return (
    <Box position="relative" h="100vh">
      <Tabs defaultIndex={defaultIndex} onChange={onTabClicked} align="center">
        <TabList>{tabComps}</TabList>
        <TabPanels>{tabPanelComps}</TabPanels>
      </Tabs>
    </Box>
  );
}

export default MainContent;
