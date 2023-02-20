import React, { useContext, useEffect } from "react";
import { Web3Context } from "./context/web3Context";
import Ballot from "../src/abi/Ballot.json"

const DashBoard = () =>{
    const web3 = useContext(Web3Context);
    useEffect(()=>{
        console.log(web3,Ballot.abi)
    })
    return (<h1>{web3?.address}</h1>)
}

export default DashBoard;