import React, {useState} from "react";
import { Button, Text } from '@chakra-ui/react'
import {TREND_CONF} from "../../common"

function Signal(props) {
    const {RowJSON, Column, Type} = props
    const [color, setColor] = useState("")
    const [value, setValue] = useState("")
    React.useEffect(()=>{
        const colValue = RowJSON[Column]
        const dataConf = TREND_CONF[colValue]
        if (dataConf !== undefined && Object.keys(dataConf).length > 0)
        {setColor(dataConf.color)
            setValue(colValue)
        }
        else{
            setValue(colValue)
        }

    },[RowJSON])
    return(<div>
        {color ? <Text 
            color={color}>{value}
         </Text>
         : <Text> {value}</Text>}
          </div>)
}

export default Signal