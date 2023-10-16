import React, {useState} from "react";
import {getTickerData} from "../api/maukaApi"
import {isTextAllowed, UNDEFINED, periodButtonConf} from "../common"
import DataTableComp from "../components/table";
import {   Progress  } from '@chakra-ui/react'
import { useSelector, useDispatch } from 'react-redux'
import RadioButtons from "./radio";
import { changeInvPeriod } from '../redux/reducers'
import RemoveTickerBtn from "./removeTicker";
import ResearchButton from "./researchBtn";

import {
    FormControl,
    FormLabel,
    Input,
    Box,
    Button,
    HStack,
    SimpleGrid,
  } from '@chakra-ui/react'

import {addTickerToWatchList} from "../redux/actions"

function WatchList(props) {
    const store = useSelector(state=> state.watchList)
    const watchList = store.watchList || []
    const [input, setInput] = useState('')
    const [tableData, setTableData] = useState({})
    const [isInvalid, setIsInvalid] = useState(()=> false)
    const [isLoading, setIsLoading] = useState(()=>false)
    const [period, setPeriod] = useState(store.period)
    const dispatch = useDispatch()

    const handleInputChange = (e) => {
        const ticker = e.target.value
        if (ticker !== UNDEFINED && ticker.length > 0){
            !isTextAllowed(input) ?  setInput(ticker) : setIsInvalid(true)
        }
    }

    const onSubmitHandler = async () => {
        if (input){
            dispatch(addTickerToWatchList({ticker: input}))
            setInput("")
        }
    }

    const onPeriodChange = (value) => {
        setTableData({})
        dispatch(changeInvPeriod({period: value}))
        setPeriod(value)
    }
  
    React.useEffect(()=>{
        async function fetchData(symbols, range){
            console.log("Refreshing Data with ", {symbols, range})
            const tickerData = await getTickerData(symbols, range)
            Object.keys(tickerData).length > 0 &&  setTableData(tickerData)
        }
        watchList.length > 0 && fetchData(watchList, period) 
    }, [watchList, period]
    )

    return(
      <Box>
        <Box>
            <FormControl isRequired>
            <FormLabel>Watch List</FormLabel>
            <HStack spacing='24px'>
            <Box w='50vw' h='40px'>
                <Input 
                        isInvalid = {isInvalid}
                        placeholder='Ticker' 
                        value={input} 
                        onChange={handleInputChange}
                    />

            </Box>
            <Box w='20vw' h='2rem'>
                <RadioButtons Value={period} Params={periodButtonConf} OnChange={onPeriodChange}/>
            </Box>
            <Box w='20vw' h='40px'>
                <Button 
                isLoading={isLoading} 
                onClick={onSubmitHandler}
                colorScheme='teal' 
                size='md'> Submit
            </Button>
            </Box>
            </HStack>
        </FormControl>

    </Box>

        {
            Object.keys(tableData).length > 0 ? <DataTableComp 
                TickersData={tableData}/> : 
                <Progress size='xs' isIndeterminate />
        }
        </Box>

    )
}
  export default WatchList