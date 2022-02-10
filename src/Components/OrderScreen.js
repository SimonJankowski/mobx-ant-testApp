import React from "react";
import ToolList from "./ToolList";
import { MainStore } from "./MainStore";
import {toJS} from 'mobx'

const OrdersScreen = () =>{
    return(
        <>
        {/* paragraph added just to prove that different routes are sharing the same store */}
        <p style={{color:"red", margin:10}}>Be careful, don't order too many tools, your current number of staff is: {toJS(MainStore.workers.length)} </p> 
        <ToolList MainStore={MainStore}/>
        
        </>
    )
}

export default OrdersScreen;