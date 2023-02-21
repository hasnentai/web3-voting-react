import React, { useContext, useEffect, useState } from "react";

import SideMenu from "./components/SideMenu";
import Header from "./components/Header";
import ResultCard from "./components/ResultCard";
import VoteCastComponent from "./components/VoteCast";
import Voters from "./components/Voters";
import getChairmanAddress from "./service/getChairmanAddress";
import { Web3Context } from "./context/web3Context";

const DashBoard = () => {
  let web3 = useContext(Web3Context);
  let [chairman, setChairman] = useState();
  useEffect(() => {
    const fetchChairmanAddress = async () => {
      let acc = await getChairmanAddress(web3?.ballot);
      setChairman(acc);
    };
    fetchChairmanAddress();
  }, [web3]);

  return (
    <>
      <main class="relative h-screen overflow-hidden bg-gray-100 dark:bg-gray-800 ">
        <div class="flex items-start justify-between">
          <div class="relative hidden h-screen my-4 ml-4 shadow-lg lg:block w-80">
            <SideMenu />
          </div>
          <div class="flex flex-col w-full pl-0 md:p-4 md:space-y-4">
            <Header />

            <div class="h-screen pt-2 pb-24 pl-2 pr-2 overflow-auto md:pt-0 md:pr-0 md:pl-0">
              <div className="flex">
                <ResultCard />

                {chairman === web3?.account ? (
                  <Voters />
                ) : (
                  <VoteCastComponent />
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default DashBoard;
