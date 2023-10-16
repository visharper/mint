import React from "react"
import Header from "../components/header"
import WatchList from "../components/watchList"
import { Box, VStack } from '@chakra-ui/react';
import { connect } from "react-redux";


function WatchListPage() {

return(
  <>
    <Header/>
    <WatchList/>
    </>
)
}
const mapStateToProps = (state) => ({
  watchListStore: state
})
export default connect(mapStateToProps)(WatchListPage)