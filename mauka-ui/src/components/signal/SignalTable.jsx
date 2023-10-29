import * as React from "react";
import { ChakraProvider, Flex, Box, Text, Badge, filter} from "@chakra-ui/react";
import { createColumnHelper } from "@tanstack/react-table";
import { DataTable } from "../common/DataTable";
import { relativeTime, convertTimeToLocalTz, DEFAULT_TIME_FMT } from "../../common/moment";
import { useSelector , connect} from 'react-redux'

const columnHelper = createColumnHelper();

const signalCreateDateFmt = (date) => <Flex>
  <Box ml='3'>
    <Text>
      {convertTimeToLocalTz(date, DEFAULT_TIME_FMT)}
    </Text>
    <Text fontSize='0.7em'><i>{relativeTime(date)}</i></Text>
  </Box>
</Flex>


const columns = [
  columnHelper.accessor("create_date", {
    field: "create_date",
    cell: (info) => signalCreateDateFmt(info.getValue()),
    header: "Timestamp"
  }),
  columnHelper.accessor("ticker", {
    field: "ticker",
    cell: (info) => info.getValue(),
    header: "Ticker",
    isFilter: true,
    filter: ["XRX"]
  }),
  columnHelper.accessor("category", {
    field: "category",
    cell: (info) => info.getValue(),
    header: "Category",
    meta: {
      isNumeric: false
    },
    isFilter: true
  }),
  columnHelper.accessor("message", {
    field: "message",
    cell: (info) => info.getValue(),
    header: "Message",
    meta: {
      isNumeric: false
    },
    isFilter: true
  }),
  columnHelper.accessor("message_type", {
    field: "message_type",
    cell: (info) => info.getValue(),
    header: "Message Type",
    meta: {
      isNumeric: false
    },
    isFilter: true
  }),
  columnHelper.accessor("time_range", {
    field: "time_range",
    cell: (info) => info.getValue(),
    header: "Interval",
    meta: {
      isNumeric: false
    }
  })
];

function SignalTable(props) {
  const {Data, state} = props
  const [data, setData] = React.useState(()=>Data)
  const store = useSelector(state => state.watchList)
  const {signalFilters} = store
  const [totalRows, setTotalRows] = React.useState(()=>Data.length)
  const [filters, setFilters] = React.useState(()=> signalFilters)
  
  React.useEffect(()=>{
    let filteredData = data
    console.log("---> store --.> ", store.signalFilters)
    if (signalFilters.length > 0){
      console.log("Applying Filters : ", signalFilters)
        const newData = signalFilters.map(({key, value}) => {
          if (value !== undefined && value){
            filteredData = filteredData.filter(item=> value.includes(item[key]))
          }
          return filteredData
        })
      const rowsForTable = newData[newData.length - 1] || []
      setTotalRows(rowsForTable.length)
      setData(rowsForTable)
    }
  
  },[signalFilters])
  return (
    <ChakraProvider>
      <DataTable columns={columns} data={data} RowsCount={totalRows}/>
    </ChakraProvider>
  );
}
const mapStateToProps = (state) => ({ state: state.watchList })

export default connect(mapStateToProps)(SignalTable)
