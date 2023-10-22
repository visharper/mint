import React from 'react';
import Signal from './signal/Signal';
import {COLS_TO_PUBLISH} from "../common"
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Box,
  } from '@chakra-ui/react'
import ResearchButton from './researchBtn';
import RemoveTickerBtn from './removeTicker';


function DataTableComp(props) {
    // const[tableRows, setTableRows] =useState("")
    // const[tableHeader, setTableHeader] =useState("")
    // const[dataCols, setDataColumns] = useState([])
    // const[dataRows, setDataRows] = useState([])
    // const dataObj = props.Data
    // const ticker = props.Ticker
    // const tickers = props.Tickers
    const tickersData = props.TickersData
    // const tickerData = JSON.parse(dataObj)
    // const rows = tickerData.data || []
    // const columns = tickerData.index || []
    const prepareRowCells = (colsData, rowsData) => COLS_TO_PUBLISH.map(type => 
      <Td key={type}><Signal Columns={colsData} DataRows={rowsData} Type={type}/></Td>
      )

    const prepareTableRows = (data) => {
      const objx = Object.keys(data).map(function(ticker, idx) {
        console.log(data[ticker], "<<<<<<<<<<<<<<<")
          const tickerDataObj = JSON.parse(data[ticker])
        console.log(tickerDataObj, "-------<<<<<<<<<<<<<<<")
        const tickerDataRows = tickerDataObj.data || []
          const tickerDataCols = tickerDataObj.index  || []
          let rowsHTML = []
          rowsHTML.push(<Tr key={ticker}>
            <Td>{ticker}</Td>
            {prepareRowCells(tickerDataCols, tickerDataRows)}
            <Td><RemoveTickerBtn/>
            <ResearchButton/></Td>
            
            </Tr>)
          return rowsHTML
      });
      return objx
    }
    
    // const mock_data = { TSLA: '{"name":72,"index":["Date","Open","High","Low","Close","Adj Close","Volume","EMA5","EMA3","EMA20","SMA20","EMAsignal","RSI3","RSI12","macd","signal","hist","BuySell","BuySellValue","TotSignal","Ticker","RSI_SIGNAL","MACD_SIGNAL"],"data":[1696550400000,253.9799957275,261.6499938965,250.6499938965,260.5299987793,260.5299987793,117947000,256.89217179,258.9318550363,254.359189447,258.2910003662,1,74.215942012,55.6915798263,0.6377682008,0.1778381109,0.4599300899,0,0.0,1,"TSLA",1,0]}' }
    // React.useEffect(()=>{
    //   // console.log(dataObj)
    //   //   if(rows.length > 0 ){
    //   //       setDataColumns(columns)
    //   //       setDataRows(rows)
    //   //       // const headerRow = prepareTableRows(columns, true)
    //   //       // setTableHeader(headerRow)
    //   //       // const tableRowHtml = prepareTableRows(rows)
    //   //       // setTableRows(tableRowHtml)
    //   //   }
    // }, [tickersData])

    return(
        <>
           <TableContainer>
                <Table colorScheme='teal'>
            <TableCaption>
              <i>*Signals are subjected to upcoming News, Mergers and Earnings!!!</i>
            </TableCaption>
            <Thead>
      <Tr>
        <Th>Ticker</Th>
        <Th >Price Action</Th>
        <Th> MACD</Th>
        <Th >RSI</Th>
      </Tr>
    </Thead>
    <Tbody>
        {prepareTableRows(tickersData)}
    </Tbody>
            </Table>
    </TableContainer>
        </>

    )   
}
export default DataTableComp