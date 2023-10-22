import * as React from "react";
import { ChakraProvider, Flex, Box, Text, Badge} from "@chakra-ui/react";
import { createColumnHelper } from "@tanstack/react-table";
import { DataTable } from "../common/DataTable";
import { relativeTime, convertTimeToLocalTz, DEFAULT_TIME_FMT } from "../../common/moment";
const columnHelper = createColumnHelper();

const signalCreateDateFmt = (date) => <Flex>
<Box ml='3'>
  <Text>
    {convertTimeToLocalTz(date,DEFAULT_TIME_FMT)}
  </Text>
  <Text fontSize='0.7em'><i>{relativeTime(date)}</i></Text>
</Box>
</Flex>



const columns = [
  columnHelper.accessor("create_date", {
    cell: (info) => signalCreateDateFmt(info.getValue()),
    header: "Timestamp"
  }),
  columnHelper.accessor("ticker", {
    cell: (info) => info.getValue(),
    header: "Ticker"
  }),
  columnHelper.accessor("category", {
    cell: (info) => info.getValue(),
    header: "Category",
    meta: {
      isNumeric: false
    }
  }),
  columnHelper.accessor("message", {
    cell: (info) => info.getValue(),
    header: "Message",
    meta: {
      isNumeric: false
    }
  }),
  columnHelper.accessor("message_type", {
    cell: (info) => info.getValue(),
    header: "Message Type",
    meta: {
      isNumeric: false
    }
  }),
  columnHelper.accessor("time_range", {
    cell: (info) => info.getValue(),
    header: "Interval",
    meta: {
      isNumeric: false
    }
  })
  // ,
  // columnHelper.accessor("create_date", {
  //   cell: (info) => relativeTime(info.getValue()),
  //   header: "Relative"
  // }),
];

export default function SignalTable(props) {
  return (
    <ChakraProvider>
      <DataTable columns={columns} data={props.Data} />
    </ChakraProvider>
  );
}