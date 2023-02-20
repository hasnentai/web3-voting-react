import React, { useContext, useEffect } from "react";
import { Web3Context } from "./context/web3Context";
import Ballot from "./abi/Ballot.json"
import SideMenu from "./components/SideMenu";
import Header from "./components/Header";

const DashBoard = () =>{
   
   
    return (<>
        <main class="relative h-screen overflow-hidden bg-gray-100 dark:bg-gray-800 ">
            <div class="flex items-start justify-between">
                <div class="relative hidden h-screen my-4 ml-4 shadow-lg lg:block w-80">
                    <SideMenu/>
                </div>
                <div class="flex flex-col w-full pl-0 md:p-4 md:space-y-4">
                    <Header />
                    </div>
                </div>
            </main>
        </>);   
}

export default DashBoard;